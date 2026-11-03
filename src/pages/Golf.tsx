// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useVideoPlayer } from "../hooks/useVideoPlayer";

export default function GolfPage() {
  useVideoPlayer("gf");
  return (
    <>
      <Seo title="Golf Chiropractor in Lenexa, KS | Meylor Chiropractic" description="Play pain-free with golf chiropractic care in Lenexa. Improve mobility, boost performance & prevent injuries with targeted adjustments. Call today." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Golf Performance in Lenexa, KS
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0 0 36px", color: "#fff", maxWidth: "640px" }}>
            {"Stay in the Game & Play Pain-Free"}
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
          <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "clamp(24px,4vw,48px)", display: "grid", placeItems: "center", aspectRatio: "1/1", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
            <img id="gfi" src="/uploads/01-golf-tpi-certified.jpg" alt="Titleist Performance Institute Certified" style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
          </div>
          {" "}
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              TPI Certified Provider
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.08", margin: "0 0 24px" }}>
              Golf TPI Certified
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              At Meylor Chiropractic and Acupuncture, Dr. Meylor is a certified Titleist Performance Institute provider. Whether you are seeking to enhance your golf performance or play without discomfort, Dr. Meylor can provide assistance.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Poor biomechanics can lead to muscle irritation and irregular spinal movement. Through targeted stretches and improving spine mobility, range of motion can be enhanced. This increased range of motion can result in faster club head speed and improved shot distance.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
              Chiropractic care from Dr. Meylor can reduce pain during golf and potentially lower your handicap.
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div id="gfw" data-reveal="1" style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "#000", aspectRatio: "16/9", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
            <video id="gfv" src="/uploads/golf-video.mp4" muted playsInline preload="metadata" aria-label="Golf performance video" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", cursor: "pointer" }} />
            {" "}
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", gap: "8px", padding: "28px 16px 12px", background: "linear-gradient(transparent,rgba(0,0,0,.7))", color: "#fff", fontSize: "13px" }}>
              <button id="gf-play" type="button" aria-label="Play or pause" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                ▶
              </button>
              {" "}
              <button id="gf-mute" type="button" aria-label="Mute or unmute" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Unmute
              </button>
              {" "}
              <input id="gf-seek" type="range" min="0" max="1000" defaultValue="0" aria-label="Seek" style={{ flex: "1", minWidth: "0", accentColor: "#fff", cursor: "pointer" }} />
              {" "}
              <span id="gf-time" style={{ minWidth: "84px", textAlign: "right" }}>
                0:00 / 0:00
              </span>
              {" "}
              <button id="gf-full" type="button" aria-label="Expand video" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Expand
              </button>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Getting Started
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.08", margin: "0 0 14px" }}>
              Golf Performance
            </h2>
            {" "}
            <p style={{ margin: "0 0 8px", fontSize: "clamp(22px,2.4vw,28px)", lineHeight: "1.3", fontWeight: "700", color: "#15315A" }}>
              Unlock Your Path to Wellness
            </p>
            {" "}
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#1F2937" }}>
              We make it easy to get relief.
            </p>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "24px" }}>
            <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px", marginBottom: "20px" }}>
                1
              </div>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Free Consultation
              </h3>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                Click the "Book Now" button on our website to schedule your initial consultation with Meylor Chiropractic. Choose a convenient time for your visit.
              </p>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px", marginBottom: "20px" }}>
                2
              </div>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Comprehensive Consultation
              </h3>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                During your visit, we will review your health history, conduct a full chiropractic examination, and perform necessary X-rays and neurologic assessments. Dr. Meylor will discuss your health concerns and develop a personalized care plan tailored to your specific needs.
              </p>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px", marginBottom: "20px" }}>
                3
              </div>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Begin Your Path and Enjoy Life Again
              </h3>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                Start your customized treatment plan with regular chiropractic adjustments and holistic care. Experience better sleep, reduced pain, improved relationships, and enhanced overall well-being for a happier, healthier life.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#15315A", padding: "104px 32px" }}>
        <div data-reveal="1" style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Your Game
          </div>
          {" "}
          <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0 0 32px", textWrap: "balance" }}>
            Ready to Improve Your Game?
          </h3>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link className="h-abc0814" to="/free-consultation/" style={{ display: "inline-block", background: "#fff", color: "#15315A", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Schedule Performance Assessment
            </Link>
            <a className="h-d1471fa" href="tel:9132270909" style={{ display: "inline-block", whiteSpace: "nowrap", color: "#fff", padding: "15px 30px", borderRadius: "999px", border: "1.5px solid #fff", fontWeight: "700", fontSize: "17px" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
