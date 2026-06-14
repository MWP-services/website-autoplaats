import Link from "next/link";
import { getWhatsappHref } from "@/lib/format";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={getWhatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded bg-gold px-4 text-sm font-extrabold text-night"
        >
          WhatsApp
        </a>
        <Link
          href="/aanbod"
          className="inline-flex h-12 items-center justify-center rounded bg-night px-4 text-sm font-extrabold text-white"
        >
          Bekijk aanbod
        </Link>
      </div>
    </div>
  );
}
