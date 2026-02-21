import { type FC } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

const services = [
  {
    icon: 'ri-briefcase-4-line',
    title: 'Für Unternehmen',
    description:
      'Dolmetsch- und Übersetzungsdienste für Unternehmen, internationale Mandate und Geschäftstermine. Wir unterstützen Sie bei professioneller und klarer Kommunikation.',
  },
  {
    icon: 'ri-government-line',
    title: 'Für Behörden',
    description:
      'Dolmetschen für Exekutivbehörden, Justizbehörden und Sozialbehörden. Auch kurzfristige Termine sind telefonisch möglich.',
  },
  {
    icon: 'ri-hospital-line',
    title: 'Medizinische Einrichtungen',
    description:
      'Sprachmittlung bei Arztterminen, Klinikaufenthalten und medizinischen Gesprächen – präzise, diskret und zuverlässig.',
  },
  {
    icon: 'ri-scales-3-line',
    title: 'Gerichte & Kanzleien',
    description:
      'Begleitendes Dolmetschen bei Gerichtsverhandlungen und Mandantengesprächen für Rechtsanwälte im Raum Berlin-Brandenburg.',
  },
  {
    icon: 'ri-user-3-line',
    title: 'Private Angelegenheiten',
    description:
      'Begleitung bei Behördengängen, persönlichen Terminen und individuellen Anliegen.',
  },
  {
    icon: 'ri-translate-2',
    title: 'Übersetzungen',
    description:
      'Schriftliche Übersetzungen verschiedener Dokumente – sorgfältig, vertraulich und termingerecht.',
  },
];

const LeistungenPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        {/* Hero / Intro */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Leistungen
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
            >
              Professionelle Dolmetsch- und Übersetzungsdienste
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Wir sind ein Dolmetscher- und Übersetzungsdienst mit Schwerpunkt Berlin-Brandenburg. Unser Team unterstützt Unternehmen, Behörden und Privatpersonen bei der professionellen Überwindung von Sprachbarrieren.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Unser Fokus liegt auf präziser, neutraler und diskreter Sprachmittlung – sowohl mündlich als auch schriftlich. Sie beauftragen uns direkt und erhalten eine transparente Rückmeldung zu Ablauf und Kosten.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="tel:+4915206746382"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-phone-line mr-3 text-xl" />
                Jetzt anrufen
              </Button>
              <Button
                href="https://wa.me/4915206746382"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-whatsapp-line mr-3 text-xl" />
                WhatsApp schreiben
              </Button>
            </div>
          </div>
        </section>

        {/* Leistungsübersicht */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
              >
                Unsere Dienstleistungen
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed text-[#0F172A]/80"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Wir unterstützen Sie professionell in unterschiedlichen Einsatzbereichen – von behördlichen Terminen bis hin zu geschäftlichen und privaten Anliegen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col h-full rounded-3xl bg-[#0F3D8C]/95 border border-white/20 shadow-[0_18px_50px_rgba(15,61,140,0.65)] px-6 py-6 md:px-7 md:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,61,140,0.9)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                      <i className={`${service.icon} text-xl text-white`} />
                    </div>
                    <h3
                      className="text-sm md:text-base font-semibold text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm md:text-base leading-relaxed text-white/85"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeistungenPage;