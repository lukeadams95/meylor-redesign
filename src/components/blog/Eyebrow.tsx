export default function Eyebrow({ text, color, center = false }: { text: string; color: string; center?: boolean }) {
  return (
    <div style={{ display: "flex", ...(center ? { justifyContent: "center" } : {}), alignItems: "center", gap: "12px", fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color, marginBottom: "16px" }}>
      <span style={{ width: "56px", height: "1px", background: color }} />
      <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: color }} />
      {text}
    </div>
  );
}
