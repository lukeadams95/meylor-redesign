// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Fragment } from "react";
import { why } from "../data/home";

export default function ChiropracticCarePage() {

  return (
    <>
      <Seo title="Chiropractic Care in Lenexa, KS | Meylor Chiropractic" description="Expert chiropractic care in Lenexa for back pain, neck pain, headaches & sciatica. Personalized spinal adjustments to help you move pain-free." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Chiropractic Care in Lenexa, KS
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0 0 36px", color: "#fff", maxWidth: "640px" }}>
            Relieve Pain. Restore Balance. Regain Control.
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Link className="h-abc0814" to="/free-consultation/" style={{ display: "inline-block", background: "#fff", color: "#15315A", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Free Consultation
            </Link>
            <a className="h-d1471fa" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#fff", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #fff", fontWeight: "700", fontSize: "17px" }}>
              (913) 227-0909
            </a>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "center" }}>
          <div data-reveal="1" role="img" aria-label="Dr. Meylor performing a spinal adjustment" style={{ aspectRatio: "4/3.4", borderRadius: "28px", background: "url(/uploads/03-services-dr-meylor-adjustment.webp) center/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
          {" "}
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              How We Help
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.08", margin: "0 0 24px" }}>
              How We Can Help You
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              At Meylor Chiropractic, we provide a wide array of services designed to address diverse health needs. Our offerings encompass care for spine-related conditions, injury treatment, and support for extremities, ensuring comprehensive care for your entire musculoskeletal system. We also offer family chiropractic services, accommodating patients of all ages. Explore the service areas listed below, and click on them to learn more about how we can assist you in achieving optimal health.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0", color: "#1F2937" }}>
              We offer a variety of chiropractic care services. Click below to learn more about each one.
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#15315A", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div className="svc-g" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "24px" }}>
            <div data-reveal="1" style={{ background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.12", margin: "0" }}>
                  Spine Related
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                  Our services for spinal health are tailored to manage various conditions that can affect your spine. We treat back pain, headaches and migraines, neck pain, sciatica, and scoliosis, with the aim of providing relief and improving your overall health by focusing on the underlying causes of these issues.
                </p>
                <Link className="h-c1dbd65" to="/services/chiropractic/spine-care/" style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.12", margin: "0" }}>
                  Injuries
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                  We focus on treating a wide range of injuries to support your recovery and help you achieve optimal health. Our care includes specialized treatment for disc injuries, aimed at relieving pain and restoring functionality. We also offer expert whiplash care, providing relief and rehabilitation for this prevalent neck injury. In addition, we treat work-related injuries, assisting you in a safe and swift return to your daily routine.
                </p>
                <Link className="h-c1dbd65" to="/services/chiropractic/injuries/" style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.12", margin: "0" }}>
                  Extremities
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                  We provide specialized care for extremity-related conditions to help you restore mobility and alleviate pain. Our treatments focus on relieving arm and leg discomfort, offering effective solutions to enhance your daily comfort. We also treat carpal tunnel syndrome with targeted therapies designed to reduce symptoms and improve hand function. Additionally, our care extends to leg and shoulder issues, ensuring comprehensive treatment to regain strength and flexibility in these vital areas.
                </p>
                <Link className="h-c1dbd65" to="/services/chiropractic/extremities/" style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.12", margin: "0" }}>
                  Family Chiropractic
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                  We offer complete family chiropractic services to promote the health and well-being of every family member. For children, we provide specialized care that supports their growth and development with gentle, effective treatments. Our wellness care is designed to keep your entire family in peak health through regular check-ups and preventive measures. We also provide chiropractic care for expectant mothers, offering safe and comfortable treatments that support a healthy pregnancy and help relieve common discomforts.
                </p>
                <Link className="h-c1dbd65" to="/services/chiropractic/family-chiropractic/" style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            {" "}
            <div data-reveal="1" style={{ gridColumn: "1/-1", background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: "1.12", margin: "0" }}>
                  Other Symptoms
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                  We also treat a range of other symptoms to help enhance your overall quality of life. Our specialized care for vertigo focuses on reducing dizziness and balance problems, enabling you to regain stability and confidence in your everyday activities. We are committed to identifying the underlying causes of your symptoms and delivering effective treatments to improve your well-being.
                </p>
                <Link className="h-c1dbd65" to="/services/chiropractic/other-symptoms/" style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px 112px", overflow: "hidden" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Our Commitment
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 18px", color: "#15315A", lineHeight: "1.08", letterSpacing: "-.02em", textWrap: "balance" }}>
              Why Choose Meylor Chiropractic
            </h2>
            {" "}
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#1F2937" }}>
              We're committed to providing exceptional care to help you achieve optimal health and wellness.
            </p>
          </div>
          {" "}
          <div className="why-g" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            {why.map((w, wIndex) => (
              <Fragment key={wIndex}>
                <div className="why-c" data-reveal="1" style={{ position: "relative" }}>
                  <div className="why-b" style={{ position: "absolute", width: "62%", height: "62%", borderRadius: "36px", background: "#1C4581", zIndex: "0" }} />
                  {" "}
                  <div className="why-in" style={{ position: "relative", zIndex: "1", background: "#15315A", borderRadius: "28px", padding: "40px 40px 44px", minHeight: "290px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#fff", boxShadow: "0 30px 50px -30px rgba(21,49,90,.7)" }}>
                    <div style={{ width: "48px", height: "48px", border: "1.5px solid #E3E8EF", borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "15px", color: "#E3E8EF", marginBottom: "auto" }}>
                      {w.n}
                    </div>
                    {" "}
                    <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "26px", margin: "28px 0 12px", color: "#fff", lineHeight: "1.15" }}>
                      {w.title}
                    </h3>
                    {" "}
                    <p className="why-p" style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#E3E8EF", maxWidth: "360px" }}>
                      {w.body}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
            {" "}
            <div className="why-mid" aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "132px", height: "132px", margin: "-66px 0 0 -66px", borderRadius: "50%", background: "#1C4581", border: "14px solid #fff", zIndex: "2", display: "grid", placeItems: "center" }}>
              <img src="/uploads/07-footer-logo.png" alt="" style={{ width: "64px", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "96px 32px" }}>
        <div data-reveal="1" style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
            Get Started
          </div>
          {" "}
          <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,50px)", lineHeight: "1.1", margin: "0 0 18px" }}>
            Ready to Start Your Healing Journey?
          </h2>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.6", margin: "0 0 32px", color: "#1F2937" }}>
            Contact us today to schedule your consultation and take the first step toward better health.
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Free Consultation
            </Link>
            <a className="h-abc0814" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#15315A", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #15315A", fontWeight: "700", fontSize: "17px" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
