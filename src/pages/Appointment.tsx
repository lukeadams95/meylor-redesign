// Generated from the Claude Design prototype (Meylor Chiropractic Home.dc.html).
// Markup and inline styles are kept 1:1 with the design.
import Seo from "../components/Seo";
import { useBookingWidget } from "../hooks/useBookingWidget";

export default function AppointmentPage() {
  useBookingWidget();
  return (
    <>
      <Seo title="Schedule Appointment - Meylor Chiropractic" description="Schedule your chiropractic appointment online with Meylor Chiropractic in Lenexa, KS. Book now for expert care and pain relief. Walk-ins welcome." />
      <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: "700", color: "#E3E8EF", marginBottom: "16px" }}>
            <span style={{ width: "56px", height: "1px", background: "#E3E8EF" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E3E8EF" }} />
            Serving Lenexa Residents since 2005
          </div>
          {" "}
          <h1 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "0", color: "#fff", maxWidth: "860px", textWrap: "balance" }}>
            Schedule an Appointment
          </h1>
        </div>
      </section>
      {" "}
      <section style={{ background: "#F5F7FA", padding: "96px 32px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", background: "#fff", border: "1px solid #E3E8EF", borderRadius: "28px", padding: "clamp(20px,3vw,40px)", boxShadow: "0 30px 60px -40px rgba(21,49,90,.35)", minHeight: "560px" }}>
          <div id="rw-booking-widget" />
        </div>
      </section>
    </>
  );
}
