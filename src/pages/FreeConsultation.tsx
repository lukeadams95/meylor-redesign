// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import Seo from "../components/Seo";
import { preventSubmit } from "../lib/forms";

export default function FreeConsultationPage() {

  return (
    <>
      <Seo title="Free Consultation - Meylor Chiropractic in Lenexa, KS" description="Schedule your free chiropractic consultation in Lenexa, KS. No cost, no pressure - just expert advice on chiropractic care and pain relief. Call (913) 227-0909 today." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Schedule Your Free Consultation
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0", color: "#fff", maxWidth: "760px" }}>
            Start Your Journey Toward Better Health Today
          </p>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "56px", alignItems: "center" }}>
          <div data-reveal="1">
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 16px", color: "#1F2937" }}>
              {"At Meylor Chiropractic & Acupuncture, we believe everyone deserves the chance to feel their best—without pressure, confusion, or upfront costs. That's why we offer a complimentary consultation for all new patients."}
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 24px", color: "#1F2937" }}>
              Whether you're suffering from back pain, recovering from an auto accident, or simply looking to improve your quality of life, this free consultation is a no-risk opportunity to discover how our personalized care can help.
            </p>
            {" "}
            <ul style={{ listStyle: "none", margin: "0 0 32px", padding: "0", display: "grid", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937" }}>
                <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                No upfront costs or commitments
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937" }}>
                <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                One-on-one consultation with Dr. Jade Meylor
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937" }}>
                <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Personalized treatment recommendations
              </li>
            </ul>
            {" "}
            <a className="h-d1471fa" href="#fcform" data-scroll="fcform" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Schedule Now
            </a>
          </div>
          {" "}
          <form id="fcform" style={{ background: "#1C4581", borderRadius: "28px", padding: "clamp(28px,3.4vw,44px)", display: "grid", gap: "24px", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)", alignContent: "start" }} onSubmit={preventSubmit}>
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.1", margin: "0" }}>
              Book Your Free Consultation
            </h2>
            {" "}
            <div style={{ display: "grid", gap: "18px" }}>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Name *
                </span>
                <input className="fi" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Email *
                </span>
                <input className="fi" type="email" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Phone *
                </span>
                <input className="fi" type="tel" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  How can we help?
                </span>
                <input className="fi" />
              </label>
            </div>
            {" "}
            <button className="h-abc0814" type="button" style={{ font: "inherit", fontWeight: "700", fontSize: "clamp(14px,4vw,16px)", background: "#fff", color: "#15315A", border: "0", borderRadius: "999px", padding: "6px 6px 6px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", width: "100%" }}>
              <span style={{ flex: "1", textAlign: "center", whiteSpace: "nowrap" }}>
                Get My Free Consultation
              </span>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#15315A", color: "#fff", display: "grid", placeItems: "center", fontSize: "18px" }}>
                →
              </span>
            </button>
            {" "}
            <div style={{ fontSize: "13px", color: "#E3E8EF", textAlign: "center", marginTop: "-10px" }}>
              {"Your information is safe & confidential. No spam, ever."}
            </div>
          </form>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "start" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Your Visit
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 16px", textWrap: "balance" }}>
              What's Included in Your Free Consultation?
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 28px", color: "#1F2937" }}>
              Your complimentary visit includes:
            </p>
            {" "}
            <div style={{ display: "grid", gap: "14px" }}>
              <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "19px" }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "20px", lineHeight: "1.2", margin: "2px 0 6px" }}>
                    Personal Consultation
                  </h3>
                  <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
                    A 1-on-1 conversation with Dr. Jade Meylor
                  </p>
                </div>
              </div>
              {" "}
              <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "19px" }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "20px", lineHeight: "1.2", margin: "2px 0 6px" }}>
                    Health History Review
                  </h3>
                  <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
                    A full review of your health history and concerns
                  </p>
                </div>
              </div>
              {" "}
              <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "19px" }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "20px", lineHeight: "1.2", margin: "2px 0 6px" }}>
                    Treatment Options
                  </h3>
                  <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
                    An overview of chiropractic and acupuncture care options
                  </p>
                </div>
              </div>
              {" "}
              <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "19px" }}>
                  4
                </div>
                <div>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "20px", lineHeight: "1.2", margin: "2px 0 6px" }}>
                    {"Q&A Session"}
                  </h3>
                  <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
                    Answers to your questions about treatment, insurance, or pricing
                  </p>
                </div>
              </div>
              {" "}
              <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "19px" }}>
                  5
                </div>
                <div>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "20px", lineHeight: "1.2", margin: "2px 0 6px" }}>
                    Clear Next Steps
                  </h3>
                  <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
                    A clear explanation of what your next steps could look like
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ marginTop: "24px", background: "#E3E8EF", borderRadius: "20px", padding: "20px 24px", fontSize: "16.5px", lineHeight: "1.6", color: "#15315A" }}>
              <strong>
                Please note:
              </strong>
              {" The consultation does not include exams, x-rays, or treatment. If further evaluation is needed, we'll let you know the costs and options before proceeding."}
            </div>
          </div>
          {" "}
          <div data-reveal="1" role="img" aria-label="Free consultation at Meylor Chiropractic" style={{ aspectRatio: "4/5", borderRadius: "28px", background: "url('/uploads/free-consultation-photo%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 40px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Is It For You?
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 16px", textWrap: "balance" }}>
              Who Can Benefit?
            </h2>
            {" "}
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#1F2937" }}>
              Our free consultation is perfect for individuals in Lenexa, Overland Park, Shawnee, Olathe, Leawood, and nearby areas who are:
            </p>
          </div>
          {" "}
          <ul data-reveal="1" style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "16px" }}>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Struggling with neck or back pain
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Recovering from a car accident
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Interested in acupuncture for stress or pain relief
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Athletes or golfers looking for performance support
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Parents seeking chiropractic care for children
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#1F2937", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "20px", padding: "20px 22px" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Expectant mothers exploring prenatal chiropractic care
            </li>
          </ul>
          {" "}
          <div data-reveal="1" style={{ marginTop: "40px", textAlign: "center" }}>
            <a className="h-d1471fa" href="#fcform" data-scroll="fcform" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Schedule Now
            </a>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#15315A", padding: "104px 32px" }}>
        <div data-reveal="1" style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 20px", textWrap: "balance" }}>
            No Pressure. Just Answers.
          </h2>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.7", margin: "0 0 40px", color: "#E3E8EF" }}>
            We're not here to sell you something you don't need. We're here to listen, educate, and empower you with the knowledge to make the right choice for your health.
          </p>
          {" "}
          <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.15", margin: "0 0 14px" }}>
            Ready to Take the First Step?
          </h3>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.7", margin: "0 0 32px", color: "#E3E8EF" }}>
            {"Book your free consultation today and see if Meylor Chiropractic & Acupuncture is the right fit for you."}
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <a className="h-abc0814" href="#fcform" data-scroll="fcform" style={{ display: "inline-block", background: "#fff", color: "#15315A", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Schedule Now
            </a>
            <a className="h-d1471fa" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#fff", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #fff", fontWeight: "700", fontSize: "17px" }}>
              (913) 227-0909
            </a>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", color: "#1F2937", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
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
