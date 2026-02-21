export default function Footer() {
  return (
    <footer className="py-14 bg-[#020617] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <a href="/" className="mb-4 flex flex-col items-center md:items-start gap-1">
              <span
                className="text-xl md:text-[1.7rem] font-semibold tracking-[0.28em] uppercase"
                style={{ fontFamily: 'Inter, sans-serif', color: '#F9FAFB' }}
              >
                JACHVADZE
              </span>
              <span
                className="text-[0.65rem] md:text-[0.75rem] tracking-[0.22em] uppercase text-sky-300/90"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                DOLMETSCHER- &amp; ÜBERSETZUNGSDIENST
              </span>
            </a>
            <p className="text-slate-300/80 mb-6 max-w-md text-sm md:text-base">
              Jachvadze Dolmetscherdienst – Ihr Ansprechpartner für Dolmetsch- und Übersetzungsangelegenheiten in Frankfurt (Oder), Berlin und Brandenburg.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="tel:+4915206746382"
                aria-label="Telefon anrufen"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-sky-400/70 shadow-[0_12px_32px_rgba(15,23,42,0.8)] hover:bg-[#1E293B] hover:border-sky-300 transition-colors"
              >
                <i className="ri-phone-line text-sky-300 text-lg"></i>
              </a>
              <a 
                href="mailto:giorgi.dolmetscher@gmail.com"
                aria-label="E-Mail schreiben"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-slate-500/80 shadow-[0_12px_32px_rgba(15,23,42,0.8)] hover:bg-[#1E293B] hover:border-sky-300 transition-colors"
              >
                <i className="ri-mail-line text-slate-100 text-lg"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="font-semibold text-xl md:text-2xl mb-4"
              style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/ueber-uns" className="text-slate-400 hover:text-sky-300 transition-colors">Über uns</a></li>
              <li><a href="/bewerbung" className="text-slate-400 hover:text-sky-300 transition-colors">Bewerbung</a></li>
              <li><a href="/kontakt" className="text-slate-400 hover:text-sky-300 transition-colors">Kontakt</a></li>
              <li><a href="/impressum" className="text-slate-400 hover:text-sky-300 transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-slate-400 hover:text-sky-300 transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="text-slate-400 hover:text-sky-300 transition-colors">AGB</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-sm md:text-base">
            <h4
              className="font-semibold text-xl md:text-2xl mb-4"
              style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
            >
              Kontaktinformationen
            </h4>

            <div className="space-y-3 text-slate-400">
              <div>
                <p className="font-medium text-slate-200">Adresse</p>
                <p>Logenstraße 2 / 001</p>
                <p>15230 Frankfurt (Oder)</p>
              </div>

              <div>
                <p className="font-medium text-slate-200">Kontakt</p>
                <p>giorgi.dolmetscher@gmail.com</p>
                <p>Tel.: +49 (0) 152 06746382</p>
                <p>+49 (0) 176 43453830</p>
              </div>

              <div>
                <p className="font-medium text-slate-200">Öffnungszeiten</p>
                <p>Montag – Sonntag</p>
                <p>Rund um die Uhr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
            © 2025 Jachvadze Dolmetscherdienst. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
