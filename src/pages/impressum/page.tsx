import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{ fontFamily: 'Inter, sans-serif', color: '#020617' }}
          >
            Impressum
          </h1>
          
          <div
            className="prose prose-lg max-w-none"
            style={{ color: '#020617', fontFamily: 'Inter, sans-serif' }}
          >
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              <strong>Jachvadze Dolmetscherdienst</strong><br />
              Giorgi Jachvadze Dolmetscher- und Übersetzungsdienst<br />
              Logenstraße 2 / 001<br />
              15230 Frankfurt (Oder)
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Kontakt</h2>
            <p className="mb-4">
              Telefon:{' '}
              <a href="tel:+4915206746382" className="hover:underline">
                +49 (0) 152 06746382
              </a>,{' '}
              <a href="tel:+4917643453830" className="hover:underline">
                +49 (0) 176 43453830
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:giorgi.dolmetscher@gmail.com" className="hover:underline">
                giorgi.dolmetscher@gmail.com
              </a>
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Zuständige Kammer</h2>
            <p className="mb-4">
              Industrie- und Handelskammer Ostbrandenburg
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Eine permanente inhaltliche Kontrolle der verlinkten Inhalte ist jedoch nicht zumutbar.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Links</h2>
            <p className="mb-4">
              Diese Website enthält Links zu externen Websites Dritter. Auf die Inhalte dieser Websites haben wir keinen Einfluss. 
              Für diese fremden Inhalte übernehmen wir keine Haftung; verantwortlich ist stets der jeweilige Betreiber der jeweiligen Seiten.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#020617' }}>
              <p className="text-sm opacity-70">
                Stand: Januar 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}