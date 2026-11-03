// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useVideoPlayer } from "../hooks/useVideoPlayer";

export default function AutoInjuryReliefPage() {
  useVideoPlayer("pa");
  return (
    <>
      <Seo title="Auto Injury Chiropractor in Lenexa | Meylor Chiropractic" description="Injured in a car accident in Lenexa? We treat whiplash, neck & back pain with personalized chiropractic care. Same-day appointments available." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0 0 20px", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Auto Injury Relief in Lenexa, KS
          </h1>
          {" "}
          <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: "0 0 14px", color: "#fff", maxWidth: "640px" }}>
            Recover Faster After a Car Accident
          </p>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.5", margin: "0 0 36px", color: "#fff" }}>
            {"Injured today? "}
            <Link className="h-d1ba5a0" to="/same-day-appointments/" style={{ color: "#fff", fontWeight: "700", borderBottom: "1.5px solid #fff" }}>
              Same-day appointments
            </Link>
            {" are available."}
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Link className="h-abc0814" to="/free-consultation/" style={{ display: "inline-block", background: "#fff", color: "#15315A", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Get A Complimentary Consultation
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
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Your Recovery
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.08", margin: "0 0 24px" }}>
              Auto Accident Care
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
              Car accidents can be incredibly overwhelming and disorienting, leaving many people focused on the damage to their vehicle or navigating insurance claims rather than addressing their own health. However, prioritizing your health immediately after an accident is crucial in ensuring the best possible recovery. Seeking timely and appropriate care can significantly impact your long-term well-being. This article aims to explain how chiropractors in Lenexa assist car accident patients in their recovery journey, helping you avoid the chronic issues that can arise if injuries are left untreated.
            </p>
            {" "}
            <div style={{ marginTop: "32px" }}>
              <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
                Get A Complimentary Consultation
              </Link>
              <div style={{ marginTop: "12px", fontSize: "15px", color: "#5B6B82" }}>
                Your insurance may cover your care
              </div>
            </div>
          </div>
          {" "}
          <div id="paw" data-reveal="1" style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "#000", aspectRatio: "16/9", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
            <video id="pav" poster="/uploads/auto-video-poster.png" src="/uploads/auto-accident-care-video.mp4" muted playsInline preload="metadata" aria-label="Auto accident care video" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", cursor: "pointer" }} />
            {" "}
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", gap: "8px", padding: "28px 16px 12px", background: "linear-gradient(transparent,rgba(0,0,0,.7))", color: "#fff", fontSize: "13px" }}>
              <button id="pa-play" type="button" aria-label="Play or pause" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                ▶
              </button>
              {" "}
              <button id="pa-mute" type="button" aria-label="Mute or unmute" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Unmute
              </button>
              {" "}
              <input id="pa-seek" type="range" min="0" max="1000" defaultValue="0" aria-label="Seek" style={{ flex: "1", minWidth: "0", accentColor: "#fff", cursor: "pointer" }} />
              {" "}
              <span id="pa-time" style={{ minWidth: "84px", textAlign: "right" }}>
                0:00 / 0:00
              </span>
              {" "}
              <button id="pa-full" type="button" aria-label="Expand video" style={{ background: "transparent", border: "0", color: "#fff", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "6px 8px" }}>
                Expand
              </button>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "center" }}>
          <div data-reveal="1" role="img" aria-label="Common injuries after car accidents" style={{ aspectRatio: "4/4.4", borderRadius: "28px", background: "url('/uploads/01-common-injuries%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
          {" "}
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              What to Watch For
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.1", margin: "0 0 24px", textWrap: "balance" }}>
              Common Injuries After Car Accidents in Lenexa
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Many people mistakenly believe that the most severe injuries from car accidents are immediately apparent or that only high-speed, high-impact collisions can cause significant harm. These misconceptions often lead to many injuries going untreated after an accident. It's important to recognize that injuries can occur in various types of collisions, and the severity isn't always related to the speed or force of the impact.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              After a car accident, several factors, such as the positioning of the car's headrest, the size and type of the vehicles involved, and the speed at the moment of impact, all influence the injuries sustained. Research has shown that even a car traveling at just 5 mph can generate enough force to cause whiplash. While some injuries, like fractures, cuts, concussions, and dislocations, are immediately visible, others involving muscles, blood vessels, and nerves may not present symptoms until months or even years later. Unfortunately, when these injuries surface long after the accident, insurance companies often refuse to cover the associated medical expenses.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
              This is why it's crucial to undergo a thorough evaluation by a healthcare professional experienced with these types of injuries right after the accident. The doctors at Meylor Chiropractic and Acupuncture are here to guide you through this process, ensuring that any potential injuries are identified and treated promptly.
            </p>
            {" "}
            <div style={{ marginTop: "32px" }}>
              <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
                Get A Complimentary Consultation
              </Link>
              <div style={{ marginTop: "12px", fontSize: "15px", color: "#5B6B82" }}>
                Your insurance may cover your care
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "64px", alignItems: "center" }}>
          <div data-reveal="1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#1C4581", marginBottom: "16px" }}>
              <span style={{ width: "56px", height: "1px", background: "#1C4581" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#1C4581" }} />
              Chiropractic Care
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.08", margin: "0 0 24px" }}>
              How Can My Chiropractor Help?
            </h2>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              As mentioned earlier, chiropractors are among the few primary healthcare providers who specialize in treating the musculoskeletal system. Just as you would consult a cardiologist for heart-related issues, many people turn to chiropractors for care and guidance on musculoskeletal injuries. Whiplash is one of the most common injuries resulting from car accidents, even though it may not be immediately apparent. The forces that cause whiplash can severely impact the spine, leading to damage in the muscles, ligaments, and nerves that support the head and neck. If left untreated, these seemingly minor injuries can trigger a cascade of neurological and musculoskeletal symptoms. Whiplash injuries are also often linked to early degeneration of the vertebrae and a variety of symptoms, including pain and headaches.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 20px", color: "#1F2937" }}>
              Given that car accidents can affect multiple systems in the body, it's essential to find a healthcare provider who can address all these areas comprehensively. At Meylor Chiropractic and Acupuncture in Lenexa, our team will develop a personalized treatment plan that may include chiropractic adjustments, both active and passive physical therapy, tailored exercise programs, and nutritional guidance to accelerate the healing process.
            </p>
            {" "}
            <p style={{ fontSize: "17.5px", lineHeight: "1.7", margin: "0 0 0px", color: "#1F2937" }}>
              As you can see, seeking immediate care after a car accident in Lenexa can be the difference between a full recovery and a lifetime of discomfort. If you've been in an accident or know someone who has, we urge you to contact our team at Meylor Chiropractic and Acupuncture as soon as possible to schedule a consultation.
            </p>
            {" "}
            <div style={{ marginTop: "32px" }}>
              <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
                Get A Complimentary Consultation
              </Link>
              <div style={{ marginTop: "12px", fontSize: "15px", color: "#5B6B82" }}>
                Your insurance may cover your care
              </div>
            </div>
          </div>
          {" "}
          <div data-reveal="1" role="img" aria-label="How can my chiropractor help" style={{ aspectRatio: "4/4.6", borderRadius: "28px", background: "url('/uploads/02-how-can-my-chiropractor-help%20(1).webp') center/cover no-repeat,repeating-linear-gradient(135deg,#1C4581 0 12px,#15315A 12px 24px)", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />
        </div>
      </section>
      {" "}
      <section style={{ background: "#15315A", padding: "104px 32px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div data-reveal="1" style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "18px" }}>
              <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center" }}>
                <img src="/uploads/images.png" alt="Google" style={{ width: "20px", height: "20px", display: "block", objectFit: "contain" }} />
              </span>
              Google Reviews
            </div>
            {" "}
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0" }}>
              What Our Auto Accident Patients Say
            </h2>
          </div>
          {" "}
          <div data-reveal="1" style={{ position: "relative", background: "#fff", borderRadius: "24px", padding: "0", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(0,0,0,.5)" }}>
            <span className="rv-g" aria-hidden="true" style={{ position: "absolute", left: "72px", top: "34px", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,.15)", display: "none", placeItems: "center", pointerEvents: "none", zIndex: "2" }}>
              <img src="/uploads/images.png" alt="Google" style={{ width: "24px", height: "24px", display: "block", objectFit: "contain" }} />
            </span>
            <iframe className="lc_reviews_widget" title="Google reviews" src="https://reputationhub.site/reputation/widgets/review_widget/kb66lvgUD8lZbffdf3Gf?widgetId=66b23b56ac8eb013dabecd22" frameBorder="0" scrolling="no" style={{ minWidth: "100%", width: "100%", minHeight: "720px", display: "block", border: "0" }} />
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
            <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 14px" }}>
              Unlock Your Path to Wellness
            </h2>
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
                Get A Complimentary Consultation
              </h3>
              <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.65", color: "#1F2937" }}>
                Click the button below our website to schedule your initial consultation with Meylor Chiropractic.
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
          {" "}
          <div data-reveal="1" style={{ marginTop: "44px", textAlign: "center" }}>
            <Link className="h-d1471fa" to="/free-consultation/" style={{ display: "inline-block", background: "#1C4581", color: "#fff", padding: "16px 30px", borderRadius: "999px", fontWeight: "700", fontSize: "17px" }}>
              Get A Complimentary Consultation
            </Link>
            <div style={{ marginTop: "12px", fontSize: "15px", color: "#5B6B82" }}>
              Your insurance may cover your care
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
