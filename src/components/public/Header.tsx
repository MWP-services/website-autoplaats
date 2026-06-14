"use client";

import Link from "next/link";
import { useState } from "react";
import { dealerConfig } from "@/data/dealerConfig";
import { getWhatsappHref } from "@/lib/format";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { BrandLogo } from "@/components/public/BrandLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night text-white shadow-sm">
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Autoplaats home">
          <BrandLogo />
          <span>
            <span className="block text-lg font-extrabold tracking-wide">{dealerConfig.name}</span>
            <span className="hidden text-xs text-slate-300 sm:block">{dealerConfig.slogan}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/aanbod"
            className="rounded border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-white/40"
          >
            Bekijk aanbod
          </Link>
          <a
            href={getWhatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-gold px-4 py-2 text-sm font-extrabold text-night transition hover:bg-[#d2a13f]"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu openen"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-night px-4 pb-5 lg:hidden">
          <nav className="container-page grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-base font-bold text-slate-100 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container-page grid grid-cols-2 gap-3">
            <Link className="rounded bg-white px-4 py-3 text-center text-sm font-extrabold text-night" href="/aanbod">
              Aanbod
            </Link>
            <a
              className="rounded bg-gold px-4 py-3 text-center text-sm font-extrabold text-night"
              href={getWhatsappHref()}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
