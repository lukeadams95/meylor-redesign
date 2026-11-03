// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

export default function ExitIntentPopupMarkup({ exitDisplay, exitBg, exitClose }: { exitDisplay: string; exitBg: (e: MouseEvent<HTMLDivElement>) => void; exitClose: () => void }) {
  return (
    <div id="exit-pop" role="dialog" aria-modal="true" aria-labelledby="exit-t" style={{ display: exitDisplay, position: "fixed", inset: "0", zIndex: "1000", background: "rgba(21,49,90,.7)", alignItems: "center", justifyContent: "center", padding: "16px", overflowY: "auto" }} onClick={exitBg}>
      <div style={{ fontFamily: "Arial,Helvetica,sans-serif", position: "relative", background: "#fff", borderRadius: "28px", maxWidth: "560px", width: "100%", maxHeight: "100%", overflowY: "auto", padding: "44px 36px 36px", textAlign: "center", boxShadow: "0 30px 80px -20px rgba(0,0,0,.5)" }}>
        <button className="h-abc0814" type="button" aria-label="Close" onClick={exitClose} style={{ all: "unset", cursor: "pointer", position: "absolute", top: "12px", right: "12px", width: "44px", height: "44px", borderRadius: "50%", display: "grid", placeItems: "center", color: "#15315A", fontSize: "26px", lineHeight: "1" }}>
          ×
        </button>
        <h2 id="exit-t" style={{ margin: "0 0 10px", fontSize: "32px", lineHeight: "1.15", fontWeight: "700", letterSpacing: "-.025em", color: "#15315A", textWrap: "balance" }}>
          Wait! Don't Leave Yet...
        </h2>
        <p style={{ margin: "0 0 16px", fontSize: "20px", fontWeight: "700", color: "#1C4581", textWrap: "balance" }}>
          Get Your FREE Consultation Before You Go!
        </p>
        <p style={{ margin: "0 0 20px", fontSize: "17px", lineHeight: "1.6", color: "#1F2937", textWrap: "pretty" }}>
          Discover how our personalized chiropractic and acupuncture care can help you feel better—completely free, no strings attached.
        </p>
        <div style={{ background: "#E3E8EF", color: "#15315A", borderRadius: "16px", padding: "14px 18px", fontWeight: "700", fontSize: "16px", marginBottom: "24px" }}>
          ✨ Limited Time: Free consultation for new patients
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link className="h-50a943d" to="/free-consultation/" onClick={exitClose} style={{ flex: "1 1 200px", display: "inline-block", padding: "16px 26px", borderRadius: "999px", background: "#1C4581", color: "#fff", fontWeight: "700", fontSize: "17px" }}>
            Free Consultation
          </Link>
          <a className="h-8190475" href="tel:9132270909" style={{ flex: "1 1 200px", display: "inline-block", padding: "14px 26px", borderRadius: "999px", border: "2px solid #15315A", color: "#15315A", fontWeight: "700", fontSize: "17px" }}>
            (913) 227-0909
          </a>
        </div>
      </div>
    </div>
  );
}
