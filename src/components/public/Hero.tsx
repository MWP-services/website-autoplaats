import Image from "next/image";
import Link from "next/link";
import { Car } from "@/data/cars";
import { dealerConfig } from "@/data/dealerConfig";
import { formatPrice, getWhatsappHref } from "@/lib/format";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { HeroSearch } from "@/components/public/HeroSearch";

export function Hero({ car }: { car: Car }) {
  return (
    <section className="overflow-hidden bg-night text-white">
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Bekijk het actuele aanbod van Krijnen Auto Te Koop
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Sportieve occasions overzichtelijk gepresenteerd. Bekijk de auto&apos;s, filter op jouw
            wensen en neem direct contact op voor een bezichtiging of proefrit.
          </p>

          <div className="mt-7 overflow-hidden rounded-lg bg-slate-900 shadow-soft ring-1 ring-white/10 lg:hidden">
            <Image
              src={car.images[0]}
              alt={car.title}
              width={960}
              height={720}
              priority
              sizes="100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/aanbod"
              className="inline-flex h-14 items-center justify-center gap-2 rounded bg-gold px-6 text-sm font-extrabold text-white transition hover:bg-ember"
            >
              Bekijk aanbod <ArrowRightIcon />
            </Link>
            <a
              href={getWhatsappHref(car)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded border border-white/20 bg-white px-6 text-sm font-extrabold text-night transition hover:border-gold"
            >
              Stuur WhatsApp
            </a>
            <a
              href={dealerConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded border border-white/20 px-6 text-sm font-extrabold text-white transition hover:border-gold hover:bg-white/10"
            >
              Volg op TikTok
            </a>
          </div>
          <HeroSearch />
        </div>

        <div className="relative hidden lg:block">
          <div className="overflow-hidden rounded-lg bg-slate-900 shadow-soft ring-1 ring-white/10">
            <Image
              src={car.images[0]}
              alt={car.title}
              width={960}
              height={640}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded bg-white/95 p-5 shadow-card backdrop-blur">
            <p className="text-xs font-extrabold uppercase tracking-wider text-gold">Net binnen</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xl font-black text-ink">{car.title}</p>
                <p className="text-sm font-semibold text-steel">
                  {car.year} / {car.fuel} / {car.powerHp} pk
                </p>
              </div>
              <p className="text-xl font-black text-gold">{formatPrice(car.price)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
