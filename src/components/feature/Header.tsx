import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = 'tel:+4915206746382';
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentY = window.scrollY || window.pageYOffset;
      const lastY = lastScrollYRef.current;

      const THRESHOLD = 16;

      if (Math.abs(currentY - lastY) < THRESHOLD) {
        return;
      }

      if (currentY > lastY && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#1D4ED8]/60 bg-[#020617]/90 backdrop-blur-xl shadow-[0_14px_45px_rgba(15,23,42,0.85)] px-4 py-3 md:px-6 md:py-4">
          {/* LEFT — LOGO + TAGLINE */}
          <a href="/" className="cursor-pointer flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span
                className="text-lg md:text-[1.6rem] font-semibold tracking-[0.28em]"
                style={{ fontFamily: 'Inter, sans-serif', color: '#F9FAFB' }}
              >
                JACHVADZE
              </span>
              <span
                className="mt-0.5 text-[0.6rem] md:text-[0.7rem] tracking-[0.22em] uppercase text-sky-300/90"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                DOLMETSCHER- & ÜBERSETZUNGSDIENST
              </span>
            </div>
          </a>

          {/* DESKTOP NAV + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
  <a href="/ueber-uns" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    Über uns
  </a>
  <a href="/bewerbung" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    Bewerbung
  </a>
  <a href="/kontakt" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    Kontakt
  </a>
  <a href="/impressum" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    Impressum
  </a>
  <a href="/datenschutz" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    Datenschutz
  </a>
  <a href="/agb" className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-slate-100/80 hover:text-sky-300 hover:underline underline-offset-4 transition-colors">
    AGB
  </a>
</nav>

            <button
              type="button"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/80 bg-[#1D4ED8] text-slate-50 px-5 py-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase shadow-[0_12px_30px_rgba(37,99,235,0.65)] hover:bg-[#2563EB] hover:border-sky-300 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <i className="ri-phone-line text-base" />
              Jetzt anrufen
            </button>
          </div>

          {/* MOBILE ACTIONS: CALL + MENU */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={handleContactClick}
              aria-label="Jetzt anrufen"
              className="inline-flex h-9 px-3 items-center justify-center gap-1 rounded-full bg-[#1D4ED8] text-slate-50 border border-sky-400/80 text-[0.65rem] font-semibold tracking-[0.18em] uppercase shadow-[0_10px_25px_rgba(37,99,235,0.65)] hover:bg-[#2563EB] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <i className="ri-phone-line text-sm" />
              24/7 Hotline
            </button>

            <a
              href="/bewerbung"
              aria-label="Bewerbung"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-100/60 bg-slate-900/60 text-slate-100 hover:border-sky-300 hover:text-sky-300 transition-colors"
            >
              <i className="ri-user-add-line text-base" />
            </a>

            <button
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-100/60 bg-slate-900/60 hover:border-sky-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menü"
            >
              <span className="relative flex h-5 w-6 items-center justify-center">
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-slate-100 transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0'
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-slate-100 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 rounded-full bg-slate-100 transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden px-4 pb-3 overflow-hidden transition-all duration-250 ease-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mt-2 rounded-2xl border border-slate-700/80 bg-slate-950/95 backdrop-blur-xl px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
            <div className="flex flex-col space-y-4">
              <a href="/ueber-uns" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  Über uns
</a>
<a href="/bewerbung" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  Bewerbung
</a>
<a href="/kontakt" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  Kontakt
</a>
<a href="/impressum" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  Impressum
</a>
<a href="/datenschutz" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  Datenschutz
</a>
<a href="/agb" className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-100/90 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
  AGB
</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
