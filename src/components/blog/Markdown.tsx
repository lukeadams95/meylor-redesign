import { Fragment, type ReactNode } from "react";
import { asset } from "./posts";

const P = { fontSize: "17.5px", lineHeight: "1.7", color: "#1F2937", margin: "0 0 20px" };
const H2 = { fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.15", margin: "48px 0 16px" };
const LIST = { margin: "0 0 20px", paddingLeft: "26px", display: "grid", gap: "10px", fontSize: "17.5px", lineHeight: "1.7", color: "#1F2937" };
const LINK = { color: "#1C4581", textDecoration: "underline" };

/** Inline **bold** and [links](url). */
function inline(s: string): ReactNode[] {
  return s.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((x, i) => {
    if (x.startsWith("**") && x.endsWith("**") && x.length > 4) return <strong key={i} style={{ color: "#15315A" }}>{x.slice(2, -2)}</strong>;
    const m = x.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const ext = /^https?:\/\//i.test(m[2]);
      return <a key={i} href={m[2]} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={LINK}>{m[1]}</a>;
    }
    return <Fragment key={i}>{x}</Fragment>;
  });
}

/** Renders the blog's lightweight Markdown, exactly as the design does. */
export default function Markdown({ source }: { source: string }) {
  return (
    <>
      {source.split("\n\n").map((raw, i) => {
        const s = raw.trim();
        if (!s) return null;
        if (s.startsWith("### ")) return <h3 key={i} style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, color: "#15315A", fontSize: "22px", lineHeight: "1.25", margin: "32px 0 12px" }}>{s.slice(4)}</h3>;
        if (s.startsWith("## ")) return <h2 key={i} style={H2}>{s.slice(3)}</h2>;
        const bh = s.match(/^\*\*(.*)\*\*$/);
        if (bh) return <h2 key={i} style={H2}>{bh[1]}</h2>;
        const im = s.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (im) return <img key={i} src={asset(im[2])} alt={im[1]} loading="lazy" style={{ width: "100%", borderRadius: "28px", margin: "32px 0", display: "block", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />;
        const fr = s.match(/<iframe[^>]*src="([^"]*)"[^>]*><\/iframe>/);
        if (fr) return (
          <div key={i} style={{ margin: "32px 0", borderRadius: "28px", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }}>
            <iframe src={fr[1]} width="100%" height="450" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
          </div>
        );
        if (s.startsWith("- ")) return <ul key={i} style={LIST}>{s.split("\n").filter((x) => x.trim().startsWith("- ")).map((x, j) => <li key={j}>{inline(x.trim().slice(2))}</li>)}</ul>;
        if (/^\d+\./.test(s)) return <ol key={i} style={LIST}>{s.split("\n").filter((x) => /^\d+\./.test(x)).map((x, j) => <li key={j}>{inline(x.replace(/^\d+\.\s*/, ""))}</li>)}</ol>;
        return <p key={i} style={P}>{inline(s)}</p>;
      })}
    </>
  );
}
