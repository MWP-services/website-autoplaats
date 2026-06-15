import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { formatMileage, formatPrice, getWhatsappHref, showValue } from "@/lib/format";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { StatusBadge } from "@/components/public/StatusBadge";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
      <Link href={`/aanbod/${car.slug}`} className="block">
        <div className="relative">
          <Image
            src={car.images[0]}
            alt={car.title}
            width={720}
            height={520}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {car.labels.slice(0, 3).map((label) => (
              <StatusBadge key={label} label={label} />
            ))}
            {car.status === "sold" ? <StatusBadge status="sold" /> : null}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-ink">{car.title}</h2>
            <p className="mt-1 text-sm font-semibold text-steel">{showValue(car.version)}</p>
          </div>
          <p className="shrink-0 text-right text-lg font-black text-gold">{formatPrice(car.price)}</p>
        </div>

        <dl className="grid grid-cols-2 gap-3 border-y border-line py-4 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Bouwjaar</dt>
            <dd className="font-extrabold text-ink">{showValue(car.year)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Km-stand</dt>
            <dd className="font-extrabold text-ink">{formatMileage(car.mileage)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Brandstof</dt>
            <dd className="font-extrabold text-ink">{showValue(car.fuel)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Transmissie</dt>
            <dd className="font-extrabold text-ink">{showValue(car.transmission, "Op aanvraag")}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Vermogen</dt>
            <dd className="font-extrabold text-ink">{car.powerHp ? `${car.powerHp} pk` : "Nog niet ingevuld"}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-steel">Carrosserie</dt>
            <dd className="font-extrabold text-ink">{showValue(car.bodyType)}</dd>
          </div>
        </dl>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/aanbod/${car.slug}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-night px-4 text-sm font-extrabold text-white transition hover:bg-navy"
          >
            Bekijk auto <ArrowRightIcon />
          </Link>
          <a
            href={getWhatsappHref(car)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded border border-gold px-4 text-sm font-extrabold text-gold transition hover:bg-gold hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
