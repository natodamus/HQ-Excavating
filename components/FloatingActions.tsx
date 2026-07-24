"use client";

import { useEffect, useState } from "react";
import { FileText, Phone } from "lucide-react";

type FloatingActionsProps = {
  phoneDisplay: string;
  phoneHref: string;
};

export default function FloatingActions({
  phoneDisplay,
  phoneHref,
}: FloatingActionsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToEstimate = () => {
    document.getElementById("estimate")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`floatingCta ${
        visible ? "floatingCtaVisible" : ""
      }`}
    >
      <a
        className="floatingCtaCall"
        href={`tel:${phoneHref}`}
        aria-label={`Call ${phoneDisplay}`}
      >
        <Phone size={20} aria-hidden="true" />
        <span>Call Now</span>
      </a>

      <button
        className="floatingCtaEstimate"
        type="button"
        onClick={scrollToEstimate}
      >
        <FileText size={20} aria-hidden="true" />
        <span>Request Estimate</span>
      </button>
    </div>
  );
}