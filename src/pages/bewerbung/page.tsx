import { useState, type FormEvent } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import Button from "../../components/base/Button";

const BewerbungPage = () => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    strasse: "",
    plzOrt: "",
    telefon: "",
    email: "",
    steuerId: "",
    sprachen: "",
    hochschule: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) return;

    try {
      const res = await fetch("/api/bewerbung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Fehler beim Senden");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-24 pb-20 bg-white">
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}
            >
              Bewerben Sie sich jetzt!
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed text-[#0F172A]/80 mb-8 max-w-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Über Ihr Interesse freuen wir uns sehr.
              <br className="hidden sm:block" />
              Um unseren Kundinnen und Kunden den bestmöglichen Service bieten zu können,
              sind wir stets daran interessiert, unser Team zu erweitern.
              Wenn Sie interessiert sind, bewerben Sie sich bitte über das folgende Formular.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500">
                Mit * gekennzeichnete Felder sind Pflichtfelder.
              </p>
              <h2
                className="text-xl font-semibold mb-4 text-[#0F172A]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Persönliche Angaben
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Vorname *</label>
                  <input
                    name="vorname"
                    required
                    value={formData.vorname}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Nachname *</label>
                  <input
                    name="nachname"
                    required
                    value={formData.nachname}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition"
                  />
                </div>
              </div>

              <input name="geburtsdatum" placeholder="Geburtsdatum" value={formData.geburtsdatum} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />
              <input name="strasse" placeholder="Straße" value={formData.strasse} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />
              <input name="plzOrt" required placeholder="Postleitzahl / Ort*" value={formData.plzOrt} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />
              <input name="telefon" required placeholder="Telefonnummer*" value={formData.telefon} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />
              <input name="email" required type="email" placeholder="E-Mail*" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />
              <input name="steuerId" placeholder="Steuer ID Nummer" value={formData.steuerId} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />

              <div className="pt-6">
                <h2
                  className="text-xl font-semibold mb-4 text-[#0F172A]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Fachliche Angaben
                </h2>
              </div>

              <textarea name="sprachen" required placeholder="Welche Sprachen können Sie fließend sprechen?*" value={formData.sprachen} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" rows={3} />
              <input name="hochschule" placeholder="Name der Hochschule / Universität" value={formData.hochschule} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition" />

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <span>
                  Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der
                  Datenschutzerklärung zu.
                </span>
              </div>

              <div className="pt-6 flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full px-10 py-3 text-sm font-medium tracking-wide"
                >
                  Bewerbung absenden
                </Button>
              </div>
              {submitted && (
                <p className="text-green-600 text-sm mt-4">
                  Ihre Bewerbung wurde erfolgreich übermittelt.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BewerbungPage;