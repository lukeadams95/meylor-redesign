import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopBar from "./TopBar.markup";
import Header from "./Header";
import CtaBanner from "./CtaBanner.markup";
import Footer from "./Footer.markup";
import ExitIntentPopup from "./ExitIntentPopup";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      // Smooth-scroll buttons (e.g. "Book now" -> form on the Free Consultation page).
      const s = t.closest?.("[data-scroll]");
      if (s) {
        e.preventDefault();
        const el = document.getElementById(s.getAttribute("data-scroll") || "");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
        return;
      }
      const a = t.closest?.("a");
      if (!a) return;
      const h = a.getAttribute("href");
      if (!h) return;
      if (a.classList.contains("nl") && h === "#") { e.preventDefault(); return; }
      // Plain <a> tags with internal links (template lists, blog content) navigate client-side.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target || a.hasAttribute("download")) return;
      const isFile = /\.[a-z0-9]{2,5}$/i.test(h.split(/[?#]/)[0]);
      if (h.startsWith("/") && !h.startsWith("//") && !h.startsWith("/uploads/") && !isFile) {
        e.preventDefault();
        navigate(h);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <TopBar />
      <Header />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Outlet />
      </Suspense>
      {/* The Free Consultation page has its own form, so it hides the CTA banner. */}
      {pathname !== "/free-consultation/" && <CtaBanner />}
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
