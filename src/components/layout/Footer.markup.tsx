// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";

export default function FooterMarkup() {
  return (
    <footer style={{ background: "#143158", color: "#E3E8EF", padding: "64px 32px 28px", fontSize: "15.5px", lineHeight: "1.65" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))", gap: "40px", marginBottom: "44px" }}>
        <div>
          <Link to="/" style={{ display: "inline-block", marginBottom: "18px" }}>
            <img src="/uploads/07-footer-logo.png" alt={"Meylor Chiropractic & Acupuncture"} style={{ height: "72px", width: "auto", display: "block" }} />
          </Link>
          {" "}
          <a className="h-57d4e9e" href={"https://www.google.com/maps/search/?api=1&query=12980+W+87th+St+Pkwy+Lenexa+KS+66215"} style={{ display: "block", color: "#E3E8EF" }}>
            12980 W 87th St Pkwy, Lenexa, KS 66215
          </a>
          {" "}
          <a href="tel:9132270909" style={{ display: "inline-block", color: "#fff", fontWeight: "700", margin: "2px 0 14px" }}>
            (913) 227-0909
          </a>
          {" "}
          <div style={{ fontWeight: "700", color: "#fff" }}>
            Hours:
          </div>
          {" "}
          <div>
            Monday – Thursday: 9:30 AM – 12:30 PM, 3:00 PM – 6:00 PM
            <br />
            Friday – Sunday: Closed
          </div>
          {" "}
          <div style={{ marginTop: "22px", display: "flex", gap: "14px" }}>
            <a className="h-d1ba5a0" href="#" aria-label="Facebook" style={{ width: "36px", height: "36px", display: "grid", placeItems: "center", color: "#fff", fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "28px", lineHeight: "1" }}>
              f
            </a>
            {" "}
            <a className="h-d1ba5a0" href="#" aria-label="Instagram" style={{ width: "36px", height: "36px", display: "grid", placeItems: "center", color: "#fff" }}>
              <span style={{ position: "relative", width: "26px", height: "26px", border: "2.5px solid currentColor", borderRadius: "8px", display: "grid", placeItems: "center" }}>
                <span style={{ width: "10px", height: "10px", border: "2.5px solid currentColor", borderRadius: "50%" }} />
                <span style={{ position: "absolute", top: "3px", right: "3px", width: "3.5px", height: "3.5px", borderRadius: "50%", background: "currentColor" }} />
              </span>
            </a>
            {" "}
            <a className="h-d1ba5a0" href="#" aria-label="YouTube" style={{ width: "36px", height: "36px", display: "grid", placeItems: "center", color: "#fff" }}>
              <span style={{ width: "30px", height: "22px", border: "2.5px solid currentColor", borderRadius: "7px", display: "grid", placeItems: "center" }}>
                <span style={{ width: "0", height: "0", borderLeft: "8px solid currentColor", borderTop: "5px solid transparent", borderBottom: "5px solid transparent", marginLeft: "2px" }} />
              </span>
            </a>
          </div>
        </div>
        {" "}
        <div>
          <div style={{ fontWeight: "700", fontSize: "18px", color: "#fff", marginBottom: "14px" }}>
            Services
          </div>
          <div style={{ display: "grid", gap: "6px" }}>
            <Link className="h-57d4e9e" to="/services/auto-injury-relief/" style={{ color: "#E3E8EF" }}>
              Auto Injury Relief
            </Link>
            <Link className="h-57d4e9e" to="/services/chiropractic/" style={{ color: "#E3E8EF" }}>
              Chiropractic Care
            </Link>
            <Link className="h-57d4e9e" to="/services/acupuncture/" style={{ color: "#E3E8EF" }}>
              Acupuncture
            </Link>
            <Link className="h-57d4e9e" to="/services/golf/" style={{ color: "#E3E8EF" }}>
              Golf
            </Link>
          </div>
        </div>
        {" "}
        <div>
          <div style={{ fontWeight: "700", fontSize: "18px", color: "#fff", marginBottom: "14px" }}>
            Other Links
          </div>
          <div style={{ display: "grid", gap: "6px" }}>
            <Link className="h-57d4e9e" to="/about/" style={{ color: "#E3E8EF" }}>
              About Us
            </Link>
            <Link className="h-57d4e9e" to="/patient-forms/" style={{ color: "#E3E8EF" }}>
              Patient Forms
            </Link>
            <Link className="h-57d4e9e" to="/blog/" style={{ color: "#E3E8EF" }}>
              Blog
            </Link>
            <Link className="h-57d4e9e" to="/contact/" style={{ color: "#E3E8EF" }}>
              Contact
            </Link>
            <Link className="h-57d4e9e" to="/privacy-policy/" style={{ color: "#E3E8EF" }}>
              Privacy Policy
            </Link>
          </div>
        </div>
        {" "}
        <div>
          <div style={{ fontWeight: "700", fontSize: "18px", color: "#fff", marginBottom: "14px" }}>
            Find Us
          </div>
          <iframe title="Map to Meylor Chiropractic" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.921943659595!2d-94.736511!3d38.9714503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ecadc05042d5%3A0xfb03c0ea406ec3d!2sMeylor%20Lenexa%20Chiropractor%20and%20Acupuncture!5e0!3m2!1sen!2sus!4v1750708140655!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "220px", border: "0", borderRadius: "18px", display: "block" }} />
        </div>
      </div>
      {" "}
      <div style={{ maxWidth: "1320px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px 40px" }}>
        <div style={{ flex: "1 1 420px" }}>
          <a href="https://g.page/r/reviews" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px 12px", color: "#fff", fontSize: "18px", marginBottom: "22px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center" }}>
              <img src="/uploads/images.png" alt="Google" style={{ width: "22px", height: "22px", display: "block", objectFit: "contain" }} />
            </span>
            <span>
              Our Patients Rate Us 5 Out of 5
            </span>
            <span style={{ color: "#FBBC05", letterSpacing: "3px", fontSize: "22px" }}>
              ★★★★★
            </span>
            <span>
              Based on 400+ Reviews!
            </span>
          </a>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 30px", fontSize: "16px" }}>
            <Link className="h-d1ba5a0" to="/accessibility/" style={{ color: "#fff" }}>
              Accessibility
            </Link>
            <Link className="h-d1ba5a0" to="/anti-discrimination/" style={{ color: "#fff" }}>
              Anti-Discrimination
            </Link>
            <Link className="h-d1ba5a0" to="/healthcare-disclaimer/" style={{ color: "#fff" }}>
              Healthcare Disclaimer
            </Link>
            <Link className="h-d1ba5a0" to="/hipaa-policy/" style={{ color: "#fff" }}>
              HIPAA Policy
            </Link>
            <Link className="h-d1ba5a0" to="/privacy-policy/" style={{ color: "#fff" }}>
              Privacy Policy
            </Link>
            <Link className="h-d1ba5a0" to="/terms-of-service/" style={{ color: "#fff" }}>
              Terms of Service
            </Link>
            <Link className="h-d1ba5a0" to="/good-faith-estimate/" style={{ color: "#fff" }}>
              Good Faith Estimate
            </Link>
          </div>
        </div>
        {" "}
        <img src="/uploads/08-best-of-2026-award (1).webp" alt="Best of 2026 Award Winner — BusinessRate" style={{ height: "200px", width: "auto", display: "block" }} />
      </div>
      {" "}
      <div style={{ maxWidth: "1320px", margin: "32px auto 0", borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: "20px", fontSize: "14px" }}>
        <a className="h-57d4e9e" href="https://blueheronmarketing.com" style={{ color: "#E3E8EF" }}>
          Built and Maintained by Blue Heron
        </a>
      </div>
    </footer>
  );
}
