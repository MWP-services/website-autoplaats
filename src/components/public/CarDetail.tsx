import Link from "next/link";
import type { Car } from "@/data/cars";
import {
  formatBoolean,
  formatMileage,
  formatPrice,
  getWhatsappHref,
  showValue,
} from "@/lib/format";
import { CarGallery } from "@/components/public/CarGallery";
import { StatusBadge } from "@/components/public/StatusBadge";

function Spec({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded border border-line bg-white p-4">
      <dt className="text-xs font-extrabold uppercase tracking-wider text-steel">{label}</dt>
      <dd className="mt-1 text-base font-black text-ink">{value}</dd>
    </div>
  );
}

export function CarDetail({ car }: { car: Car }) {
  const labels = car.badges ?? car.labels;

  return (
    <section className="bg-mist py-8 lg:py-12">
      <div className="container-page">
        <Link href="/aanbod" className="mb-5 inline-flex text-sm font-extrabold text-gold">
          Terug naar aanbod
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <CarGallery images={car.images} title={car.title} />
          <aside className="rounded-lg border border-line bg-white p-6 shadow-card lg:sticky lg:top-28 lg:self-start">
            <div className="mb-4 flex flex-wrap gap-2">
              {labels.map((label) => (
                <StatusBadge key={label} label={label} />
              ))}
            </div>
            <h1 className="text-3xl font-black leading-tight text-ink lg:text-4xl">{car.title}</h1>
            <p className="mt-2 text-sm font-bold text-steel">{showValue(car.version)}</p>
            <p className="mt-5 text-3xl font-black text-gold">{formatPrice(car.price)}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Spec label="Bouwjaar" value={showValue(car.year)} />
              <Spec label="Km-stand" value={formatMileage(car.mileage)} />
              <Spec label="Brandstof" value={showValue(car.fuel)} />
              <Spec label="Transmissie" value={showValue(car.transmission, "Op aanvraag")} />
              <Spec label="Vermogen" value={car.powerHp ? `${car.powerHp} pk` : "Nog niet ingevuld"} />
              <Spec label="APK" value={showValue(car.apk)} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={getWhatsappHref(car)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center rounded bg-gold px-5 py-4 text-sm font-extrabold text-white"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded border border-line px-5 py-4 text-sm font-extrabold text-ink"
              >
                Bellen
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded bg-night px-5 py-4 text-sm font-extrabold text-white sm:col-span-2"
              >
                Plan bezichtiging
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-8">
            <section className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h2 className="text-2xl font-black text-ink">Opties en extra&apos;s</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {car.options.map((option) => (
                  <li key={option} className="rounded border border-line px-4 py-3 text-sm font-bold text-ink">
                    {option}
                  </li>
                ))}
              </ul>
            </section>

            {car.attentionPoints?.length ? (
              <section className="rounded-lg border border-orange-200 bg-orange-50 p-6 shadow-card">
                <h2 className="text-2xl font-black text-ink">Bekend aandachtspunt</h2>
                <ul className="mt-4 grid gap-2">
                  {car.attentionPoints.map((point) => (
                    <li key={point} className="text-sm font-bold leading-7 text-slate-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h2 className="text-2xl font-black text-ink">Beschrijving</h2>
              <div className="mt-5 grid gap-6">
                {car.descriptionSections?.map((section) => (
                  <section key={section.title}>
                    <h3 className="text-lg font-black text-ink">{section.title}</h3>
                    {section.body ? <p className="mt-2 leading-8 text-slate-700">{section.body}</p> : null}
                    {section.items ? (
                      <ul className="mt-3 grid gap-2">
                        {section.items.map((item) => (
                          <li key={item} className="rounded border border-line bg-mist px-4 py-3 text-sm font-bold text-ink">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                )) ?? <p className="leading-8 text-slate-700">{car.description}</p>}
              </div>
            </section>

            <section className="rounded-lg bg-night p-6 text-white shadow-soft">
              <h2 className="text-2xl font-black">Interesse in deze Seat Leon?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Vraag direct meer informatie aan of plan een bezichtiging op afspraak.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsappHref(car)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded bg-gold px-5 text-sm font-extrabold text-white"
                >
                  Stuur WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded border border-white/20 px-5 text-sm font-extrabold text-white"
                >
                  Contact opnemen
                </Link>
              </div>
            </section>
          </div>

          <section className="rounded-lg border border-line bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-ink">Specificaties</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <Spec label="Kenteken" value={car.licensePlate} />
              <Spec label="Bouwjaar" value={showValue(car.year)} />
              <Spec label="Motorinhoud" value={showValue(car.engineSize, "Op aanvraag")} />
              <Spec label="Cilinderinhoud" value={car.engineSizeCc ? `${car.engineSizeCc.toLocaleString("nl-NL")} cc` : "Op aanvraag"} />
              <Spec label="Carrosserie" value={showValue(car.bodyType)} />
              <Spec label="Kleur" value={showValue(car.color)} />
              <Spec label="Deuren" value={showValue(car.doors)} />
              <Spec label="Zitplaatsen" value={showValue(car.seats)} />
              <Spec label="NAP" value={showValue(car.nap, "NAP op aanvraag")} />
              <Spec label="Datum eerste toelating" value={showValue(car.firstRegistration, "Op aanvraag")} />
              <Spec label="Importauto" value={formatBoolean(car.imported)} />
              <Spec label="WOK-status" value={showValue(car.wokStatus, "Op aanvraag")} />
              <Spec label="Onderhoudsboekjes" value={showValue(car.maintenanceBooklets, "Op aanvraag")} />
              <Spec label="Aantal sleutels" value={showValue(car.keys, "Op aanvraag")} />
            </dl>
          </section>
        </div>
      </div>
    </section>
  );
}
