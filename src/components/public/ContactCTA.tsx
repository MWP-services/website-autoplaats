import Link from "next/link";
import { getWhatsappHref } from "@/lib/format";

export function ContactCTA() {
  return (
    <section className="bg-white py-14">
      <div className="container-page rounded-lg bg-night p-8 text-white shadow-soft md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Interesse in een auto?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Stel direct je vraag, plan een bezichtiging of vraag meer informatie over de Seat Leon.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-none">
            <a
              href={getWhatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded bg-gold px-5 text-sm font-extrabold text-white"
            >
              WhatsApp direct
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded border border-white/20 px-5 text-sm font-extrabold text-white"
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
