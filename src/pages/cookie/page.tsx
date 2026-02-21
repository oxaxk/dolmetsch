// File: src/pages/cookie/page.tsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'cookie-consent-v1';

const CookieSettingsPage: React.FC = () => {
  const [status, setStatus] = useState<ConsentStatus>('unset');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      setStatus(stored);
    } else {
      setStatus('unset');
    }
  }, []);

  const handleAccept = () => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(STORAGE_KEY, 'accepted');
    setStatus('accepted');
  };

  const handleReject = () => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(STORAGE_KEY, 'rejected');
    setStatus('rejected');
  };

  const handleReset = () => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.removeItem(STORAGE_KEY);
    setStatus('unset');
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'accepted':
        return 'Alle Cookies akzeptiert (Session)';
      case 'rejected':
        return 'Nur notwendige Cookies (Session)';
      default:
        return 'Noch keine Entscheidung für diese Session gespeichert.';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Cookies &amp; Tracking
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F172A' }}
            >
              Cookie-Einstellungen
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Hier kannst du deine Entscheidung zur Verwendung von Cookies für diese Browser-Session
              anpassen. Technisch notwendige Cookies verwenden wir, um die Seite sicher zu
              betreiben. Optionale Cookies und vergleichbare Technologien für Statistik oder Marketing – z.&nbsp;B.
              das Nachladen externer Ressourcen wie Icon-Fonts (z. B. Remix Icon) – setzen wir nur,
              wenn du zustimmst.
            </p>

            <div className="mb-8 rounded-3xl border border-[#0F3D8C]/15 bg-white px-6 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
              <h2
                className="text-sm md:text-base font-medium mb-2"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F172A' }}
              >
                Aktueller Status
              </h2>
              <p
                className="text-sm md:text-base text-[#0F172A]/85"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                {getStatusLabel()}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Nur notwendige Cookies
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85 mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Es werden nur Cookies eingesetzt, die für den technischen Betrieb der Seite
                  erforderlich sind. Keine Statistik- oder Marketing-Cookies.
                </p>
                <Button
                  size="sm"
                  onClick={handleReject}
                  className="w-full text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase px-4 py-2.5 rounded-full"
                >
                  Auswahl speichern
                </Button>
              </div>

              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Alle Cookies akzeptieren
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85 mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Optional erlaubst du das Nachladen externer Ressourcen, sofern diese technisch eingebunden sind.
                </p>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="w-full text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase px-4 py-2.5 rounded-full"
                >
                  Alle akzeptieren
                </Button>
              </div>

              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Entscheidung zurücksetzen
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85 mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Löscht die aktuelle Entscheidung für diese Session. Beim nächsten Seitenaufruf
                  erscheint das Cookie-Banner erneut.
                </p>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleReset}
                  className="w-full text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase px-4 py-2.5 rounded-full"
                >
                  Entscheidung löschen
                </Button>
              </div>
            </div>

            <p
              className="mt-8 text-xs sm:text-sm text-[#0F172A]/70"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Hinweis: Diese Seite ersetzt keine rechtliche Beratung. Für individuelle Anforderungen
              (z. B. bei komplexen Tracking-Setups, E-Commerce oder mehreren Drittanbietern) kann es
              sinnvoll sein, eine auf IT-Recht spezialisierte Kanzlei einzubeziehen.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookieSettingsPage;
