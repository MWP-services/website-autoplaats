"use client";

import { useState } from "react";
import type { Car, CarStatus } from "@/data/cars";
import { StatusSelector } from "@/components/admin/StatusSelector";
import { ImageUploader } from "@/components/admin/ImageUploader";

const steps = ["Foto's", "Basisgegevens", "Specificaties", "Publiceren"];

function TextField({
  label,
  helper,
  placeholder,
  type = "text",
  defaultValue,
}: {
  label: string;
  helper?: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string | number | null;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-extrabold text-ink">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue ?? ""}
        placeholder={placeholder}
        className="h-12 rounded border border-line bg-white px-4 text-sm font-semibold outline-none focus:border-gold"
      />
      {helper ? <span className="text-xs font-semibold text-slate-500">{helper}</span> : null}
    </label>
  );
}

export function CarForm({ car }: { car?: Car }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<CarStatus>(car?.status ?? "draft");
  const [featured, setFeatured] = useState(car?.featured ?? false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="rounded-lg border border-line bg-white p-5 shadow-card lg:p-7">
      <div className="mb-7 grid gap-3 sm:grid-cols-4">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setStep(index)}
            className={`rounded border px-4 py-3 text-sm font-extrabold ${
              step === index ? "border-night bg-night text-white" : "border-line bg-mist text-ink"
            }`}
          >
            Stap {index + 1}: {label}
          </button>
        ))}
      </div>

      {saved ? (
        <div className="mb-5 rounded border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
          De auto is lokaal opgeslagen voor deze demo. Koppel Supabase om dit permanent te bewaren.
        </div>
      ) : null}

      <form
        className="grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        {step === 0 ? (
          <section className="grid gap-4">
            <h2 className="text-2xl font-black text-ink">Foto&apos;s</h2>
            <p className="text-sm font-semibold text-slate-600">
              Upload duidelijke foto&apos;s. De eerste foto wordt gebruikt als hoofdfoto.
            </p>
            <ImageUploader existingImages={car?.images} />
          </section>
        ) : null}

        {step === 1 ? (
          <section className="grid gap-4">
            <h2 className="text-2xl font-black text-ink">Basisgegevens</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="Titel" helper="Deze titel wordt getoond op de aanbodpagina" defaultValue={car?.title} />
              <TextField label="Merk" defaultValue={car?.brand} />
              <TextField label="Model" defaultValue={car?.model} />
              <TextField label="Uitvoering" defaultValue={car?.version} />
              <TextField label="Prijs" type="number" helper="Laat prijs leeg als je 'Prijs op aanvraag' wilt tonen" defaultValue={car?.price} />
              <TextField label="Bouwjaar" type="number" defaultValue={car?.year} />
              <TextField label="Kilometerstand" type="number" defaultValue={car?.mileage} />
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="grid gap-4">
            <h2 className="text-2xl font-black text-ink">Specificaties</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="Brandstof" defaultValue={car?.fuel} />
              <TextField label="Transmissie" placeholder="Laat leeg als nog onbekend" defaultValue={car?.transmission} />
              <TextField label="Vermogen" type="number" defaultValue={car?.powerHp} />
              <TextField label="Carrosserie" defaultValue={car?.bodyType} />
              <TextField label="Kleur" defaultValue={car?.color} />
              <TextField label="APK" defaultValue={car?.apk} />
              <TextField label="NAP" placeholder="Nog niet ingevuld" defaultValue={car?.nap} />
              <TextField label="Opties" helper="Scheid opties met komma's" placeholder="Bijv. airco, cruise control" />
            </div>
          </section>
        ) : null}

        {step === 3 ? (
          <section className="grid gap-5">
            <h2 className="text-2xl font-black text-ink">Publiceren</h2>
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-ink">Beschrijving</span>
              <textarea
                defaultValue={car?.description}
                rows={6}
                className="rounded border border-line bg-white p-4 text-sm font-semibold outline-none focus:border-gold"
              />
            </label>
            <div>
              <span className="mb-2 block text-sm font-extrabold text-ink">Status</span>
              <StatusSelector value={status} onChange={setStatus} />
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Zet de auto op gepubliceerd om hem zichtbaar te maken op de website.
              </p>
            </div>
            <label className="flex items-center gap-3 rounded border border-line bg-mist p-4 text-sm font-extrabold text-ink">
              <input
                type="checkbox"
                checked={featured}
                onChange={(event) => setFeatured(event.target.checked)}
                className="h-5 w-5 accent-[#f05a28]"
              />
              Uitgelicht tonen op de homepagina
            </label>
            <div className="rounded border border-line bg-mist p-4">
              <p className="text-sm font-black text-ink">Preview</p>
              <p className="mt-1 text-sm text-slate-600">
                Controleer titel, prijs, status en foto&apos;s voordat je publiceert.
              </p>
            </div>
          </section>
        ) : null}

        <div className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            className="h-12 rounded border border-line px-5 text-sm font-extrabold text-ink disabled:opacity-40"
            disabled={step === 0}
          >
            Vorige stap
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}
              className="h-12 rounded bg-night px-5 text-sm font-extrabold text-white"
            >
              Volgende stap
            </button>
          ) : (
            <button className="h-12 rounded bg-gold px-5 text-sm font-extrabold text-white">
              Publiceren
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
