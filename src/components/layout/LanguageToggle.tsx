import { useCallback, useEffect, useRef, useState } from "react";

/**
 * English ⇄ Español switch in the top bar, powered by Google Translate
 * (same approach as meylorchiro-rebuild-project). Google's script (~150KB)
 * only loads on first click, or straight away if the visitor already chose
 * Spanish earlier (Google keeps that choice in the "googtrans" cookie).
 */
type Lang = "en" | "es";

declare global {
  interface Window {
    google?: { translate: { TranslateElement: { new (opts: object, el: string): unknown; InlineLayout: { HORIZONTAL: number } } } };
    googleTranslateElementInit?: () => void;
  }
}

const SCRIPT_ID = "google-translate-script";
const savedLang = (): Lang => (/(?:^|;\s*)googtrans=\/[a-z-]+\/es/.test(document.cookie) ? "es" : "en");

function loadGoogleTranslate() {
  if (document.getElementById(SCRIPT_ID)) return;
  window.googleTranslateElementInit = () => {
    new window.google!.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,es", layout: window.google!.translate.TranslateElement.InlineLayout.HORIZONTAL },
      "google_translate_element",
    );
  };
  const s = document.createElement("script");
  s.id = SCRIPT_ID;
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
}

/** Google reads this cookie on page load and translates automatically. */
function setCookie(lang: Lang) {
  const host = location.hostname;
  const domains = ["", host, "." + host.split(".").slice(-2).join(".")];
  for (const d of domains) {
    const dom = d ? ";domain=" + d : "";
    document.cookie = lang === "es"
      ? "googtrans=/en/es;path=/" + dom
      : "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT" + dom;
  }
}

const isTranslated = () => /translated-(ltr|rtl)/.test(document.documentElement.className);

/** Switch Google's hidden language menu once it has the Spanish option. */
function switchViaWidget(): boolean {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (!select || ![...select.options].some((o) => o.value === "es")) return false;
  select.value = "es";
  select.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("en");
  const busy = useRef(false);

  useEffect(() => {
    if (savedLang() === "es") { setLang("es"); loadGoogleTranslate(); }
  }, []);

  const toggle = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    if (lang === "es") {
      // Undoing Google's translation in place is unreliable; clear the choice and reload.
      setCookie("en");
      location.reload();
      return;
    }
    setLang("es");
    setCookie("es");
    loadGoogleTranslate();
    // Try the instant switch; if the page isn't translated after a few seconds
    // (slow script, menu not ready), reload so Google applies the cookie itself.
    const started = Date.now();
    const t = window.setInterval(() => {
      if (isTranslated()) { window.clearInterval(t); busy.current = false; return; }
      switchViaWidget();
      if (Date.now() - started > 4000) { window.clearInterval(t); location.reload(); }
    }, 250);
  }, [lang]);

  return (
    <>
      <div id="google_translate_element" />
      <button
        type="button"
        className="notranslate"
        translate="no"
        onClick={toggle}
        aria-label={lang === "en" ? "Ver en español" : "View in English"}
        style={{ all: "unset", cursor: "pointer", display: "flex", gap: "8px", alignItems: "center" }}
      >
        {lang === "en" ? (
          <span style={{ width: "20px", height: "13px", background: "repeating-linear-gradient(#b22 0 1.2px,#fff 1.2px 2.4px)", position: "relative", display: "inline-block" }}>
            <span style={{ position: "absolute", left: "0", top: "0", width: "9px", height: "7px", background: "#2a4a8a" }} />
          </span>
        ) : (
          <span style={{ width: "20px", height: "13px", background: "linear-gradient(#c60b1e 0 25%,#ffc400 25% 75%,#c60b1e 75%)", display: "inline-block" }} />
        )}
        {lang === "en" ? "English (US)" : "Español"}
      </button>
    </>
  );
}
