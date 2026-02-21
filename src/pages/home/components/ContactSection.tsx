import { useState, type FormEvent } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-center"
          style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
        >
          Anfrage stellen
        </h2>

        <p
          className="text-base md:text-lg mb-6 text-center"
          style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
        >
          Bitte schildern Sie Ihr Anliegen mit Datum, Ort und Art des Termins. Wir melden uns zeitnah per E-Mail bei Ihnen zurück. Für dringende Anfragen kennzeichnen Sie Ihre Nachricht bitte mit dem Betreff „Eilig“.
        </p>

        <div className="mt-2 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Linke Infospalte */}
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h3
                className="text-2xl md:text-3xl font-semibold text-center"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
              >
                So läuft Ihre Anfrage
              </h3>
              <p
                className="text-base leading-relaxed text-center"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
              >
                Sie übermitteln uns die wichtigsten Informationen zu Ihrem Termin. Nach Prüfung Ihrer Angaben erhalten Sie eine Rückmeldung per E-Mail zur weiteren Abstimmung.
              </p>
            </div>

            <ul
              className="space-y-2 text-sm md:text-base text-center"
              style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
            >
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                <span>Dolmetsch- und Übersetzungsdienste für Unternehmen, Behörden und Privatpersonen.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                <span>Einsatz im Raum Berlin-Brandenburg sowie nach Absprache auch darüber hinaus.</span>
              </li>
            </ul>
          </div>

          {/* Rechte Formular-Karte */}
          <div className="bg-[#0F3D8C]/95 backdrop-blur-xl rounded-3xl shadow-[0_18px_60px_rgba(15,61,140,0.75)] border border-white/20 px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit} noValidate autoComplete="on">
              <div className="md:col-span-2">
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#E5E7EB' }}
                >
                  Über dieses Formular übermitteln Sie uns alle relevanten Informationen zu Ihrem Termin. Wir prüfen Ihre Anfrage und melden uns zeitnah per E-Mail zurück.
                </p>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="name"
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  E-Mail (optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="email"
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  Anliegen*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  style={{ backgroundPosition: 'right 1rem center' }}
                  name="service"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="behoerde">Behördentermin</option>
                  <option value="gericht">Gerichtstermin</option>
                  <option value="arzt">Arzttermin / medizinischer Termin</option>
                  <option value="unternehmen">Unternehmensanfrage</option>
                  <option value="privat">Private Angelegenheit</option>
                  <option value="uebersetzung">Schriftliche Übersetzung</option>
                  <option value="sonstiges">Sonstiges Anliegen</option>
                </select>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  Datum &amp; Uhrzeit (optional)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="date"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  className="block mb-2 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                >
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="z. B. Sprache, Datum des Termins, Ort, Ansprechpartner und Ihre Telefonnummer"
                  name="message"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base shadow-[0_18px_40px_rgba(15,61,140,0.75)] hover:shadow-[0_22px_55px_rgba(12,49,111,0.9)] transition-all duration-300 border border-white/40 bg-[#0F3D8C] hover:bg-[#0C316F] backdrop-blur-xl tracking-[0.22em] uppercase text-white"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div
                  className="md:col-span-2 text-right text-sm text-white/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  aria-live="polite"
                >
                  Ihre Anfrage wurde erfolgreich gesendet.
                </div>
              )}
              {submitStatus === 'error' && (
                <div
                  className="md:col-span-2 text-right text-sm text-white/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  aria-live="polite"
                >
                  Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
