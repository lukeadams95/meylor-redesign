import { useRef, useState, type FormEvent } from "react";

/**
 * Free Consultation booking form, with every state designed: idle, inline
 * field errors, sending, sent, send failed, and "not connected yet".
 *
 * Submissions go to VITE_CONSULTATION_ENDPOINT (a form backend such as
 * Formspree, Netlify Forms or a CRM webhook that accepts a JSON POST). Until
 * that variable is set, a valid submit tells the visitor to call instead of
 * pretending the request was sent.
 */
const ENDPOINT: string | undefined = import.meta.env.VITE_CONSULTATION_ENDPOINT;
const PHONE_DISPLAY = "(913) 227-0909";
const PHONE_HREF = "tel:9132270909";
const CTA_LABEL = "Book My Free Consultation";

type Field = "name" | "email" | "phone" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "failed" | "unavailable";

const EMPTY: Values = { name: "", email: "", phone: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "That email doesn't look right. Try name@example.com.";
  const digits = v.phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  if (!v.phone.trim()) e.phone = "Please enter your phone number.";
  else if (digits.length !== 10) e.phone = "Please enter a 10-digit phone number.";
  return e;
}

const labelStyle = { fontSize: "14px", fontWeight: 700, color: "#E3E8EF" } as const;
const ERROR_COLOR = "#FECACA";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5M12 16.5h.01" />
    </svg>
  );
}

export default function ConsultationForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);

  const update = (field: Field, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    // Once the visitor has tried to submit, errors clear as soon as they're fixed.
    if (attempted) setErrors(validate(next));
    if (status === "failed" || status === "unavailable") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setAttempted(true);
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(EMPTY) as Field[]).find((f) => found[f]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!ENDPOINT) {
      setStatus("unavailable");
      requestAnimationFrame(() => noticeRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, source: "Free Consultation page" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
    requestAnimationFrame(() => noticeRef.current?.focus());
  };

  const panelStyle = {
    background: "#1C4581",
    borderRadius: "28px",
    padding: "clamp(28px,3.4vw,44px)",
    display: "grid",
    gap: "24px",
    boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)",
    alignContent: "start",
  } as const;

  if (status === "sent") {
    return (
      <div id="fcform" style={panelStyle}>
        <div ref={noticeRef} tabIndex={-1} role="status" style={{ scrollMarginTop: "160px", display: "grid", gap: "14px", outline: "none" }}>
          <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#fff", color: "#1C4581", display: "grid", placeItems: "center" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: 1.1, margin: 0 }}>
            {`Thanks, ${values.name.trim().split(/\s+/)[0]}. We've got your request.`}
          </h2>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.6, color: "#E3E8EF" }}>
            Our front desk will call you at <strong style={{ color: "#fff", whiteSpace: "nowrap" }}>{values.phone.trim()}</strong> to pick a time. Need us sooner? Call <a href={PHONE_HREF} style={{ color: "#fff", fontWeight: 700, whiteSpace: "nowrap" }}>{PHONE_DISPLAY}</a>.
          </p>
        </div>
      </div>
    );
  }

  const fieldError = (f: Field) =>
    errors[f] ? (
      <span id={`fc-${f}-err`} style={{ display: "flex", gap: "6px", alignItems: "flex-start", fontSize: "14px", lineHeight: 1.4, color: ERROR_COLOR, marginTop: "6px" }}>
        <AlertIcon />
        {errors[f]}
      </span>
    ) : null;

  const inputProps = (f: Field) => ({
    name: f,
    value: values[f],
    onChange: (e: { target: { value: string } }) => update(f, e.target.value),
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `fc-${f}-err` : undefined,
    style: errors[f] ? { borderBottomColor: ERROR_COLOR } : undefined,
  });

  const sending = status === "sending";

  return (
    <form id="fcform" ref={formRef} noValidate onSubmit={onSubmit} aria-busy={sending} style={panelStyle}>
      <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.02em", color: "#fff", fontSize: "clamp(26px,2.6vw,34px)", lineHeight: 1.1, margin: 0 }}>
        {CTA_LABEL}
      </h2>
      <div style={{ display: "grid", gap: "18px" }}>
        <label style={{ display: "grid", gap: "2px" }}>
          <span style={labelStyle}>Name <span aria-hidden="true">*</span></span>
          <input className="fi" required autoComplete="name" {...inputProps("name")} />
          {fieldError("name")}
        </label>
        <label style={{ display: "grid", gap: "2px" }}>
          <span style={labelStyle}>Email <span aria-hidden="true">*</span></span>
          <input className="fi" type="email" required autoComplete="email" inputMode="email" {...inputProps("email")} />
          {fieldError("email")}
        </label>
        <label style={{ display: "grid", gap: "2px" }}>
          <span style={labelStyle}>Phone <span aria-hidden="true">*</span></span>
          <input className="fi" type="tel" required autoComplete="tel" inputMode="tel" {...inputProps("phone")} />
          {fieldError("phone")}
        </label>
        <label style={{ display: "grid", gap: "2px" }}>
          <span style={labelStyle}>How can we help? <span style={{ fontWeight: 400 }}>(optional)</span></span>
          <textarea className="fi" rows={2} {...inputProps("message")} />
        </label>
      </div>

      {(status === "unavailable" || status === "failed") && (
        <div ref={noticeRef} tabIndex={-1} role="alert" style={{ scrollMarginTop: "160px", background: "#fff", color: "#15315A", borderRadius: "24px", padding: "18px 20px", fontSize: "15.5px", lineHeight: 1.55, outline: "none" }}>
          <strong style={{ display: "block", marginBottom: "4px" }}>
            {status === "failed" ? "Your request didn't go through." : "Online booking isn't available yet."}
          </strong>
          {status === "failed" ? "Please try again, or " : "Please "}
          call us at <a href={PHONE_HREF} style={{ color: "#1C4581", fontWeight: 700, whiteSpace: "nowrap" }}>{PHONE_DISPLAY}</a> and we'll book your free consultation over the phone.
        </div>
      )}

      <button className="h-abc0814 press" type="submit" disabled={sending} style={{ font: "inherit", fontWeight: 700, fontSize: "clamp(14px,4vw,16px)", background: "#fff", color: "#15315A", border: 0, borderRadius: "999px", padding: "6px 6px 6px 20px", cursor: sending ? "progress" : "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", width: "100%", minHeight: "52px", opacity: sending ? 0.75 : 1 }}>
        <span style={{ flex: 1, textAlign: "center", whiteSpace: "nowrap" }}>
          {sending ? "Sending…" : CTA_LABEL}
        </span>
        <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#15315A", color: "#fff", display: "grid", placeItems: "center" }}>
          <ArrowIcon />
        </span>
      </button>
      <div style={{ fontSize: "13px", color: "#E3E8EF", textAlign: "center", marginTop: "-10px" }}>
        {"Your information is safe & confidential. No spam, ever."}
      </div>
    </form>
  );
}

export { CTA_LABEL };
