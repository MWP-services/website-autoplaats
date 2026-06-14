import { dealerConfig } from "@/data/dealerConfig";
import { getWhatsappHref } from "@/lib/format";
import { ContactCTA } from "@/components/public/ContactCTA";
import { GoogleMapsSection } from "@/components/public/GoogleMapsSection";
import { SiteShell } from "@/components/public/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <h1 className="text-4xl font-black text-ink lg:text-5xl">Contact met Autoplaats</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Neem contact op voor vragen over het aanbod of om een bezichtiging op afspraak te plannen.
          </p>
        </div>
      </section>
      <section className="bg-mist pb-14">
        <div className="container-page grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-line bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-ink">{dealerConfig.name}</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-extrabold text-steel">Telefoon</dt>
                <dd className="mt-1 font-bold text-ink">{dealerConfig.phone}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-steel">WhatsApp</dt>
                <dd className="mt-1 font-bold text-ink">{dealerConfig.whatsapp}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-steel">E-mail</dt>
                <dd className="mt-1 font-bold text-ink">{dealerConfig.email}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-steel">Adres</dt>
                <dd className="mt-1 font-bold text-ink">{dealerConfig.address}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-steel">Openingstijden</dt>
                <dd className="mt-1 grid gap-1 font-bold text-ink">
                  {dealerConfig.openingHours.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-extrabold text-steel">TikTok</dt>
                <dd className="mt-1">
                  <a className="font-extrabold text-navy" href={dealerConfig.tiktokUrl} target="_blank" rel="noreferrer">
                    {dealerConfig.tiktokHandle}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={getWhatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gold px-5 text-sm font-extrabold text-night"
            >
              WhatsApp direct
            </a>
          </aside>
          <GoogleMapsSection />
        </div>
      </section>
      <ContactCTA />
    </SiteShell>
  );
}
