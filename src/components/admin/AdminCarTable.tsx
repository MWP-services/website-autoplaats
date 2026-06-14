"use client";

import Link from "next/link";
import { useState } from "react";
import type { Car } from "@/data/cars";
import { carStatusLabel, formatMileage, formatPrice } from "@/lib/format";
import { StatusBadge } from "@/components/public/StatusBadge";

export function AdminCarTable({ cars }: { cars: Car[] }) {
  const [rows, setRows] = useState(cars);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-card">
      <div className="flex flex-col justify-between gap-4 border-b border-line p-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-black text-ink">Auto’s</h2>
          <p className="mt-1 text-sm text-slate-600">Beheer de voorraad die op de website getoond wordt.</p>
        </div>
        <Link
          href="/admin/autos/nieuw"
          className="inline-flex h-12 items-center justify-center rounded bg-night px-5 text-sm font-extrabold text-white"
        >
          Auto toevoegen
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-mist text-xs font-extrabold uppercase tracking-wider text-steel">
            <tr>
              <th className="px-5 py-4">Auto</th>
              <th className="px-5 py-4">Prijs</th>
              <th className="px-5 py-4">Km-stand</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Acties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((car) => (
              <tr key={car.id}>
                <td className="px-5 py-4">
                  <p className="font-black text-ink">{car.title}</p>
                  <p className="text-slate-600">{car.licensePlate}</p>
                </td>
                <td className="px-5 py-4 font-bold">{formatPrice(car.price)}</td>
                <td className="px-5 py-4 font-bold">{formatMileage(car.mileage)}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={car.status} label={carStatusLabel(car.status)} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      className="rounded border border-line px-3 py-2 font-extrabold text-ink"
                      href={`/admin/autos/${car.id}/bewerken`}
                    >
                      Bewerken
                    </Link>
                    <button
                      className="rounded border border-line px-3 py-2 font-extrabold text-ink"
                      onClick={() =>
                        setRows((current) =>
                          current.map((row) => (row.id === car.id ? { ...row, status: "sold" } : row)),
                        )
                      }
                    >
                      Op verkocht zetten
                    </button>
                    <button
                      className="rounded border border-red-200 px-3 py-2 font-extrabold text-red-700"
                      onClick={() => setRows((current) => current.filter((row) => row.id !== car.id))}
                    >
                      Verwijderen
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
