// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import Seo from "../components/Seo";

export default function TestimonialsPage() {

  return (
    <>
      <Seo title="Patient Reviews | Meylor Chiropractic, Lenexa KS" description="Read why 400+ Lenexa patients rate Meylor Chiropractic & Acupuncture 5 stars. Real reviews on auto injury, pain relief and acupuncture care." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Patient Testimonials
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0", color: "#fff", maxWidth: "760px" }}>
            {"Read what our patients have to say about their experience at Meylor Chiropractic & Acupuncture."}
          </p>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", color: "#1F2937", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              5.0 Rated on Google
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 36px", textAlign: "center", color: "#15315A" }}>
              Hear From Our Patients
            </h2>
            {" "}
            <div style={{ position: "relative", background: "#fff", borderRadius: "24px", padding: "0", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(21,49,90,.35)" }}>
              <span className="rv-g" aria-hidden="true" style={{ position: "absolute", left: "72px", top: "34px", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,.15)", display: "none", placeItems: "center", pointerEvents: "none", zIndex: "2" }}>
                <img src="/uploads/images.png" alt="Google" style={{ width: "24px", height: "24px", display: "block", objectFit: "contain" }} />
              </span>
              <iframe className="lc_reviews_widget" title="Google reviews" src="https://reputationhub.site/reputation/widgets/review_widget/kb66lvgUD8lZbffdf3Gf?widgetId=66b23b56ac8eb013dabecd22" frameBorder="0" scrolling="no" style={{ minWidth: "100%", width: "100%", minHeight: "720px", display: "block", border: "0" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
