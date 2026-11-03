import { useEffect } from "react";

/** Loads the ReviewWave booking widget into #rw-booking-widget (Appointment page). */
export function useBookingWidget() {
  useEffect(() => {
    const box = document.getElementById("rw-booking-widget");
    if (!box) return;
    const t = window.setTimeout(() => {
      const sc = document.createElement("script");
      sc.id = "reviewwave-script";
      sc.src = "https://cdn.reviewwave.com/js/reviewwave.js";
      sc.charset = "utf-8";
      sc.setAttribute("data-id", "4036f20c822684914d82babc7a5ed4979cfc");
      sc.async = true;
      box.appendChild(sc);
    }, 100);
    return () => {
      window.clearTimeout(t);
      document.getElementById("reviewwave-script")?.remove();
      box.innerHTML = "";
    };
  }, []);
}
