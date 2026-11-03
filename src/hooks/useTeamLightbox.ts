import { useEffect } from "react";

/** "Our Chiropractic Family" photo lightbox on the Meet the Team page. */
export function useTeamLightbox() {
  useEffect(() => {
    const lb = document.getElementById("tmlb");
    const im = document.getElementById("tmlbi") as HTMLImageElement | null;
    const ph = document.getElementById("tmlbp");
    if (!lb || !im || !ph) return;
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      const c = ["webp", "jpg", "jpeg", "png"].map((x) => "/uploads/04-our-chiropractic-family." + x);
      const tr = (i: number) => {
        if (i >= c.length) return;
        const p = new Image();
        p.onload = () => { im.src = c[i]; im.style.display = "block"; ph.style.display = "none"; };
        p.onerror = () => tr(i + 1);
        p.src = c[i];
      };
      tr(0);
    };
    const close = () => { lb.style.display = "none"; document.body.style.overflow = ""; };
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest?.("[data-lb]")) { e.preventDefault(); load(); lb.style.display = "flex"; document.body.style.overflow = "hidden"; }
      else if (t === lb || t.closest?.("#tmlbx")) close();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && lb.style.display !== "none") close(); };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); close(); };
  }, []);
}
