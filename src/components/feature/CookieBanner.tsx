import { useEffect, useState } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'jachvadze-cookie-consent-v1';

function getInitialStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'unset';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      return stored as ConsentStatus;
    }
  } catch {
    // Fallback, wenn localStorage geblockt ist
  }
  return 'unset';
}

function loadDesignAssets() {
  if (typeof window === 'undefined') return;

  if ((window as any).designAssetsLoaded) {
    return;
  }

  (window as any).designAssetsLoaded = true;

  const links = [
    {
      id: 'fa-css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    },
    {
      id: 'ri-css',
      href: 'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css',
    },
  ];

  links.forEach((link) => {
    if (!document.head.querySelector(`link[data-id="${link.id}"]`)) {
      const el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = link.href;
      el.setAttribute('data-id', link.id);
      document.head.appendChild(el);
    }
  });
}

export default function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus>('unset');
  const isVisible = status === 'unset';

  useEffect(() => {
    const initial = getInitialStatus();
    setStatus(initial);
    if (initial === 'accepted') {
      loadDesignAssets();
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
      } catch {
        // ignore storage errors
      }
    }
    setStatus('accepted');
    loadDesignAssets();
  };

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'rejected');
      } catch {
        // ignore storage errors
      }
    }
    setStatus('rejected');
    // Hier sicherstellen: keine optionalen Cookies / Tracker laden.
  };

  // Wenn noch keine Entscheidung getroffen wurde: großer Overlay-Dialog
  if (isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60">
        <div className="w-full sm:max-w-xl mx-4 mb-4 sm:mb-0 rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.35)] p-5 sm:p-6">
          <h2
            className="text-base sm:text-lg font-semibold mb-2"
            style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
          >
            Cookies &amp; Datenschutz
          </h2>
          <p
            className="text-xs sm:text-sm text-[#0F172A]/80 mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Wir verwenden technisch notwendige Cookies zur sicheren Bereitstellung dieser Website. Externe Design- und Icon-Bibliotheken werden nur nach Ihrer ausdrücklichen Einwilligung geladen. Weitere Informationen finden Sie in unserer&nbsp;
            <a href="/datenschutz" className="underline hover:no-underline">
              Datenschutzerklärung
            </a>
            &nbsp;und in den&nbsp;
            <a href="/cookie" className="underline hover:no-underline">
              Cookie-Einstellungen
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#0F3D8C]/30 text-[#0F3D8C] hover:bg-[#0F3D8C]/5 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nur notwendige Cookies
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Nach Entscheidung: kleines Widget unten rechts
  return (
    <button
      type="button"
      onClick={() => setStatus('unset')}
      className="fixed bottom-4 right-4 z-[9998] px-4 py-2.5 rounded-full bg-[#0F3D8C] text-white text-xs sm:text-sm font-medium shadow-[0_10px_30px_rgba(15,61,140,0.45)] hover:bg-[#0C316F] transition-colors"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Cookie-Einstellungen
    </button>
  );
}