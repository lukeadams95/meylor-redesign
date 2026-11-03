// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { preventSubmit } from "../lib/forms";

export default function ContactPage() {

  return (
    <>
      <Seo title="Contact Meylor Chiropractic | Lenexa, KS" description="Contact Meylor Chiropractic & Acupuncture in Lenexa, KS. Call (913) 227-0909 to book your free consultation. Same-day appointments available." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Contact Us
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0", color: "#fff", maxWidth: "760px" }}>
            Get in touch with our team. We're here to answer your questions and help you on your journey to better health.
          </p>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px 80px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))", gap: "24px", alignItems: "stretch" }}>
          <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginBottom: "8px" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0" }}>
              Phone
            </h3>
            <a className="h-27bfeaf" href="tel:9132270909" style={{ fontSize: "18px", fontWeight: "700", color: "#1C4581" }}>
              (913) 227-0909
            </a>
          </div>
          {" "}
          <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginBottom: "8px" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0" }}>
              Address
            </h3>
            <div style={{ fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
              12980 W 87th St Pkwy, Lenexa, KS 66215
            </div>
            <div style={{ fontSize: "14.5px", lineHeight: "1.5", color: "#5B6B82" }}>
              Free onsite parking · Wheelchair-accessible entrance
            </div>
          </div>
          {" "}
          <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginBottom: "8px" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0" }}>
              Hours:
            </h3>
            <div style={{ fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
              <strong style={{ color: "#15315A" }}>
                Monday - Thursday:
              </strong>
              <br />
              9:30 AM - 12:30 PM, 3:00 PM - 6:00 PM
            </div>
            <div style={{ fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
              <strong style={{ color: "#15315A" }}>
                Friday - Sunday:
              </strong>
              {" Closed"}
            </div>
            <Link className="h-27bfeaf" to="/evening-appointments/" style={{ color: "#1C4581", fontWeight: "700", borderBottom: "1.5px solid #1C4581" }}>
              Evening appointments available
            </Link>
          </div>
          {" "}
          <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1C4581", display: "grid", placeItems: "center", marginBottom: "8px" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0" }}>
              Emergency:
            </h3>
            <div style={{ fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
              Walk-ins welcome
            </div>
            <div style={{ fontSize: "16.5px", lineHeight: "1.6", color: "#1F2937" }}>
              No appointment needed
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "80px 32px 104px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "48px", alignItems: "start" }}>
          <form data-reveal="1" style={{ background: "#15315A", borderRadius: "28px", padding: "clamp(28px,3.4vw,44px)", display: "grid", gap: "26px", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)", alignContent: "start" }} onSubmit={preventSubmit}>
            <div style={{ display: "grid", gap: "10px" }}>
              <div style={{ fontSize: "clamp(26px,2.6vw,34px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-.02em", color: "#fff" }}>
                Send Us a Message
              </div>
              <div style={{ color: "#E3E8EF", fontSize: "15px", lineHeight: "1.5" }}>
                We typically respond within one business day
              </div>
            </div>
            {" "}
            <div style={{ display: "grid", gap: "18px" }}>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Name *
                </span>
                <input className="fi" placeholder="Your full name" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Email *
                </span>
                <input className="fi" type="email" placeholder="you@example.com" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  Phone *
                </span>
                <input className="fi" type="tel" placeholder="(913) 555-0123" required />
              </label>
              <label style={{ display: "grid", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#E3E8EF" }}>
                  How can we help?
                </span>
                <textarea className="fi" rows={3} placeholder="Tell us a bit about what's going on..." />
              </label>
            </div>
            {" "}
            <button className="h-abc0814" type="button" style={{ font: "inherit", fontWeight: "700", fontSize: "clamp(14px,4vw,16px)", background: "#fff", color: "#15315A", border: "0", borderRadius: "999px", padding: "6px 6px 6px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", width: "100%" }}>
              <span style={{ flex: "1", textAlign: "center", whiteSpace: "nowrap" }}>
                Send Message
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
          {" "}
          <div data-reveal="1" style={{ display: "grid", gap: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
                <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
                Our Location
              </div>
              <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0" }}>
                Find Us
              </h2>
            </div>
            {" "}
            <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)", lineHeight: "0" }}>
              <iframe title="Map to Meylor Chiropractic" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.921943659595!2d-94.736511!3d38.9714503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ecadc05042d5%3A0xfb03c0ea406ec3d!2sMeylor%20Lenexa%20Chiropractor%20and%20Acupuncture!5e0!3m2!1sen!2sus!4v1750708140655!5m2!1sen!2sus" width="100%" height="360" style={{ border: "0", display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            {" "}
            <div style={{ background: "#15315A", borderRadius: "28px", padding: "clamp(28px,3.4vw,44px)" }}>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(24px,2.4vw,30px)", lineHeight: "1.2", margin: "0 0 22px" }}>
                Why Choose Meylor Chiropractic?
              </h3>
              {" "}
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Walk-ins welcome - No appointment necessary
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Experienced chiropractors and acupuncturists
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Comprehensive pain relief treatments
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Auto injury specialists
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Free consultations available
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Convenient Lenexa location
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div data-reveal="1" style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
            Get In Touch
          </div>
          {" "}
          <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 20px", textWrap: "balance" }}>
            Ready to Start Your Healing Journey?
          </h2>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.7", margin: "0 0 32px", color: "#1F2937" }}>
            Contact us today to schedule your appointment or walk in for immediate care.
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <a className="h-d1471fa" href="tel:9132270909" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px", whiteSpace: "nowrap" }}>
              Call (913) 227-0909
            </a>
            <a className="h-abc0814" href="https://maps.app.goo.gl/PUdesVzGcMmhYXUv6" target="_blank" rel="noopener" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#15315A", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #15315A", fontWeight: "700", fontSize: "17px" }}>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
