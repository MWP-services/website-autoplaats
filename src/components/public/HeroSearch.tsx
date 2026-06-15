import { SearchIcon } from "@/components/ui/Icons";

export function HeroSearch() {
  return (
    <form action="/aanbod" className="mt-8 grid gap-3 rounded bg-white p-3 shadow-card ring-1 ring-white/10 sm:grid-cols-[1fr_auto]">
      <label className="relative block">
        <span className="sr-only">Zoek in aanbod</span>
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel" />
        <input
          name="zoek"
          placeholder="Zoek merk, model of kenteken"
          className="h-14 w-full rounded border border-line bg-white pl-12 pr-4 text-base font-semibold text-ink outline-none focus:border-gold"
        />
      </label>
      <button className="h-14 rounded bg-gold px-6 text-sm font-extrabold text-white transition hover:bg-ember">
        Zoeken
      </button>
    </form>
  );
}
