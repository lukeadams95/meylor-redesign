// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";

export default function CtaBannerMarkup() {
  return (
    <section style={{ background: "#fff", padding: "96px 32px 104px" }}>
      <div data-reveal="1" style={{ maxWidth: "1240px", margin: "0 auto", background: "#15315A", borderRadius: "40px", padding: "clamp(40px,5vw,72px) clamp(24px,5vw,72px) 0", color: "#fff", textAlign: "center", boxShadow: "0 40px 80px -40px rgba(21,49,90,.7)", overflow: "hidden" }}>
        <img src="/uploads/07-footer-logo.png" alt={"Meylor Chiropractic & Acupuncture"} style={{ height: "72px", width: "auto", display: "block", margin: "0 auto 28px" }} />
        {" "}
        <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "18px" }}>
          Same-Day Appointments Available
        </div>
        {" "}
        <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.8vw,52px)", lineHeight: "1.1", letterSpacing: "-.02em", margin: "0 auto 16px", maxWidth: "820px", color: "#fff" }}>
          {"Lenexa's Chiropractor & Acupuncture Specialists"}
        </h2>
        {" "}
        <p style={{ fontSize: "19px", lineHeight: "1.6", margin: "0 0 32px", color: "#fff" }}>
          Same-day appointments available — we respond fast
        </p>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", maxWidth: "560px", margin: "0 auto 56px" }}>
          <Link className="h-abc0814" to="/free-consultation/" style={{ flex: "1 1 240px", textAlign: "center", background: "#fff", color: "#15315A", padding: "18px 32px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
            Free Consultation
          </Link>
          {" "}
          <a className="h-d1471fa" href="tel:9132270909" style={{ flex: "1 1 240px", textAlign: "center", whiteSpace: "nowrap", color: "#fff", padding: "17px 32px", borderRadius: "999px", border: "1.5px solid #fff", fontWeight: "700", fontSize: "17px" }}>
            (913) 227-0909
          </a>
        </div>
        {" "}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.35)", display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "28px 0 32px", gap: "14px 0" }}>
          <span style={{ flex: "1 1 200px", textAlign: "center", padding: "4px 20px", fontSize: "16px", color: "#fff" }}>
            Thousands of Patients Served
          </span>
          {" "}
          <span style={{ flex: "1 1 200px", textAlign: "center", padding: "4px 20px", fontSize: "16px", color: "#fff", borderLeft: "1px solid rgba(255,255,255,.25)" }}>
            Accepts Insurance (call to confirm yours)
          </span>
          {" "}
          <span style={{ flex: "1 1 200px", textAlign: "center", padding: "4px 20px", fontSize: "16px", color: "#fff", borderLeft: "1px solid rgba(255,255,255,.25)" }}>
            <span style={{ fontWeight: "700" }}>
              5.0
            </span>
            {" "}
            <span style={{ color: "#fff" }}>
              ★★★★★
            </span>
            {" · 400+ reviews"}
          </span>
        </div>
      </div>
    </section>
  );
}
