// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import type { RefObject } from "react";

export default function HeaderMarkup({ headerRef, rMw, rOp, rPe, rMh, menuDisplay, menuIcon, toggleMenu }: { headerRef: RefObject<HTMLElement>; rMw: string; rOp: number; rPe: 'auto' | 'none'; rMh: string; menuDisplay: string; menuIcon: string; toggleMenu: () => void }) {
  return (
    <header ref={headerRef} style={{ position: "sticky", top: "0", zIndex: "50", padding: "16px 24px 0" }}>
      <div className="hdr-in" style={{ maxWidth: "1320px", margin: "0 auto", padding: "11px 18px 11px 28px", display: "flex", alignItems: "center", gap: "28px", justifyContent: "space-between", background: "#fff", borderRadius: "999px", boxShadow: "0 18px 40px -18px rgba(0,0,0,.35)" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#15315A" }}>
          <img src="/uploads/01-header-logo.png" alt={"Meylor Chiropractic & Acupuncture"} style={{ height: "66px", width: "auto", display: "block" }} />
        </Link>
        {" "}
        <nav className="navlinks" style={{ display: "flex", gap: "30px", fontSize: "16px", fontWeight: "700", alignItems: "center" }}>
          <Link className="nl" to="/" style={{ color: "#15315A" }}>
            Home
          </Link>
          {" "}
          <div className="dd" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Link className="nl h-27bfeaf" to="/services/" style={{ color: "#1F2937", padding: "10px 0" }}>
              Services ▾
            </Link>
            <div className="dd-panel" style={{ display: "none", position: "absolute", top: "100%", left: "-24px", paddingTop: "14px", width: "720px", maxWidth: "90vw", zIndex: "80" }}>
              <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 24px 60px -16px rgba(21,49,90,.35),0 0 0 1px #E3E8EF", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "6px 16px" }}>
                <Link className="dd-i h-eb15ec1" to="/services/chiropractic/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M11 2v2" />
                      <path d="M5 2v2" />
                      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                      <path d="M8 15a6 6 0 0 0 12 0v-3" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Chiropractic Care
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Comprehensive spinal care and pain relief
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/services/acupuncture/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Acupuncture
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Traditional Chinese medicine healing
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/services/auto-injury-relief/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Auto Injury Relief
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Specialized care for accident injuries
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/services/golf/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Golf
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Performance enhancement for golfers
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/services/sports-injuries/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Sports Injuries
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Care for soccer, running, and weekend-warrior injuries
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {" "}
          <div className="dd" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <a className="nl h-27bfeaf" href="#" style={{ color: "#1F2937", padding: "10px 0", cursor: "default" }}>
              Patients ▾
            </a>
            <div className="dd-panel" style={{ display: "none", position: "absolute", top: "100%", left: "-24px", paddingTop: "14px", width: "420px", maxWidth: "90vw", zIndex: "80" }}>
              <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 24px 60px -16px rgba(21,49,90,.35),0 0 0 1px #E3E8EF", display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: "6px 16px" }}>
                <Link className="dd-i h-eb15ec1" to="/patients/forms/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Forms
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Download patient forms and documents
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/same-day-appointments/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h5" />
                      <path d="M17.5 17.5 16 16.3V14" />
                      <circle cx="16" cy="16" r="6" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Same-Day Appointments
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Get seen today with easy online scheduling
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/evening-appointments/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Evening Appointments
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Appointments available 3:00-6:00 PM, Mon-Thu
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {" "}
          <div className="dd" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <a className="nl h-27bfeaf" href="#" style={{ color: "#1F2937", padding: "10px 0", cursor: "default" }}>
              About ▾
            </a>
            <div className="dd-panel" style={{ display: "none", position: "absolute", top: "100%", left: "-24px", paddingTop: "14px", width: "440px", maxWidth: "90vw", zIndex: "80" }}>
              <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 24px 60px -16px rgba(21,49,90,.35),0 0 0 1px #E3E8EF", display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: "6px 16px" }}>
                <Link className="dd-i h-eb15ec1" to="/about/team/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Meet Our Team
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Get to know our experienced healthcare professionals
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/about/testimonials/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Testimonials
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Read what our patients are saying about us
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/multilingual-staff/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="m5 8 6 6" />
                      <path d="m4 14 6-6 2-3" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="m22 22-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Bilingual Care
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Se habla español — fluent Spanish-speaking staff
                  </span>
                </Link>
                <Link className="dd-i h-eb15ec1" to="/patients/blog/" style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: "2px 14px", padding: "10px 12px", borderRadius: "12px", color: "#1F2937", whiteSpace: "normal", alignItems: "start" }}>
                  <span aria-hidden="true" style={{ gridRow: "1/3", width: "36px", height: "36px", borderRadius: "10px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                    Blog
                  </span>
                  <span style={{ fontSize: "14.5px", fontWeight: "400", lineHeight: "1.45", color: "#5B6B82" }}>
                    Health tips and insights from our experts
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {" "}
          <Link className="nl h-27bfeaf" to="/contact/" style={{ color: "#1F2937" }}>
            Contact
          </Link>
        </nav>
        {" "}
        <a className="rt-d" href="https://g.page/r/reviews" aria-label="5.0 stars, 400+ reviews, verified by Google" style={{ display: "flex", alignItems: "center", gap: "10px", overflow: "hidden", whiteSpace: "nowrap", maxWidth: rMw, opacity: rOp, pointerEvents: rPe, transition: "max-width .5s ease,opacity .4s ease", color: "#15315A", lineHeight: "1.2" }}>
          <img src="/uploads/images.png" alt="Google" style={{ width: "20px", height: "20px", display: "block", objectFit: "contain" }} />
          <span style={{ display: "grid", gap: "1px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "700" }}>
              <span style={{ color: "#F9AB00", letterSpacing: "1px", fontSize: "13px" }}>
                ★★★★★
              </span>
              5.0
              <span style={{ color: "#5B6B82", fontWeight: "400" }}>
                · 400+ reviews
              </span>
            </span>
            <span style={{ fontSize: "11px", color: "#5B6B82" }}>
              verified by Google
            </span>
          </span>
        </a>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a className="hdr-phone" href="tel:9132270909" style={{ whiteSpace: "nowrap", fontWeight: "700", color: "#15315A", fontSize: "16px" }}>
            (913) 227-0909
          </a>
          {" "}
          <Link className="hdr-cta h-50a943d" to="/free-consultation/" style={{ background: "#1C4581", color: "#fff", padding: "12px 22px", borderRadius: "999px", fontWeight: "700", fontSize: "15px", whiteSpace: "nowrap" }}>
            Free Consultation
          </Link>
          {" "}
          <button className="burger" type="button" onClick={toggleMenu} aria-label="Menu" style={{ all: "unset", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #15315A", placeItems: "center", color: "#15315A", fontSize: "18px" }}>
            {menuIcon}
          </button>
        </div>
      </div>
      {" "}
      <div className="rt-m" style={{ display: "none", maxWidth: "1320px", margin: "0 auto", overflow: "hidden", maxHeight: rMh, opacity: rOp, transition: "max-height .45s ease,opacity .35s ease" }}>
        <a href="https://g.page/r/reviews" aria-label="5.0 stars, 400+ reviews, verified by Google" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginTop: "8px", background: "#fff", borderRadius: "999px", padding: "7px 16px", fontSize: "12.5px", color: "#15315A", boxShadow: "0 12px 28px -14px rgba(0,0,0,.35)", pointerEvents: rPe }}>
          <img src="/uploads/images.png" alt="Google" style={{ width: "15px", height: "15px", display: "block", objectFit: "contain" }} />
          <span style={{ color: "#F9AB00", letterSpacing: "1px" }}>
            ★★★★★
          </span>
          <b>
            5.0
          </b>
          <span>
            400+ reviews
          </span>
          <span style={{ color: "#5B6B82" }}>
            · verified by Google
          </span>
        </a>
      </div>
      {" "}
      <nav style={{ display: menuDisplay, flexDirection: "column", margin: "8px auto 0", maxWidth: "1320px", background: "#fff", borderRadius: "24px", padding: "8px 28px 16px", fontSize: "17px", fontWeight: "700", boxShadow: "0 18px 40px -18px rgba(0,0,0,.35)", maxHeight: "calc(100vh - 160px)", overflow: "auto" }}>
        <Link to="/" style={{ color: "#1F2937", padding: "12px 0", borderBottom: "1px solid #E3E8EF" }}>
          Home
        </Link>
        <details style={{ borderBottom: "1px solid #E3E8EF" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", color: "#1F2937" }}>
            Services
            <span aria-hidden="true" style={{ fontSize: "14px", color: "#1C4581" }}>
              ▾
            </span>
          </summary>
          <div style={{ padding: "0 0 10px 4px" }}>
            <Link to="/services/chiropractic/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M11 2v2" />
                  <path d="M5 2v2" />
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                  <path d="M8 15a6 6 0 0 0 12 0v-3" />
                  <circle cx="20" cy="10" r="2" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Chiropractic Care
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Comprehensive spinal care and pain relief
              </span>
            </Link>
            <Link to="/services/acupuncture/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Acupuncture
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Traditional Chinese medicine healing
              </span>
            </Link>
            <Link to="/services/auto-injury-relief/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Auto Injury Relief
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Specialized care for accident injuries
              </span>
            </Link>
            <Link to="/services/golf/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Golf
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Performance enhancement for golfers
              </span>
            </Link>
            <Link to="/services/sports-injuries/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Sports Injuries
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Care for soccer, running, and weekend-warrior injuries
              </span>
            </Link>
          </div>
        </details>
        <details style={{ borderBottom: "1px solid #E3E8EF" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", color: "#1F2937" }}>
            Patients
            <span aria-hidden="true" style={{ fontSize: "14px", color: "#1C4581" }}>
              ▾
            </span>
          </summary>
          <div style={{ padding: "0 0 10px 4px" }}>
            <Link to="/patients/forms/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Forms
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Download patient forms and documents
              </span>
            </Link>
            <Link to="/same-day-appointments/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h5" />
                  <path d="M17.5 17.5 16 16.3V14" />
                  <circle cx="16" cy="16" r="6" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Same-Day Appointments
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Get seen today with easy online scheduling
              </span>
            </Link>
            <Link to="/evening-appointments/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Evening Appointments
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Appointments available 3:00-6:00 PM, Mon-Thu
              </span>
            </Link>
          </div>
        </details>
        <details style={{ borderBottom: "1px solid #E3E8EF" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", color: "#1F2937" }}>
            About
            <span aria-hidden="true" style={{ fontSize: "14px", color: "#1C4581" }}>
              ▾
            </span>
          </summary>
          <div style={{ padding: "0 0 10px 4px" }}>
            <Link to="/about/team/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Meet Our Team
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Get to know our experienced healthcare professionals
              </span>
            </Link>
            <Link to="/about/testimonials/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Testimonials
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Read what our patients are saying about us
              </span>
            </Link>
            <Link to="/multilingual-staff/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Bilingual Care
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Se habla español — fluent Spanish-speaking staff
              </span>
            </Link>
            <Link to="/patients/blog/" style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 12px", padding: "10px 0", color: "#1F2937", alignItems: "start" }}>
              <span aria-hidden="true" style={{ gridRow: "1/3", width: "32px", height: "32px", borderRadius: "9px", background: "#F5F7FA", color: "#1C4581", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#15315A", lineHeight: "1.3" }}>
                Blog
              </span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.4", color: "#5B6B82" }}>
                Health tips and insights from our experts
              </span>
            </Link>
          </div>
        </details>
        <Link to="/contact/" style={{ color: "#1F2937", padding: "12px 0" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
