import { Link, useParams, useSearchParams } from "react-router-dom";
import type { CSSProperties, ReactNode } from "react";
import Seo from "../components/Seo";
import Eyebrow from "../components/blog/Eyebrow";
import Markdown from "../components/blog/Markdown";
import { asset, formatDay, parseDay, usePublishedPosts, type BlogPost } from "../components/blog/posts";

const H1: CSSProperties = { fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.025em", margin: 0, color: "#fff", textWrap: "balance" } as CSSProperties;
const BTN: CSSProperties = { display: "inline-block", padding: "16px 30px", borderRadius: "999px", fontWeight: 700, fontSize: "17px" };
const PER_PAGE = 9;

function Hero({ children }: { children?: ReactNode }) {
  return (
    <section className="page-hero" style={{ position: "relative", marginTop: "-120px", background: "#15315A", color: "#fff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
);
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

function BlogCard({ p }: { p: BlogPost }) {
  return (
    <Link className="bc" to={`/patients/blog/${p.slug}/`} title={p.title}>
      <div style={{ aspectRatio: "16/9", borderRadius: "30px", background: "#E3E8EF", overflow: "hidden" }}>
        {p.image && <img src={asset(p.image)} alt={p.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
      </div>
      <div className="bc-m" style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", marginTop: "26px", fontSize: "15px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><CalendarIcon />{formatDay(p.date)}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><UserIcon />{p.author}</span>
      </div>
      <h3 className="bc-t" style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 400, letterSpacing: "-.01em", fontSize: "22px", lineHeight: "1.35", margin: "14px 0 0", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.title}</h3>
      <span className="bc-x" style={{ display: "inline-block", alignSelf: "flex-start", marginTop: "auto", paddingTop: "22px", fontSize: "16px", textDecoration: "underline", textUnderlineOffset: "4px" }}>Explore More</span>
    </Link>
  );
}

const pagerBtn: CSSProperties = { height: "44px", padding: "0 20px", display: "inline-grid", placeItems: "center", borderRadius: "999px", fontWeight: 700, background: "#fff", color: "#15315A", border: "1px solid #E3E8EF" };

export function BlogIndexPage() {
  const posts = usePublishedPosts();
  const [q] = useSearchParams();
  const all = (posts || []).slice().sort((a, b) => parseDay(b.date) - parseDay(a.date));
  const pages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  const cur = Math.min(Math.max(parseInt(q.get("page") || "1", 10) || 1, 1), pages);
  const href = (n: number) => (n <= 1 ? "/patients/blog/" : "/patients/blog/?page=" + n);
  return (
    <>
      <Seo title="Chiropractic & Wellness Blog | Meylor, Lenexa KS" description="Tips on chiropractic care, acupuncture, pain relief and wellness from Meylor Chiropractic & Acupuncture in Lenexa, KS. Read our latest articles." />
      <Hero>
        {posts && (
          <>
            <Eyebrow text="Serving Lenexa Residents since 2005" color="#E3E8EF" />
            <h1 style={{ ...H1, fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08", marginBottom: "20px", maxWidth: "860px" }}>Health &amp; Wellness Blog</h1>
            <p style={{ fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.45", margin: 0, color: "#fff", maxWidth: "760px" }}>Expert insights, tips, and advice for your health and wellness journey</p>
          </>
        )}
      </Hero>
      {posts && (
        <section style={{ background: "#F5F7FA", padding: "104px 32px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
              <Eyebrow text="Our Blog" color="#1C4581" center />
              <h2 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.02em", color: "#15315A", fontSize: "clamp(32px,3.8vw,52px)", lineHeight: "1.1", margin: "0 0 14px" }}>Latest Articles</h2>
              <p style={{ margin: 0, fontSize: "19px", lineHeight: "1.6", color: "#1F2937" }}>Stay informed with our latest articles on chiropractic care, wellness tips, and health insights.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))", gap: "28px" }}>
              {all.slice((cur - 1) * PER_PAGE, cur * PER_PAGE).map((p) => <BlogCard key={p.slug} p={p} />)}
            </div>
            {pages > 1 && (
              <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", alignItems: "center" }}>
                {cur > 1 && <Link to={href(cur - 1)} style={pagerBtn}>Previous</Link>}
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <Link key={n} to={href(n)} style={{ minWidth: "44px", height: "44px", padding: "0 14px", display: "inline-grid", placeItems: "center", borderRadius: "999px", fontWeight: 700, fontSize: "16px", ...(n === cur ? { background: "#15315A", color: "#fff" } : { background: "#fff", color: "#15315A", border: "1px solid #E3E8EF" }) }}>{n}</Link>
                ))}
                {cur < pages && <Link to={href(cur + 1)} style={pagerBtn}>Next</Link>}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

function PrevNext({ p, label, align }: { p: BlogPost | null; label: string; align: "left" | "right" }) {
  if (!p) return <div />;
  return (
    <Link to={`/patients/blog/${p.slug}/`} style={{ display: "block", background: "#F5F7FA", border: "1px solid #E3E8EF", borderRadius: "24px", padding: "22px 26px", textAlign: align, color: "inherit" }}>
      <div style={{ fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1C4581", marginBottom: "8px" }}>{label}</div>
      <div style={{ fontWeight: 700, color: "#15315A", fontSize: "18px", lineHeight: "1.3" }}>{p.title}</div>
    </Link>
  );
}

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const posts = usePublishedPosts();
  if (!posts) return <Hero />;
  const i = posts.findIndex((p) => p.slug === slug), p = posts[i];
  if (!p) {
    return (
      <>
        <Hero><h1 style={{ ...H1, fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.08" }}>Page Not Found</h1></Hero>
        <section style={{ background: "#fff", padding: "104px 32px", textAlign: "center" }}>
          <Link to="/patients/blog/" style={{ ...BTN, background: "#1C4581", color: "#fff" }}>View All Blogs</Link>
        </section>
      </>
    );
  }
  const prev = i > 0 ? posts[i - 1] : null, next = i < posts.length - 1 ? posts[i + 1] : null;
  return (
    <>
      <Seo title={p.metaTitle || p.title} description={p.metaDescription || p.excerpt} />
      <Hero>
        <Link to="/patients/blog/" style={{ display: "inline-block", color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "24px", borderBottom: "1.5px solid #fff" }}>← View All Blogs</Link>
        <Eyebrow text={p.category} color="#E3E8EF" />
        <h1 style={{ ...H1, fontSize: "clamp(28px,3.8vw,50px)", lineHeight: "1.1", marginBottom: "20px", maxWidth: "980px" }}>{p.title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: "16px", color: "#E3E8EF" }}><span>{p.author}</span><span>{formatDay(p.date)}</span></div>
      </Hero>
      <section style={{ background: "#fff", padding: "104px 32px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {p.image && <img src={asset(p.image)} alt={p.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: "28px", display: "block", marginBottom: "40px", boxShadow: "0 30px 60px -30px rgba(21,49,90,.5)" }} />}
          <p style={{ fontSize: "clamp(19px,2vw,22px)", lineHeight: "1.6", color: "#5B6B82", margin: "0 0 40px" }}>{p.excerpt}</p>
          <Markdown source={p.content} />
          <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid #E3E8EF", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "16px" }}>
            <PrevNext p={prev} label="Previous" align="left" />
            <PrevNext p={next} label="Next" align="right" />
          </div>
          <div style={{ marginTop: "56px", background: "#15315A", borderRadius: "28px", padding: "clamp(28px,5vw,56px)", textAlign: "center", color: "#fff" }}>
            <h3 style={{ fontFamily: "Arial,Helvetica,sans-serif", fontWeight: 700, letterSpacing: "-.02em", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.15", margin: "0 0 16px", color: "#fff" }}>Ready to Start Your Health Journey?</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6", margin: "0 auto 28px", maxWidth: "620px", color: "#E3E8EF" }}>Schedule a consultation with Dr. Jade Meylor and discover how chiropractic care can help you achieve optimal health and wellness.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <Link to="/free-consultation/" style={{ ...BTN, background: "#fff", color: "#15315A" }}>Schedule Free Consultation</Link>
              <Link to="/contact/" style={{ ...BTN, color: "#fff", border: "1.5px solid #fff", padding: "15px 30px" }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
