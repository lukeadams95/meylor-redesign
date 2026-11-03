// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useVideoPlayer } from "../hooks/useVideoPlayer";

export default function AcupuncturePage() {
  useVideoPlayer("ac");
  return (
    <>
      <Seo title="Acupuncture in Lenexa, KS | Meylor Chiropractic" description="Natural acupuncture in Lenexa for chronic pain, stress & better sleep. Drug-free, time-tested care to restore balance and support whole-body wellness." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Acupuncture in Lenexa, KS
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0 0 36px", color: "#fff", maxWidth: "640px" }}>
            Balance Your Body, Relieve Your Stress
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
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "center" }}>
            <div data-reveal="1">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
                <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
                Acupuncture Care
              </div>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0 0 24px", textWrap: "balance" }}>
                Acupuncture in Lenexa
              </h3>
              {" "}
              <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
                Are you searching for acupuncture in Lenexa? Consider how impactful a healthcare practice must be to remain effective for hundreds of generations. In a time when much of the media and research are focused on the latest surgeries and medications, many valuable and essential forms of healthcare are being overlooked. Acupuncture, practiced as a medical system for over 2,400 years, has consistently demonstrated its safety and effectiveness.
              </p>
              {" "}
              <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
                While acupuncture alone is often the most effective treatment for various conditions, it can also be integrated into broader treatment plans to enhance results and reduce recovery time. Meylor Chiropractic and Acupuncture hopes this brief article offers you valuable insights into acupuncture and whether you could be one of the millions who benefit from this time-tested therapy.
              </p>
            </div>
            {" "}
            <div id="acw" data-reveal="1" style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "#000", aspectRatio: "16/9", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
              <video id="acv" src="/uploads/acupuncture-video.mp4" muted playsInline preload="metadata" aria-label="Acupuncture video" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", cursor: "pointer" }} />
              {" "}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", gap: "8px", padding: "28px 16px 12px", background: "linear-gradient(transparent,rgba(0,0,0,.7))", color: "#fff", fontSize: "13px" }}>
                <button id="ac-play" type="button" aria-label="Play or pause" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                  ▶
                </button>
                {" "}
                <button id="ac-mute" type="button" aria-label="Mute or unmute" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                  Unmute
                </button>
                {" "}
                <input id="ac-seek" type="range" min="0" max="1000" defaultValue="0" aria-label="Seek" style={{ flex: "1", minWidth: "0", accentColor: "#fff", cursor: "pointer" }} />
                {" "}
                <span id="ac-time" style={{ minWidth: "84px", textAlign: "right" }}>
                  0:00 / 0:00
                </span>
                {" "}
                <button id="ac-full" type="button" aria-label="Expand video" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                  Expand
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Our Treatment
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0", textWrap: "balance" }}>
              Professional Acupuncture Treatment
            </h3>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px" }}>
            <div data-reveal="1" role="img" aria-label="Acupuncture treatment photo 1" style={{ aspectRatio: "2/3", borderRadius: "28px", background: "url('/uploads/01-gallery%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
            {" "}
            <div data-reveal="1" role="img" aria-label="Acupuncture treatment photo 2" style={{ aspectRatio: "2/3", borderRadius: "28px", background: "url('/uploads/02-gallery%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
            {" "}
            <div data-reveal="1" role="img" aria-label="Acupuncture treatment photo 3" style={{ aspectRatio: "2/3", borderRadius: "28px", background: "url('/uploads/03-gallery%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
            {" "}
            <div data-reveal="1" role="img" aria-label="Acupuncture treatment photo 4" style={{ aspectRatio: "2/3", borderRadius: "28px", background: "url('/uploads/04-gallery%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              The Basics
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0", textWrap: "balance" }}>
              Understanding Acupuncture
            </h3>
          </div>
          {" "}
          <div data-reveal="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "24px 64px", alignItems: "start" }}>
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0", color: "#1F2937" }}>
              Acupuncture has a history that stretches back over 2,400 years as a recognized medical practice, with its roots and principles originating even earlier, before recorded history. The earliest forms of acupuncture likely utilized needles fashioned from sharpened stones. As the technique matured, the first detailed text on acupuncture, known as The Yellow Emperor's Classic of Internal Medicine, emerged around 300 B.C.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0", color: "#1F2937" }}>
              This marked the transition to metal needles, which replaced the earlier stone versions. Historical accounts indicate that royalty often used needles made of gold and silver. Despite countless revisions and updates over the centuries, this ancient text remains a fundamental guide for modern acupuncture. Today, acupuncture is widely accepted in Western medicine and is commonly practiced in hospitals and healthcare clinics worldwide.
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "start" }}>
            <div data-reveal="1">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
                <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
                How It Works
              </div>
              <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0 0 24px", textWrap: "balance" }}>
                How does Acupuncture work?
              </h3>
              {" "}
              <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
                Given the numerous toxins we encounter daily, it's crucial for our bodies to be well-prepared to manage these challenges effectively. Though traditional and Western explanations of acupuncture may differ, both approaches focus on helping our bodies adapt to our environments. Over thousands of years, specific points on the body have been identified that significantly influence our overall physiological health.
              </p>
              {" "}
              <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
                Depending on the intended outcome, fine needles are carefully placed at these points to activate various aspects of the hormonal, immune, and endocrine systems. This stimulation triggers the release of neurotransmitters, natural pain relievers, and hormones.
              </p>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#15315A", borderRadius: "28px", padding: "clamp(28px,4vw,48px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
              <h4 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(24px,2.4vw,30px)", lineHeight: "1.2", margin: "0 0 24px" }}>
                Benefits Reported by Our Patients
              </h4>
              {" "}
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Reduced muscle spasms and pain
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Decreased swelling in different areas of the body
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Overall reduction in pain levels
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Fewer illnesses due to enhanced immune function
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Less back and neck pain
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Fewer headaches
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Improved digestion
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Better sleep quality
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Fewer injuries during sports activities
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", lineHeight: "1.5", color: "#fff" }}>
                  <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", marginTop: "-1px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15315A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Reduced gynecological issues for women
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ marginBottom: "40px", maxWidth: "628px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Your Visit
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0", textWrap: "balance" }}>
              What should I expect during my acupuncture treatment?
            </h3>
          </div>
          {" "}
          <div className="sp-cols" data-reveal="1" style={{ columnCount: "2", columnGap: "64px", columnFill: "balance" }}>
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Before your first acupuncture session, it's essential to understand that the needles used in this treatment are quite different from those typically seen in a hospital. Many patients describe their acupuncture sessions as soothing and relaxing, with some even noting little to no sensation during the process.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              When you visit our Lenexa clinic for the first time, we will start by taking a detailed medical history and conducting a thorough examination. After reviewing the results, we'll pinpoint the areas of concern and create a personalized treatment plan for you. Once the sterile needles are carefully placed, you will usually rest for 30-45 minutes while the treatment works.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Depending on your specific needs, we may also incorporate massage, moist heat, or cold packs into the session. Overall, your visit will likely last about an hour.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              The effectiveness of the treatment can vary depending on the severity of your condition. Some patients experience immediate relief, while others may notice improvements over the next couple of days. Depending on the individual and the frequency of visits, the relief can last from a few hours to several weeks.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
              Although side effects are rare, some patients have reported mild nausea, bruising, muscle soreness, or difficulty sleeping after their first session. If you experience any of these symptoms, don't worry—simply inform your healthcare provider before your next appointment.
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#15315A", color: "#F5F7FA", padding: "96px 32px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
              5.0 Rated on Google
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4vw,56px)", margin: "0 0 36px", textAlign: "center", color: "#F5F7FA" }}>
              What Our Patients Say About Acupuncture
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
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Getting Started
            </div>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 14px" }}>
              Unlock Your Path to Wellness
            </h3>
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
              <h4 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Book Your Free Consultation
              </h4>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                Click the "Book Now" button on our website to schedule your initial consultation with Meylor Chiropractic. Choose a convenient time for your visit.
              </p>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px", marginBottom: "20px" }}>
                2
              </div>
              <h4 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Comprehensive Consultation
              </h4>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                During your visit, we will review your health history, conduct a full examination, and perform necessary assessments. Dr. Meylor will discuss your health concerns and develop a personalized care plan.
              </p>
            </div>
            {" "}
            <div data-reveal="1" style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "32px 30px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1C4581", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "20px", marginBottom: "20px" }}>
                3
              </div>
              <h4 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "22px", lineHeight: "1.2", margin: "0 0 12px" }}>
                Begin Your Path and Enjoy Life Again
              </h4>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                Start your customized treatment plan with regular acupuncture sessions and holistic care. Experience better sleep, reduced pain, and enhanced overall well-being.
              </p>
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
            Natural Healing
          </div>
          <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0 0 20px", textWrap: "balance" }}>
            Experience Natural Healing Today
          </h3>
          {" "}
          <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 32px", color: "#1F2937" }}>
            If you're interested in learning more about acupuncture in Lenexa or want to explore how it could benefit your current health regimen, don't hesitate to reach out to our team at Meylor Chiropractic and Acupuncture. We're here to help.
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
