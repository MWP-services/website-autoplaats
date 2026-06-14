"use client";

import { useMemo, useState } from "react";
import type { Car } from "@/data/cars";
import { filterCars, initialFilters, sortCars, type SortKey } from "@/lib/inventory";
import { CarCard } from "@/components/public/CarCard";
import { FilterSidebar } from "@/components/public/FilterSidebar";
import { MobileFilterDrawer } from "@/components/public/MobileFilterDrawer";
import { SearchIcon } from "@/components/ui/Icons";

export function InventoryGrid({ cars, initialQuery = "" }: { cars: Car[]; initialQuery?: string }) {
  const [filters, setFilters] = useState({ ...initialFilters, query: initialQuery });
  const [sortKey, setSortKey] = useState<SortKey>("recommended");

  const visibleCars = useMemo(() => sortCars(filterCars(cars, filters), sortKey), [cars, filters, sortKey]);

  return (
    <section className="bg-mist py-10 lg:py-14">
      <div className="container-page">
        <div className="mb-6 grid gap-3 lg:grid-cols-[280px_1fr_auto] lg:items-center">
          <MobileFilterDrawer cars={cars} filters={filters} onChange={setFilters} />
          <label className="relative lg:col-start-2">
            <span className="sr-only">Zoeken</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel" />
            <input
              value={filters.query}
              onChange={(event) => setFilters({ ...filters, query: event.target.value })}
              placeholder="Zoek merk, model of kenteken"
              className="h-12 w-full rounded border border-line bg-white pl-12 pr-4 text-sm font-bold text-ink outline-none focus:border-gold"
            />
          </label>
          <select
            aria-label="Sorteer aanbod"
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value as SortKey)}
            className="h-12 rounded border border-line bg-white px-4 text-sm font-bold text-ink outline-none focus:border-gold"
          >
            <option value="recommended">Aanbevolen</option>
            <option value="price-asc">Prijs laag naar hoog</option>
            <option value="price-desc">Prijs hoog naar laag</option>
            <option value="year-desc">Bouwjaar nieuw naar oud</option>
            <option value="mileage-asc">Kilometerstand laag naar hoog</option>
          </select>
        </div>

        <div className="grid gap-7 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar cars={cars} filters={filters} onChange={setFilters} />
          </div>
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-slate-600">
                {visibleCars.length} {visibleCars.length === 1 ? "auto" : "auto's"} gevonden
              </p>
              <p className="hidden text-sm font-semibold text-steel sm:block">
                Ontbrekende gegevens worden netjes als op aanvraag getoond.
              </p>
            </div>
            {visibleCars.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-line bg-white p-8 text-center shadow-card">
                <h2 className="text-2xl font-black text-ink">Geen auto’s gevonden</h2>
                <p className="mt-2 text-slate-600">Pas je filters aan of neem contact op over aankomend aanbod.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
