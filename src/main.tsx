import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./styles.css";

type SocialLink = {
  href: string;
  label: string;
  Icon: IconType;
  external?: boolean;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/nfiacco",
    label: "GitHub",
    Icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/nfiacco",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "https://x.com/nick_fiacco",
    label: "X",
    Icon: FaXTwitter,
    external: true,
  },
  {
    href: "mailto:nick@fiacco.com",
    label: "Email",
    Icon: MdOutlineMail,
  },
];

function App() {
  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">Nick Fiacco</h1>
        <h2>National Merit Scholar 2012</h2>
        <nav className="social-links" aria-label="Links">
          {socialLinks.map(({ href, label, Icon, external }) => (
            <a
              className="social-link"
              aria-label={label}
              href={href}
              key={label}
              rel={external ? "noreferrer" : undefined}
              target={external ? "_blank" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
