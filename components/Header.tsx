"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a href="#top" className="brandLink" aria-label="Go to homepage">
        <Logo />
      </a>

      <button
        className="menuButton"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav navOpen" : "nav"}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#estimate" onClick={() => setOpen(false)}>Free Estimate</a>
      </nav>

      <a className="headerCta" href={`tel:${site.phoneHref}`}>
        <Phone size={17} />
        {site.phoneDisplay}
      </a>
    </header>
  );
}
