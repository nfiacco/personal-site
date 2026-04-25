import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">nick.fiacco.com</p>
        <h1 id="page-title">Nick Fiacco</h1>
        <p className="lede">
          A small React site, ready to grow into a portfolio, project page, or
          personal home on the web.
        </p>
        <div className="actions">
          <a href="mailto:nick@fiacco.com">Email</a>
          <a href="https://fiacco.com">Main site</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
