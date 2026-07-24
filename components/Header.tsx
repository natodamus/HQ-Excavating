"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Logo } from "./Logo";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <Link
        href="/"
        className="brandLink"
        aria-label="Go to homepage"
        onClick={closeMenu}
      >
        <Logo />
      </Link>

      <button
        className="menuButton"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        id="primary-navigation"
        className={open ? "nav navOpen" : "nav"}
      >
        <Link href="/#services" onClick={closeMenu}>
          Services
        </Link>

        <Link href="/#projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link href="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/#estimate" onClick={closeMenu}>
          Free Estimate
        </Link>
      </nav>

      <a className="headerCta" href={`tel:${site.phoneHref}`}>
        <Phone size={17} />
        {site.phoneDisplay}
      </a>
    </header>
  );
}