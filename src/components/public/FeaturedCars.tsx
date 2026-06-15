import Link from "next/link";
import type { Car } from "@/data/cars";
import { CarCard } from "@/components/public/CarCard";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function FeaturedCars({ cars }: { cars: Car[] }) {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-black text-ink">Uitgelichte Seat Leon</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              De Seat Leon FR staat centraal in deze proefwebsite: grote foto&apos;s, duidelijke
              specificaties en direct contact voor een bezichtiging of proefrit.
            </p>
          </div>
          <Link href="/aanbod" className="inline-flex items-center gap-2 text-sm font-extrabold text-gold">
            Alle auto&apos;s bekijken <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
