import { useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1.png',
    alt: 'Dolmetscherdienst – professionelle Sprachmittlung im Einsatz'
  },
  {
    src: '/images/hero/2.png',
    alt: 'Dolmetscher bei einem Termin mit Behörden'
  },
  {
    src: '/images/hero/3.png',
    alt: 'Professionelle Übersetzung und Dolmetschleistung'
  },
  {
    src: '/images/hero/4.png',
    alt: 'Dolmetscherdienst in Berlin-Brandenburg'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (!interval) {
        interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
      }
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        start();
      } else {
        stop();
      }
    };

    start();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-stretch">
          {/* Left: Card with content */}
          <div className="relative">
            <div className="absolute -top-8 -left-10 h-20 w-20 rounded-full bg-sky-100/70 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-16 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl pointer-events-none" />

            <div className="relative h-full rounded-3xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-6 sm:px-8 py-7 sm:py-8 flex flex-col justify-between">
              <div>
                <p
                  className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-[0.7rem] tracking-[0.22em] uppercase text-[#0F3D8C] mb-5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Dolmetscherdienst Frankfurt (Oder) & Berlin
                </p>

                <h1
                  className="text-3xl sm:text-4xl lg:text-[2.4rem] font-semibold leading-tight mb-3 text-slate-900"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Dolmetscherdienst für Behörden, Unternehmen und Privatpersonen
                  <span className="block text-[1.05rem] sm:text-[1.1rem] font-normal text-slate-600 mt-2">
                    Professionelles Dolmetschen für Gerichte, medizinische Termine und behördliche Anliegen in Frankfurt (Oder), Berlin und Brandenburg.
                  </span>
                </h1>

                <p
                  className="mt-4 text-base sm:text-[1.02rem] leading-relaxed text-slate-700 max-w-xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Verlässliche Sprachmittlung bei Gerichts- und Behördenterminen, medizinischen Gesprächen sowie geschäftlichen Anlässen. Diskret, strukturiert und terminsicher.
                </p>

                <ul className="mt-6 space-y-3 text-sm sm:text-[0.95rem] text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>Dolmetscheinsätze bei Behörden und Gerichten</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>Begleitung bei medizinischen Terminen</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>Vertrauliche und DSGVO-konforme Kommunikation</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8">
                <Button
                  href="/kontakt"
                  size="lg"
                  className="text-sm px-8 py-3 rounded-full bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 hover:border-slate-800 tracking-[0.12em] uppercase"
                >
                  Anfrage per Formular stellen
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual column mit Carousel */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-y-4 right-0 w-full rounded-3xl bg-gradient-to-b from-[#0F3D8C] via-sky-700 to-sky-500 opacity-90 blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-white/40 shadow-[0_22px_60px_rgba(15,23,42,0.75)] bg-slate-900/95 backdrop-blur-xl">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    decoding="async"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Vorheriges Bild"
                  className="h-9 w-9 rounded-full bg-white/95 text-[#0F3D8C] flex items-center justify-center text-lg shadow-[0_10px_25px_rgba(15,23,42,0.35)] border border-slate-200 hover:bg-sky-50 hover:text-sky-800"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Bild ${idx + 1} anzeigen`}
                      className={`h-2.5 w-2.5 rounded-full border ${
                        idx === currentIndex
                          ? 'bg-white border-white'
                          : 'bg-white/25 border-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Nächstes Bild"
                  className="h-9 w-9 rounded-full bg-white/95 text-[#0F3D8C] flex items-center justify-center text-lg shadow-[0_10px_25px_rgba(15,23,42,0.35)] border border-slate-200 hover:bg-sky-50 hover:text-sky-800"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}