import { useEffect, useState } from "react";
import ExitIntentPopupMarkup from "./ExitIntentPopup.markup";

const KEY = "exitPopShown";

/**
 * Exit-intent popup: on desktop (fine pointer + hover), shows once per visit when
 * the mouse leaves through the top of the window. Closes via X, backdrop or Esc.
 */
export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    const onOut = (e: MouseEvent) => {
      if (e.clientY > 0 || e.relatedTarget || shown) return;
      try { if (sessionStorage.getItem(KEY)) return; } catch { /* ignore */ }
      if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
      shown = true;
      try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
      setOpen(true);
    };
    document.documentElement.addEventListener("mouseleave", onOut);
    return () => document.documentElement.removeEventListener("mouseleave", onOut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <ExitIntentPopupMarkup
      exitDisplay={open ? "flex" : "none"}
      exitBg={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      exitClose={() => setOpen(false)}
    />
  );
}
