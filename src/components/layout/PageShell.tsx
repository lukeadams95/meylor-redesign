import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const positions = new Map<string, number>();
try { history.scrollRestoration = "manual"; } catch { /* ignore */ }

/**
 * Runs after a page has mounted: restores scroll position on Back/Forward
 * (so returning from a homepage card lands where you left), scrolls to top
 * otherwise, and starts the scroll-reveal animations.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const k = location.key;
    // Only record while this entry is still current: after a click the URL has already
    // changed and the shrinking page would otherwise overwrite the real position.
    const save = () => { if (((history.state as { key?: string } | null)?.key ?? "default") === k) positions.set(k, window.scrollY); };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [location.key]);

  useEffect(() => {
    const y = navType === "POP" ? positions.get(location.key) || 0 : 0;
    window.scrollTo(0, y);
    // Images below the fold may not have loaded yet, so the page can be too short
    // to reach y. Keep nudging for a moment (or until the visitor scrolls).
    let raf = 0, stopped = !y;
    const stop = () => { stopped = true; };
    const userEvents = ["wheel", "touchstart", "keydown", "mousedown"];
    const until = performance.now() + 2500;
    const tick = () => {
      if (stopped) return;
      if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y);
      if (performance.now() < until) raf = requestAnimationFrame(tick);
    };
    if (y) {
      raf = requestAnimationFrame(tick);
      userEvents.forEach((e) => window.addEventListener(e, stop, { passive: true }));
    }

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.unobserve(el);
      }
    }), { threshold: 0.08 });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight) {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity .7s ease, transform .7s ease";
        io.observe(el);
      }
    });
    window.dispatchEvent(new Event("meylor:page-ready"));
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      userEvents.forEach((e) => window.removeEventListener(e, stop));
    };
  }, [location.key, navType]);

  return <>{children}</>;
}
