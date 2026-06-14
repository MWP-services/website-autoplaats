"use client";

import type { CarStatus } from "@/data/cars";

export function StatusSelector({
  value,
  onChange,
}: {
  value: CarStatus;
  onChange: (status: CarStatus) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        ["draft", "Concept"],
        ["published", "Gepubliceerd"],
        ["sold", "Verkocht"],
      ].map(([status, label]) => (
        <button
          key={status}
          type="button"
          onClick={() => onChange(status as CarStatus)}
          className={`rounded border px-3 py-3 text-sm font-extrabold ${
            value === status
              ? "border-night bg-night text-white"
              : "border-line bg-white text-ink hover:border-gold"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
