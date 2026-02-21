export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* LEFT: TITLE + COPY */}
          <div>
            <p
              className="text-[0.7rem] tracking-[0.24em] uppercase mb-3 text-sky-300/90"
            >
              Erfahrung & Verlässlichkeit
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-semibold mb-4 text-slate-50"
            >
              Verlässlicher Dolmetscherdienst in Frankfurt (Oder) & Berlin
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-slate-300/90 mb-6"
            >
              Professionelle Sprachmittlung für Gerichte, Behörden, medizinische Einrichtungen und Unternehmen. Ziel ist eine klare, strukturierte und rechtssichere Verständigung.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-slate-300/90">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Dolmetscheinsätze bei Behörden und Gerichten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Begleitung bei medizinischen Terminen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Vertrauliche Behandlung aller Informationen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Einsatz im Raum Frankfurt (Oder), Berlin und Brandenburg</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: HIGHLIGHT-CARD */}
          <div className="rounded-3xl border border-sky-400/40 bg-slate-900/80 px-6 py-7 md:px-7 md:py-8 shadow-[0_22px_60px_rgba(15,23,42,0.95)]">
            <p
              className="text-[0.65rem] tracking-[0.24em] uppercase text-sky-300/90 mb-3"
            >
              Leistungen
            </p>
            <div className="space-y-5">
              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3 className="text-sm md:text-base font-semibold mb-1 text-slate-50">
                  Behörden & Gerichte
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-300/90">
                  Dolmetschen bei Anhörungen, Terminen und offiziellen Verfahren.
                </p>
              </div>

              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3 className="text-sm md:text-base font-semibold mb-1 text-slate-50">
                  Medizinisches Dolmetschen
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-300/90">
                  Begleitung bei Arztterminen und medizinischen Gesprächen.
                </p>
              </div>

              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3 className="text-sm md:text-base font-semibold mb-1 text-slate-50">
                  Unternehmen & Private Anliegen
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-300/90">
                  Unterstützung bei geschäftlichen Terminen sowie bei behördlichen und persönlichen Angelegenheiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
