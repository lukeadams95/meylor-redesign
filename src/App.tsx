import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PageShell from "./components/layout/PageShell";
import { pageRoutes } from "./routes.generated";
import { BlogIndexPage, BlogPostPage } from "./pages/Blog";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pageRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<PageShell><Component /></PageShell>} />
        ))}
        <Route path="/patients/blog/" element={<PageShell><BlogIndexPage /></PageShell>} />
        <Route path="/patients/blog/:slug/" element={<PageShell><BlogPostPage /></PageShell>} />
        {/* The design has no 404 page; like the prototype, unknown addresses show the homepage. */}
        <Route path="*" element={<PageShell><HomePage /></PageShell>} />
      </Route>
    </Routes>
  );
}
