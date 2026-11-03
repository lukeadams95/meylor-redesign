import { useEffect, useState } from "react";

export type BlogPost = {
  slug: string; title: string; excerpt: string; content: string; date: string;
  image: string; category: string; author: string; lastModified: string;
  metaTitle: string; metaDescription: string;
};

let cache: Promise<BlogPost[]> | null = null;
const load = () => (cache ||= fetch("/blog-posts.json").then((r) => r.json() as Promise<BlogPost[]>).catch(() => []));

/** Parse YYYY-MM-DD (or any Date string) to a UTC day timestamp. */
export const parseDay = (d: string) => {
  if (!d) return NaN;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d.trim());
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3]);
  const x = new Date(d);
  return isNaN(+x) ? NaN : Date.UTC(x.getFullYear(), x.getMonth(), x.getDate());
};
export const formatDay = (d: string) =>
  new Date(parseDay(d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
export const asset = (p: string) => (p.startsWith("uploads/") ? "/" + p : p);

/** Published posts (dated today or earlier), in file order. `null` while loading. */
export function usePublishedPosts() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  useEffect(() => {
    let live = true;
    void load().then((all) => {
      const now = new Date(), today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
      if (live) setPosts(all.filter((p) => { const d = parseDay(p.date); return !isNaN(d) && d <= today; }));
    });
    return () => { live = false; };
  }, []);
  return posts;
}
