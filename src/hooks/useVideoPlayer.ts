import { useEffect } from "react";

/**
 * Wires up one of the prototype's custom video players by id prefix:
 *   <prefix>v (video), <prefix>w (wrapper), <prefix>-play, -mute, -time, -seek, -full.
 * Behaviour matches the design: never autoplays, starts muted, sound only after
 * the visitor presses Unmute, pauses when scrolled out of view, "Expand" goes fullscreen.
 */
export function useVideoPlayer(prefix: string, opts: { forceMuted?: boolean; pauseWhenHidden?: boolean } = {}) {
  const { forceMuted = false, pauseWhenHidden = false } = opts;
  useEffect(() => {
    const g = (id: string) => document.getElementById(id);
    const v = g(prefix + "v") as HTMLVideoElement | null;
    const w = g(prefix + "w") as HTMLElement | null;
    const play = g(prefix + "-play"), mute = g(prefix + "-mute"), time = g(prefix + "-time");
    const seek = g(prefix + "-seek") as HTMLInputElement | null, full = g(prefix + "-full");
    if (!v || !w || !play || !mute || !time || !seek || !full) return;
    let exp = false, seeking = false, snd = false, auto = false, savedStyle = "";
    const fmt = (x: number) => { x = Math.floor(x || 0); return Math.floor(x / 60) + ":" + String(x % 60).padStart(2, "0"); };
    const sync = () => {
      play.textContent = v.paused ? "▶" : "❚❚";
      mute.textContent = v.muted ? "Unmute" : "Mute";
      time.textContent = fmt(v.currentTime) + " / " + fmt(v.duration);
      if (!seeking) seek.value = String(v.duration ? (v.currentTime / v.duration) * 1000 : 0);
    };
    const setExp = (on: boolean) => {
      exp = on;
      full.textContent = on ? "Close" : "Expand";
      if (on) {
        savedStyle = w.getAttribute("style") || "";
        w.style.cssText += ";position:fixed;inset:0;z-index:300;border-radius:0;aspect-ratio:auto;width:100vw;height:100vh;opacity:1;transform:none;transition:none";
        document.body.style.overflow = "hidden";
      } else {
        w.setAttribute("style", savedStyle);
        document.body.style.overflow = "";
      }
    };
    const toggle = () => { if (v.paused) void v.play(); else v.pause(); };
    const onMute = () => { snd = v.muted; v.muted = !v.muted; };
    const onVol = () => { if (!v.muted && !snd) v.muted = true; };
    const onPlayMute = () => { if (!snd) v.muted = true; };
    const onSeekInput = () => { seeking = true; if (v.duration) v.currentTime = (Number(seek.value) / 1000) * v.duration; };
    const onSeekChange = () => { seeking = false; };
    const onFull = () => {
      if (!exp) {
        setExp(true);
        const el = w as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void };
        const fn = el.requestFullscreen || el.webkitRequestFullscreen;
        if (fn) { try { const p = fn.call(el); if (p && "catch" in p) p.catch(() => {}); } catch { /* ignore */ } }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) void document.exitFullscreen();
        setExp(false);
      }
    };
    const onFsChange = () => { if (!document.fullscreenElement && exp) setExp(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && exp) setExp(false); };
    const onHidden = () => { if (document.hidden && !v.paused) { auto = true; v.pause(); setTimeout(() => { auto = false; }, 50); } };
    void auto;

    const events = ["timeupdate", "play", "pause", "volumechange", "loadedmetadata"];
    events.forEach((e) => v.addEventListener(e, sync));
    v.addEventListener("click", toggle);
    play.addEventListener("click", toggle);
    mute.addEventListener("click", onMute);
    v.addEventListener("volumechange", onVol);
    if (forceMuted) v.addEventListener("play", onPlayMute);
    seek.addEventListener("input", onSeekInput);
    seek.addEventListener("change", onSeekChange);
    full.addEventListener("click", onFull);
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("keydown", onKey);
    if (pauseWhenHidden) document.addEventListener("visibilitychange", onHidden);
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((es) => es.forEach((e) => {
        if (exp) return;
        if (!e.isIntersecting) { if (!v.paused) v.pause(); if (forceMuted) v.muted = true; }
      }), { threshold: 0.2 });
      io.observe(w);
    }
    v.muted = true;
    v.pause();
    sync();
    return () => {
      events.forEach((e) => v.removeEventListener(e, sync));
      v.removeEventListener("click", toggle);
      play.removeEventListener("click", toggle);
      mute.removeEventListener("click", onMute);
      v.removeEventListener("volumechange", onVol);
      v.removeEventListener("play", onPlayMute);
      seek.removeEventListener("input", onSeekInput);
      seek.removeEventListener("change", onSeekChange);
      full.removeEventListener("click", onFull);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onHidden);
      io?.disconnect();
      if (!v.paused) v.pause();
      if (exp) document.body.style.overflow = "";
    };
  }, [prefix, forceMuted, pauseWhenHidden]);
}
