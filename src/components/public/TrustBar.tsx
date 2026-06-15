const trustItems = [
  "Direct contact",
  "Bezichtiging op afspraak",
  "Actueel aanbod",
  "Sportieve occasions",
  "Duidelijke presentatie",
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-page grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm font-extrabold text-ink">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-gold text-white">✓</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
