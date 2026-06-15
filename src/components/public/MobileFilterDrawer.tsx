"use client";

import { useState } from "react";
import type { Car } from "@/data/cars";
import type { InventoryFilters } from "@/lib/inventory";
import { CloseIcon, FilterIcon } from "@/components/ui/Icons";
import { FilterSidebar } from "@/components/public/FilterSidebar";

type MobileFilterDrawerProps = {
  cars: Car[];
  filters: InventoryFilters;
  onChange: (next: InventoryFilters) => void;
};

export function MobileFilterDrawer({ cars, filters, onChange }: MobileFilterDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-12 items-center justify-center gap-2 rounded bg-night px-4 text-sm font-extrabold text-white lg:hidden"
      >
        <FilterIcon /> Filters
      </button>
      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            className="absolute inset-0 bg-black/45"
            aria-label="Filters sluiten"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[min(92vw,420px)] overflow-y-auto bg-mist p-4 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xl font-black text-ink">Aanbod filteren</p>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded border border-line bg-white"
                onClick={() => setOpen(false)}
                aria-label="Sluiten"
              >
                <CloseIcon />
              </button>
            </div>
            <FilterSidebar cars={cars} filters={filters} onChange={onChange} />
            <button
              type="button"
              className="mt-4 h-12 w-full rounded bg-gold text-sm font-extrabold text-white"
              onClick={() => setOpen(false)}
            >
              Resultaten tonen
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
