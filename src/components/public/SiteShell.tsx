import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { MobileStickyCTA } from "@/components/public/MobileStickyCTA";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pb-20 md:pb-0">
        <main>{children}</main>
        <Footer />
      </div>
      <MobileStickyCTA />
    </>
  );
}
