import { StrictMode, useEffect, useRef, useState } from "react";
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

const apScores = [
  "AP U.S. History",
  "AP World History",
  "AP Calculus BC",
  "AP Biology",
  "AP Physics",
];

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const awardRef = useRef<HTMLDivElement>(null);
  const awardTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function selectionIncludesAward(range: Range) {
      const awardTextNode = awardTextRef.current?.firstChild;

      if (!awardTextNode) {
        return false;
      }

      const awardRange = document.createRange();
      awardRange.selectNodeContents(awardTextNode);

      return (
        range.compareBoundaryPoints(Range.START_TO_START, awardRange) <= 0 &&
        range.compareBoundaryPoints(Range.END_TO_END, awardRange) >= 0
      );
    }

    function handleSelectionChange() {
      const selection = window.getSelection();

      if (!selection || selection.rangeCount === 0) {
        setIsPopoverOpen(false);
        return;
      }

      const isFullAwardSelected = Array.from(
        { length: selection.rangeCount },
        (_, index) =>
          selection.getRangeAt(index),
      ).some(selectionIncludesAward);

      setIsPopoverOpen(isFullAwardSelected);
    }

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">Nick Fiacco</h1>
        <div className="award" ref={awardRef}>
          <h2>
            <span className="award-text" ref={awardTextRef}>
              2012 National AP Scholar
            </span>
          </h2>
          {isPopoverOpen && (
            <div
              className="score-popover"
              id="ap-scores"
              role="dialog"
              aria-label="AP exam scores"
            >
              <p className="score-popover-title">AP Exam Scores</p>
              <ul>
                {apScores.map((exam) => (
                  <li key={exam}>
                    <span>{exam}</span>
                    <strong>5</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
