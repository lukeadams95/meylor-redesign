// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useVideoPlayer } from "../hooks/useVideoPlayer";
import { Fragment } from "react";
import { preventSubmit } from "../lib/forms";
import { useState } from "react";
import { trust, services, condL, condR, steps, why, faqItems, areas } from "../data/home";

export default function HomePage() {
  useVideoPlayer("pf", { forceMuted: true, pauseWhenHidden: true });
  const [open, setOpen] = useState(0);
  const faqs = faqItems.map((f, i) => {
    const o = open === i;
    return { ...f, sign: o ? "–" : "+", display: o ? "block" : "none", toggle: () => setOpen(o ? -1 : i) };
  });
  return (
    <>
      <Seo title="Lenexa Chiropractor & Acupuncture | Meylor Chiropractic" description="Trusted Lenexa chiropractor & acupuncturist. Dr. Meylor offers natural pain relief, adjustments & auto injury care. Same-day visits available." />
      {/* HERO */}
      {" "}
      <section className="hero-sec" style={{ position: "relative", marginTop: "-120px", padding: "156px 32px 126px", background: "#15315A", overflow: "hidden" }}>
        <div className="hero-g" style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", display: "grid", gap: "56px", alignItems: "center", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))" }}>
          <div className="hero-img" data-reveal="1" style={{ order: "2", borderRadius: "28px", overflow: "hidden", aspectRatio: "4/3.4", background: "url(/uploads/02-hero.webp) 45% center/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(0,0,0,.6)" }} />
          {" "}
          <div className="hero-txt" data-reveal="1" style={{ color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", marginBottom: "18px" }}>
              <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
              Serving Lenexa Residents since 2005
            </div>
            {" "}
            <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(26px,4.2vw,56px)", lineHeight: "1.1", letterSpacing: "-.025em", margin: "0 0 24px", color: "#fff", textWrap: "balance" }}>
              <span style={{ whiteSpace: "nowrap" }}>
                Lenexa's Chiropractor
              </span>
              <br />
              <span style={{ whiteSpace: "nowrap" }}>
                {"& Acupuncture"}
              </span>
              <br />
              Specialists
            </h1>
            {" "}
            <ul style={{ listStyle: "none", padding: "0", display: "grid", justifyItems: "start", textAlign: "left", margin: "0 0 24px", gap: "10px", fontSize: "17px", color: "#fff" }}>
              {trust.map((t, tIndex) => (
                <Fragment key={tIndex}>
                  <li style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E3E8EF", flex: "none", transform: "translateY(-2px)" }} />
                    {t}
                  </li>
                </Fragment>
              ))}
            </ul>
            {" "}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", background: "#fff", borderRadius: "14px", padding: "12px 20px", minHeight: "60px", maxWidth: "100%", margin: "0 0 24px", textAlign: "left", boxShadow: "0 12px 28px -14px rgba(0,0,0,.45)" }}>
              <img src="/uploads/images.png" alt="Google" style={{ width: "32px", height: "32px", display: "block", objectFit: "contain" }} />
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2px 16px", color: "#15315A", lineHeight: "1.3" }}>
                <span style={{ fontSize: "16px", fontWeight: "700" }}>
                  Top Rated Chiropractor 2026
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                  <span style={{ color: "#F9AB00", fontSize: "15px", letterSpacing: "1px" }}>
                    ★★★★★
                  </span>
                  <span style={{ fontWeight: "700", fontSize: "15px" }}>
                    5.0
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "#5B6B82", whiteSpace: "nowrap" }}>
                  verified by Google
                </span>
              </div>
            </div>
            {" "}
            <div className="hero-ctas" style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link className="h-bf81b02" to="/free-consultation/" style={{ background: "#fff", color: "#15315A", padding: "20px 40px", borderRadius: "999px", fontWeight: "700", fontSize: "19px" }}>
                Free Consultation
              </Link>
              {" "}
              <a className="h-cf4d50a" href="tel:9132270909" style={{ whiteSpace: "nowrap", padding: "19px 38px", borderRadius: "999px", border: "1.5px solid #fff", fontWeight: "700", fontSize: "19px", color: "#fff" }}>
                (913) 227-0909
              </a>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {/* HERO FORM */}
      {" "}
      <section style={{ position: "relative", zIndex: "2", marginTop: "-72px", background: "linear-gradient(transparent 72px,#F5F7FA 72px)", padding: "0 24px" }}>
        <div data-reveal="1" style={{ maxWidth: "1120px", margin: "0 auto", background: "#F5F7FA", borderRadius: "36px 36px 0 0", padding: "24px 24px 0" }}>
          <form style={{ background: "#15315A", borderRadius: "26px", padding: "clamp(24px,3vw,36px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "28px 40px", boxShadow: "0 30px 60px -30px rgba(21,49,90,.6)" }} onSubmit={preventSubmit}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", maxWidth: "420px" }}>
              <div style={{ fontSize: "clamp(26px,2.6vw,34px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-.02em", color: "#fff" }}>
                Free Consultation
              </div>
              {" "}
              <div style={{ color: "#E3E8EF", fontSize: "15px", lineHeight: "1.5" }}>
                Same-day appointments available — we respond fast
              </div>
            </div>
            {" "}
            <div style={{ display: "grid", gap: "20px", borderLeft: "1px solid rgba(255,255,255,.25)", paddingLeft: "clamp(0px,2.4vw,40px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px 28px" }}>
                <input className="fi" placeholder="Name *" />
                <input className="fi" placeholder="Email *" />
                <input className="fi" placeholder="Phone *" />
                <input className="fi" placeholder="How can we help?" />
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
              <div style={{ fontSize: "13px", color: "#E3E8EF", textAlign: "center", marginTop: "-6px" }}>
                {"Your information is safe & confidential. No spam, ever."}
              </div>
            </div>
          </form>
        </div>
      </section>
      {" "}
      {/* PATIENT FIRST */}
      {" "}
      <section style={{ background: "#F5F7FA", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))", gap: "64px", alignItems: "center" }}>
          <div id="pfw" data-reveal="1" style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "#000", aspectRatio: "16/9", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
            <video id="pfv" poster="/uploads/video-poster.png" src="/uploads/meylor-patient-first-video.mp4" muted loop playsInline preload="metadata" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", cursor: "pointer" }} />
            {" "}
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", gap: "8px", padding: "28px 16px 12px", background: "linear-gradient(transparent,rgba(0,0,0,.7))", color: "#fff", fontSize: "13px" }}>
              <button id="pf-play" type="button" aria-label="Play or pause" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                ❚❚
              </button>
              {" "}
              <button id="pf-mute" type="button" aria-label="Mute or unmute" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Unmute
              </button>
              {" "}
              <input id="pf-seek" type="range" min="0" max="1000" defaultValue="0" aria-label="Seek" style={{ flex: "1", minWidth: "0", accentColor: "#fff", cursor: "pointer" }} />
              {" "}
              <span id="pf-time" style={{ minWidth: "84px", textAlign: "right" }}>
                0:00 / 0:00
              </span>
              {" "}
              <button id="pf-full" type="button" aria-label="Expand video" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Expand
              </button>
            </div>
          </div>
          {" "}
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Our Approach
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,48px)", lineHeight: "1.12", margin: "0 0 20px", textWrap: "balance" }}>
              Meylor Chiropractic Cares for You With a Patient-First Approach
            </h2>
            {" "}
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "20px", lineHeight: "1.4", margin: "0 0 24px", color: "#1C4581" }}>
              Meylor Chiropractic is dedicated to helping you feel your best—every day.
            </h3>
            {" "}
            <p style={{ margin: "0 0 20px", fontSize: "17px", lineHeight: "1.7", color: "#5B6B82" }}>
              Serving Lenexa and surrounding Kansas communities, Meylor Chiropractic offers expert chiropractic care with a compassionate touch. From auto injury relief to acupuncture, Dr. Meylor and his team create customized care plans designed to help you move better, sleep better, and live pain-free.
            </p>
            {" "}
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#5B6B82" }}>
              With advanced diagnostic tools, a whole-body approach to wellness, and a focus on long-term health—not just temporary relief—Meylor Chiropractic has become a trusted choice in Lenexa, Overland Park, Olathe, and beyond.
            </p>
          </div>
        </div>
      </section>
      {" "}
      {/* SERVICES */}
      {" "}
      <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "104px 32px 96px" }}>
        <div data-reveal="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "end", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              What We Offer
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4.2vw,56px)", lineHeight: "1.05", margin: "0 0 16px" }}>
              Our Chiropractic Services
            </h2>
            {" "}
            <div style={{ fontSize: "15px", letterSpacing: ".06em", textTransform: "uppercase", color: "#1C4581", fontWeight: "700" }}>
              Serving Lenexa, Overland Park, Shawnee, Olathe, and Surrounding Areas
            </div>
          </div>
          {" "}
          <p style={{ margin: "0", fontSize: "17.5px", lineHeight: "1.7", color: "#1F2937" }}>
            At Meylor Chiropractic, we offer a wide range of chiropractic and wellness services tailored to help you move better, feel better, and live pain-free. Whether you're recovering from an injury or simply want to improve your overall health, our team is here to support you every step of the way.
          </p>
        </div>
        {" "}
        <div className="svc-g" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "24px" }}>
          {services.map((sv, svIndex) => (
            <Fragment key={svIndex}>
              <div data-reveal="1" style={{ background: "#F5F7FA", border: "1px solid #15315A", borderRadius: "36px", padding: "clamp(28px,3.4vw,44px)", display: "flex", gap: "28px", alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: "72px", height: "72px", borderRadius: "50%", background: "#15315A", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "26px" }}>
                  {sv.n}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", minWidth: "0" }}>
                  <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(24px,2.4vw,32px)", lineHeight: "1.12", margin: "0" }}>
                    {sv.title}
                  </h3>
                  <div style={{ fontWeight: "700", fontSize: "17px", color: "#1C4581" }}>
                    {sv.tag}
                  </div>
                  <p style={{ margin: "6px 0 6px", fontSize: "17px", lineHeight: "1.7", color: "#1F2937" }}>
                    {sv.body}
                  </p>
                  <a className="h-c1dbd65" href={sv.href} style={{ color: "#15315A", fontWeight: "700", fontSize: "17px", borderBottom: "1.5px solid #15315A", paddingBottom: "1px" }}>
                    Learn More →
                  </a>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        {" "}
        <div data-reveal="1" style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Free Consultation
            </Link>
            <a className="h-abc0814" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#15315A", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #15315A", fontWeight: "700", fontSize: "17px" }}>
              (913) 227-0909
            </a>
          </div>
        </div>
      </section>
      {" "}
      {/* CONDITIONS */}
      {" "}
      <section style={{ background: "#F5F7FA", padding: "96px 32px", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              How We Help
            </div>
          </div>
          {" "}
          <h2 data-reveal="1" style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 56px", textAlign: "center" }}>
            Conditions We Treat
          </h2>
          {" "}
          <div className="cond-g" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(280px,440px) minmax(0,1fr)", gap: "0 48px", alignItems: "center" }}>
            <div className="cond-col cond-l" style={{ display: "grid", gap: "18px" }}>
              {condL.map((c, cIndex) => (
                <Fragment key={cIndex}>
                  <a className="h-bd46874" href={c.href} style={{ display: "block", position: "relative", zIndex: "2", background: "#15315A", border: "1px solid #15315A", borderRadius: "20px", padding: "18px 24px", color: "#fff" }}>
                    <div style={{ fontWeight: "700", fontSize: "19px", lineHeight: "1.25", color: "#fff" }}>
                      {c.name}
                    </div>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "15px", lineHeight: "1.5", color: "#E3E8EF", fontWeight: "400" }}>
                      {c.desc}
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
            {" "}
            <div className="cond-mid" style={{ position: "relative", display: "grid", gap: "0", alignSelf: "stretch" }}>
              <div style={{ display: "none" }} />
              <div className="cond-halo" style={{ position: "absolute", left: "-12%", right: "-12%", top: "-3%", bottom: "-3%", borderRadius: "36px", background: "rgba(28,69,129,.14)" }} />
              <div role="img" aria-label="Dr. Meylor with a patient" style={{ position: "relative", zIndex: "1", width: "100%", height: "100%", minHeight: "480px", alignSelf: "stretch", borderRadius: "28px", background: "url(/uploads/03-services-dr-meylor-adjustment.webp) center/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
            </div>
            {" "}
            <div className="cond-col cond-r" style={{ display: "grid", gap: "18px" }}>
              {condR.map((c, cIndex) => (
                <Fragment key={cIndex}>
                  <a className="h-bd46874" href={c.href} style={{ display: "block", position: "relative", zIndex: "2", background: "#15315A", border: "1px solid #15315A", borderRadius: "20px", padding: "18px 24px", color: "#fff" }}>
                    <div style={{ fontWeight: "700", fontSize: "19px", lineHeight: "1.25", color: "#fff" }}>
                      {c.name}
                    </div>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "15px", lineHeight: "1.5", color: "#E3E8EF", fontWeight: "400" }}>
                      {c.desc}
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      {" "}
      {/* TESTIMONIALS */}
      {" "}
      <section style={{ background: "#15315A", color: "#F5F7FA", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
              5.0 Rated on Google
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 36px", textAlign: "center", color: "#F5F7FA" }}>
              Hear From Our Patients
            </h2>
            {" "}
            <div style={{ position: "relative", background: "#fff", borderRadius: "24px", padding: "0", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(0,0,0,.5)" }}>
              <span className="rv-g" aria-hidden="true" style={{ position: "absolute", left: "72px", top: "34px", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,.15)", display: "none", placeItems: "center", pointerEvents: "none", zIndex: "2" }}>
                <img src="/uploads/images.png" alt="Google" style={{ width: "24px", height: "24px", display: "block", objectFit: "contain" }} />
              </span>
              <iframe className="lc_reviews_widget" title="Google reviews" src="https://reputationhub.site/reputation/widgets/review_widget/kb66lvgUD8lZbffdf3Gf?widgetId=66b23b56ac8eb013dabecd22" frameBorder="0" scrolling="no" style={{ minWidth: "100%", width: "100%", minHeight: "720px", display: "block", border: "0" }} />
            </div>
          </div>
        </div>
      </section>
      {" "}
      {/* PROCESS */}
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px 96px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div className="proc-g" style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: "24px", alignItems: "stretch" }}>
            <div style={{ display: "grid", gap: "16px", alignContent: "start" }}>
              <div data-reveal="1">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
                  <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
                  How It Works
                </div>
              </div>
              {" "}
              <h2 data-reveal="1" style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.2vw,44px)", lineHeight: "1.08", margin: "0 0 16px" }}>
                Our Proven 3-Step Process to Better Health
              </h2>
              {" "}
              {steps.map((st, stIndex) => (
                <Fragment key={stIndex}>
                  <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "28px 30px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px" }}>
                      {st.n}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "2px 0 10px" }}>
                        {st.title}
                      </h3>
                      <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                        {st.body}
                      </p>
                    </div>
                  </div>
                </Fragment>
              ))}
              {" "}
              <div data-reveal="1" style={{ marginTop: "12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
                    Free Consultation
                  </Link>
                  <a className="h-abc0814" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#15315A", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #15315A", fontWeight: "700", fontSize: "17px" }}>
                    (913) 227-0909
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="proc-img" data-reveal="1" style={{ display: "grid" }}>
              <div role="img" aria-label="Dr. Meylor with a patient" style={{ minHeight: "520px", borderRadius: "28px", background: "url(/uploads/04-testimonials-reception.webp) center/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
            </div>
          </div>
        </div>
      </section>
      {" "}
      {/* DOCTOR */}
      {" "}
      <section style={{ background: "#15315A", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "64px", alignItems: "center" }}>
          <div data-reveal="1" role="img" aria-label="Dr. Jade Meylor" style={{ aspectRatio: "4/5", borderRadius: "28px", background: "url(/uploads/05-meet-dr-jade-meylor.webp) center 20%/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(0,0,0,.6)" }} />
          {" "}
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
              Your Chiropractor
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 28px", color: "#fff" }}>
              Meet Dr. Jade Meylor
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#fff" }}>
              Dr. Meylor, a native of Sioux City, Iowa, earned his Doctor of Chiropractic degree from Palmer College of Chiropractic in Davenport, Iowa—the world's first chiropractic college. Dedicated to advancing his expertise, Dr. Meylor engages in various postgraduate programs, including acupuncture and sports injury seminars. He is licensed in both Kansas and Missouri and is part of a large chiropractic family with over 40 chiropractors in his extended network.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0", color: "#fff" }}>
              As a fellowship-trained chiropractor, Dr. Meylor has undergone advanced training in spinal biomechanics and trauma management. This specialized education provides him with a deeper insight into spinal conditions, allowing for more accurate diagnoses and effective treatments. By choosing a fellowship-trained chiropractor like Dr. Meylor, you receive the benefits of the latest clinical practices and research, improving their recovery outcomes.
            </p>
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
      {/* FAQ */}
      {" "}
      <section style={{ background: "#15315A", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ marginBottom: "48px", maxWidth: "760px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
              Common Questions
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.08", letterSpacing: "-.02em", margin: "0 0 16px", color: "#fff" }}>
              Frequently Asked Questions
            </h2>
            {" "}
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#E3E8EF" }}>
              Get answers to common questions about our chiropractic services and treatments.
            </p>
          </div>
          {" "}
          <div className="faq-g" style={{ display: "grid", gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)", gap: "56px", alignItems: "start" }}>
            <div style={{ display: "grid", gap: "12px" }}>
              {faqs.map((fq, fqIndex) => (
                <Fragment key={fqIndex}>
                  <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden" }}>
                    <button type="button" onClick={fq.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "20px 26px", fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "18px", lineHeight: "1.35", color: "#15315A" }}>
                      <span>
                        {fq.q}
                      </span>
                      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontSize: "20px", lineHeight: "1" }}>
                        {fq.sign}
                      </span>
                    </button>
                    <div style={{ display: fq.display, padding: "0 26px 24px", fontSize: "16.5px", lineHeight: "1.7", color: "#1F2937" }}>
                      {fq.a}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            {" "}
            <div className="faq-img" data-reveal="1" role="img" aria-label="Dr. Meylor examining young patient" style={{ position: "sticky", top: "120px", aspectRatio: "4/5", borderRadius: "28px", background: "url(/uploads/06-faq-pediatric-exam.webp) center/cover no-repeat", boxShadow: "0 30px 60px -30px rgba(0,0,0,.6)" }} />
          </div>
        </div>
      </section>
      {" "}
      {/* AREAS */}
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px 112px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "56px", alignItems: "center" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Serving Johnson County
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", lineHeight: "1.06", letterSpacing: "-.02em", margin: "0 0 14px", color: "#15315A" }}>
              Areas We Serve
            </h2>
            {" "}
            <div style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "20px", lineHeight: "1.4", color: "#1C4581", marginBottom: "24px" }}>
              Local Chiropractic Care for Johnson County and Beyond
            </div>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0", color: "#1F2937" }}>
              Meylor Chiropractic is proud to serve families, professionals, and active individuals across the greater Lenexa area. Whether you're recovering from an injury, managing chronic pain, or simply prioritizing your health, our clinic is conveniently located to serve patients throughout the Kansas City suburbs.
            </p>
          </div>
          {" "}
          <div data-reveal="1" style={{ background: "#15315A", borderRadius: "32px", padding: "clamp(28px,3.4vw,44px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.6)" }}>
            <div style={{ fontWeight: "700", fontSize: "19px", color: "#fff", marginBottom: "22px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,.28)" }}>
              We proudly care for patients from:
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {areas.map((a, aIndex) => (
                <Fragment key={aIndex}>
                  <a className="h-bd3a257" href={a.href} style={{ padding: "10px 20px", borderRadius: "999px", border: "1.5px solid #E3E8EF", color: "#fff", fontWeight: "700" }}>
                    {a.name}
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {" "}
        <div data-reveal="1" style={{ maxWidth: "860px", margin: "64px auto 0", textAlign: "center" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.7", margin: "0 0 32px", color: "#1F2937" }}>
            If you're searching for a trusted chiropractor near you in any of these communities, we're just a short drive away. Our goal is to help you move better, feel better, and get back to enjoying your life—wherever you call home.
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Free Consultation
            </Link>
            <a className="h-abc0814" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#15315A", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #15315A", fontWeight: "700", fontSize: "17px" }}>
              (913) 227-0909
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
