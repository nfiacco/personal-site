import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">National Merit Scholar 2012</h1>
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
