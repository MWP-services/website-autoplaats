const trustItems = [
  "Direct contact via WhatsApp",
  "Bezichtiging op afspraak",
  "Actueel aanbod",
  "Professionele presentatie",
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="container-page grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm font-extrabold text-ink">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-night text-white">✓</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
