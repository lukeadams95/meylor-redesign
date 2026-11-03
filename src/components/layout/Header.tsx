import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderMarkup from "./Header.markup";

/**
 * Sticky header. Behaviour from the prototype:
 * - Google rating badge fades in once the page hero has scrolled past.
 * - Current page is highlighted in the nav (and its dropdown parent).
 * - After navigating, open dropdowns close until the pointer leaves them,
 *   and the mobile menu closes.
 */
export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [menu, setMenu] = useState(false);
  const [rated, setRated] = useState(false);
  const { pathname, key } = useLocation();
  const first = useRef(true);

  const onScroll = useCallback(() => {
    const h = [...document.querySelectorAll<HTMLElement>(".hero-sec,.page-hero")].find((x) => x.offsetParent !== null);
    setRated(h ? h.getBoundingClientRect().bottom < 90 : window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("meylor:page-ready", onScroll);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("meylor:page-ready", onScroll); };
  }, [onScroll]);

  // Remove the "closed" lock once the pointer leaves a dropdown.
  useEffect(() => {
    const hd = ref.current;
    if (!hd) return;
    const dds = [...hd.querySelectorAll(".navlinks .dd")];
    const release = () => hd.removeAttribute("data-closed");
    dds.forEach((d) => d.addEventListener("mouseleave", release));
    return () => dds.forEach((d) => d.removeEventListener("mouseleave", release));
  }, []);

  useEffect(() => {
    const hd = ref.current;
    if (!hd) return;
    // Active nav link: the last nav link whose href is a prefix of the current path.
    const p = pathname.replace(/\/?$/, "/");
    let cur: Element | null = null;
    hd.querySelectorAll("[data-active]").forEach((x) => x.removeAttribute("data-active"));
    hd.querySelectorAll(".navlinks a.dd-i, .navlinks a.nl").forEach((a) => {
      const h = a.getAttribute("href");
      if (h && h !== "#" && h !== "/" && p.indexOf(h) === 0) cur = a;
    });
    if (!cur) cur = hd.querySelector('.navlinks a.nl[href="/"]');
    if (cur) {
      (cur as Element).setAttribute("data-active", "1");
      const dd = (cur as Element).closest(".dd");
      dd?.querySelector("a.nl")?.setAttribute("data-active", "1");
    }
    if (first.current) { first.current = false; return; }
    hd.setAttribute("data-closed", "1");
    hd.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
    (document.activeElement as HTMLElement | null)?.blur?.();
    setMenu(false);
  }, [pathname, key]);

  return (
    <HeaderMarkup
      headerRef={ref}
      rOp={rated ? 1 : 0}
      rMw={rated ? "460px" : "0px"}
      rMh={rated ? "44px" : "0px"}
      rPe={rated ? "auto" : "none"}
      menuDisplay={menu ? "flex" : "none"}
      menuIcon={menu ? "✕" : "☰"}
      toggleMenu={() => setMenu((m) => !m)}
    />
  );
}
