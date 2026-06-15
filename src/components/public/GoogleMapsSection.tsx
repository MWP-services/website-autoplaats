import { dealerConfig } from "@/data/dealerConfig";

export function GoogleMapsSection() {
  const hasMapsUrl = dealerConfig.googleMapsUrl.startsWith("http");
  const mapsHref = hasMapsUrl ? dealerConfig.googleMapsUrl : "#";

  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-card">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black text-ink">Locatie</h2>
          <p className="mt-1 text-sm font-semibold text-steel">{dealerConfig.address}</p>
        </div>
        <a
          href={mapsHref}
          target={hasMapsUrl ? "_blank" : undefined}
          rel={hasMapsUrl ? "noreferrer" : undefined}
          aria-disabled={!hasMapsUrl}
          className="inline-flex h-12 items-center justify-center rounded bg-night px-5 text-sm font-extrabold text-white"
        >
          Navigeer via Google Maps
        </a>
      </div>
      <div className="grid aspect-[16/9] place-items-center rounded bg-slate-200 text-center text-sm font-bold text-slate-600">
        Google Maps embed placeholder
        <br />
        {dealerConfig.googleMapsUrl}
      </div>
    </section>
  );
}
