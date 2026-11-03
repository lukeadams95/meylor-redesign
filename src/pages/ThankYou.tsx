// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function ThankYouPage() {

  return (
    <>
      <Seo title="Thank You for Your Request" description="Your request has been received. Our team will contact you shortly." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Thank You!
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0", color: "#fff", maxWidth: "760px" }}>
            Your request has been submitted successfully.
          </p>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "96px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "clamp(28px,5vw,56px)", boxShadow: "0 30px 60px -40px rgba(21,49,90,.35)" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C4581" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.15", margin: "0" }}>
                What's Next?
              </h2>
            </div>
            {" "}
            <p style={{ fontSize: "18px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Our office will call you to schedule your appointment.
            </p>
            {" "}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#5B6B82", fontSize: "16px", lineHeight: "1.5", textAlign: "left" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>
                We typically respond within 24 hours during business days
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginTop: "36px" }}>
              <Link className="h-d1471fa" to="/" style={{ display: "inline-block", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px", background: "#1C4581", color: "#fff" }}>
                Return to Home
              </Link>
              <Link className="h-abc0814" to="/contact/" style={{ display: "inline-block", borderRadius: "999px", fontWeight: "700", fontSize: "17px", color: "#15315A", padding: "15px 30px", border: "1.5px solid #15315A" }}>
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
