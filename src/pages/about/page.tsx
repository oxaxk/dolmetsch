// File: src/pages/about/page.tsx
// no React type import needed
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        {/* Hero */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]">
              Über uns
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight text-[#0F172A]">
              Wir helfen Ihnen, die Sprachbarriere zu überbrücken.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl">
              Jachvadze Dolmetscherdienst steht für professionelle, diskrete und zuverlässige
              Sprachmittlung im Raum Berlin-Brandenburg. Unser Ziel ist es, Menschen, Behörden
              und Unternehmen miteinander zu verbinden – unabhängig von ihrer Muttersprache.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="tel:+4915206746382"
                size="lg"
                className="text-sm px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Jetzt anrufen
              </Button>
              <Button
                href="/kontakt"
                size="lg"
                className="text-sm px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </section>

        {/* Wer sind wir */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F172A]">
              Wer sind wir?
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-4 text-[#0F172A]/85">
              Wir sind ein Dolmetscherbüro mit langjähriger Erfahrung. Unser Team besteht aus
              Giorgi Jachvadze sowie qualifizierten Kolleginnen und Kollegen mit unterschiedlichen
              Sprachkenntnissen.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-4 text-[#0F172A]/85">
              Wir übernehmen Aufträge für Verwaltungsbehörden im Raum Berlin-Brandenburg,
              begleitendes Dolmetschen bei Mandantengesprächen für Rechtsanwälte, Aufträge für
              Gerichte sowie für medizinische Einrichtungen.
            </p>
          </div>
        </section>

        {/* Qualität */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F172A]">
              Erfahren & Qualifiziert
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#0F172A]/85">
              Professionalität und Qualität garantieren wir auf hohem Niveau. Unser Team
              erfahrener Dolmetscher:innen und Übersetzer:innen deckt Ihre sprachlichen
              Bedürfnisse zuverlässig ab – präzise, diskret und termingerecht.
            </p>
          </div>
        </section>

        {/* Staatliche Einrichtungen */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F172A]">
              Staatliche Einrichtungen
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#0F172A]/85">
              Für eine Reihe staatlicher Einrichtungen sind wir als Dolmetscher:innen tätig.
              Unsere Arbeit ermöglicht eine effektive Kommunikation zwischen öffentlichen
              Institutionen und Bürgerinnen und Bürgern und fördert Vertrauen sowie
              gegenseitiges Verständnis.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0F172A]">
              Haben Sie Fragen oder benötigen Sie Unterstützung?
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-[#0F172A]/85">
              Kontaktieren Sie uns telefonisch oder über das Kontaktformular. Wir beraten
              Sie gerne persönlich.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="tel:+4915206746382"
                size="lg"
                className="text-sm px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Jetzt anrufen
              </Button>
              <Button
                href="/kontakt"
                size="lg"
                className="text-sm px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Kontaktseite öffnen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;