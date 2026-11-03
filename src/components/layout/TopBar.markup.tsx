// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

export default function TopBarMarkup() {
  return (
    <div style={{ position: "relative", zIndex: "60", background: "#1C4581", color: "#fff", fontSize: "14px", padding: "9px 32px", display: "flex", justifyContent: "space-between", gap: "2px 16px", flexWrap: "wrap", alignItems: "center" }}>
      <div className="topbar-l" style={{ display: "flex", gap: "6px 24px", alignItems: "center", flexWrap: "wrap" }}>
        <a href="https://maps.google.com/?q=12980+W+87th+St+Pkwy,+Lenexa,+KS+66215" style={{ color: "#fff", display: "flex", gap: "10px", alignItems: "center" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#F5F7FA", color: "#15315A", display: "grid", placeItems: "center" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50% 50% 50% 0", background: "#15315A", transform: "rotate(-45deg) translate(1px,-1px)", display: "grid", placeItems: "center" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#F5F7FA" }} />
            </span>
          </span>
          12980 W 87th St Pkwy, Lenexa, KS 66215
        </a>
        {" "}
        <LanguageToggle />
      </div>
      {" "}
      <Link to="/services/auto-injury-relief/" style={{ color: "#fff", fontWeight: "700" }}>
        Involved in an auto accident? Click here.
      </Link>
    </div>
  );
}
