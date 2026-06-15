"use client";

import type { Car } from "@/data/cars";
import type { InventoryFilters } from "@/lib/inventory";
import { uniqueValues } from "@/lib/inventory";

type FilterSidebarProps = {
  cars: Car[];
  filters: InventoryFilters;
  onChange: (next: InventoryFilters) => void;
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-extrabold uppercase tracking-wider text-steel">{label}</span>
      {children}
    </label>
  );
}

export function FilterSidebar({ cars, filters, onChange }: FilterSidebarProps) {
  const update = (key: keyof InventoryFilters, value: string) =>
    onChange({ ...filters, [key]: value });

  const inputClass =
    "h-11 min-w-0 w-full rounded border border-line bg-white px-3 text-sm font-semibold text-ink outline-none focus:border-gold";

  return (
    <aside className="rounded-lg border border-line bg-white p-5 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-black text-ink">Filters</h2>
        <button
          type="button"
          onClick={() =>
            onChange({
              query: "",
              brand: "",
              model: "",
              minPrice: "",
              maxPrice: "",
              minYear: "",
              maxYear: "",
              maxMileage: "",
              minPower: "",
              maxPower: "",
              fuel: "",
              transmission: "",
              bodyType: "",
              option: "",
            })
          }
          className="text-xs font-extrabold text-gold"
        >
          Wissen
        </button>
      </div>

      <div className="grid gap-4">
        <Field label="Merk">
          <select className={inputClass} value={filters.brand} onChange={(event) => update("brand", event.target.value)}>
            <option value="">Alle merken</option>
            {uniqueValues(cars, "brand").map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </Field>
        <Field label="Model">
          <select className={inputClass} value={filters.model} onChange={(event) => update("model", event.target.value)}>
            <option value="">Alle modellen</option>
            {uniqueValues(cars, "model").map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </Field>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
          <Field label="Prijs min">
            <input className={inputClass} type="number" value={filters.minPrice} onChange={(event) => update("minPrice", event.target.value)} />
          </Field>
          <Field label="Prijs max">
            <input className={inputClass} type="number" value={filters.maxPrice} onChange={(event) => update("maxPrice", event.target.value)} />
          </Field>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
          <Field label="Bouwjaar min">
            <input className={inputClass} type="number" value={filters.minYear} onChange={(event) => update("minYear", event.target.value)} />
          </Field>
          <Field label="Bouwjaar max">
            <input className={inputClass} type="number" value={filters.maxYear} onChange={(event) => update("maxYear", event.target.value)} />
          </Field>
        </div>
        <Field label="Km-stand max">
          <input className={inputClass} type="number" value={filters.maxMileage} onChange={(event) => update("maxMileage", event.target.value)} />
        </Field>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
          <Field label="Vermogen min">
            <input className={inputClass} type="number" value={filters.minPower} onChange={(event) => update("minPower", event.target.value)} />
          </Field>
          <Field label="Vermogen max">
            <input className={inputClass} type="number" value={filters.maxPower} onChange={(event) => update("maxPower", event.target.value)} />
          </Field>
        </div>
        <Field label="Brandstof">
          <select className={inputClass} value={filters.fuel} onChange={(event) => update("fuel", event.target.value)}>
            <option value="">Alle brandstoffen</option>
            {uniqueValues(cars, "fuel").map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </Field>
        <Field label="Transmissie">
          <select className={inputClass} value={filters.transmission} onChange={(event) => update("transmission", event.target.value)}>
            <option value="">Alle transmissies</option>
            {uniqueValues(cars, "transmission").map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </Field>
        <Field label="Carrosserie">
          <select className={inputClass} value={filters.bodyType} onChange={(event) => update("bodyType", event.target.value)}>
            <option value="">Alle carrosserieen</option>
            {uniqueValues(cars, "bodyType").map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </Field>
        <Field label="Opties">
          <input
            className={inputClass}
            placeholder="Bijv. Stage 1"
            value={filters.option}
            onChange={(event) => update("option", event.target.value)}
          />
        </Field>
      </div>
    </aside>
  );
}
