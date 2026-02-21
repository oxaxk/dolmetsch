// File: src/pages/contact/Page.tsx
import { useState, type FormEvent } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || ''
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Kontakt
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
            >
              Kontakt zum Jachvadze Dolmetscherdienst
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Wenn Sie Fragen oder Anliegen haben, zögern Sie nicht, uns zu kontaktieren. Sie können das Formular auf unserer Website verwenden oder uns direkt telefonisch oder per E-Mail erreichen. Wir freuen uns auf Ihre Nachricht.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+4915206746382"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-phone-line text-lg" />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4915206746382"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-whatsapp-line text-lg" />
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
            {/* Infospalte */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-semibold mb-2"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
              >
                So erreichen Sie uns
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed text-[#0F172A]/85"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Über das Formular können Sie uns Ihr Anliegen schildern – zum Beispiel Art des Termins, Sprache, Datum und Ort. Wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>

              <ul
                className="space-y-2 text-sm md:text-base"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
              >
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>Dolmetsch- und Übersetzungsdienste für Behörden, Gerichte und medizinische Einrichtungen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>Begleitendes Dolmetschen bei Mandantengesprächen und privaten Terminen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>Für kurzfristige Termine sind wir telefonisch erreichbar.</span>
                </li>
              </ul>
            </div>

            {/* Formular */}
            <div className="bg-[#0F3D8C]/95 backdrop-blur-xl rounded-3xl shadow-[0_18px_60px_rgba(15,61,140,0.75)] border border-white/20 px-6 py-7 md:px-7 md:py-8">
              <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit}>
                <div className="md:col-span-2">
                  <p
                    className="text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#E5E7EB' }}
                  >
                    Über dieses Formular kannst du uns deinen Fall schicken. Wir prüfen deine Angaben und melden uns
                    mit Rückfragen oder einem Rückruf. Im Notfall ruf bitte direkt an.
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
                    <option value="arzt">Arzttermin / Medizinische Einrichtung</option>
                    <option value="unternehmen">Unternehmen / Geschäftstermin</option>
                    <option value="privat">Privates Anliegen</option>
                    <option value="sonstiges">Sonstiges</option>
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
                    placeholder="z. B. Art des Termins, benötigte Sprache, Datum, Ort, besondere Hinweise"
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
                  >
                    Deine Anfrage wurde erfolgreich gesendet.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div
                    className="md:col-span-2 text-right text-sm text-white/80"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;