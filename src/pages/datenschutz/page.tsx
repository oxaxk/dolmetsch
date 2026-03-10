import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#020617' }}
          >
            Datenschutzerklärung
          </h1>
          
          <div
            className="prose prose-lg max-w-none"
            style={{ color: '#020617', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            </p>

            <p className="mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. über ein Kontaktformular oder per
            E-Mail. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es
            sich ausschließlich um technische Daten (z. B. Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs).
            </p>

            <p className="mb-4">
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Die Erhebung technischer Daten erfolgt, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
            Eine Analyse des Nutzerverhaltens findet nicht statt.
            </p>

            <p className="mb-4">
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten sowie auf
            Einschränkung der Verarbeitung. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Hosting</h2>
            <p className="mb-4">
            Diese Website wird extern über folgende Anbieter betrieben:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</li>
              <li>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
            </ul>
            <p className="mb-4">
            Beim Aufruf der Website erfassen GitHub und Vercel automatisch sogenannte Server-Log-Dateien (z. B. IP-Adresse,
            Browsertyp, Betriebssystem, Zeitpunkt des Zugriffs). Diese Daten dienen ausschließlich der technischen
            Bereitstellung und Sicherheit der Website.
            </p>
            <p className="mb-4">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
            stabilen Betrieb der Website).
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
            Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            <strong>Giorgi Jachvadze Dolmetscher- und Übersetzungsdienst</strong><br />
            Logenstraße 2 / 001<br />
            15230 Frankfurt (Oder)<br />
            Telefon: +49 (0) 152 06746382, +49 (0) 176 43453830<br />
            E-Mail: giorgi.dolmetscher@gmail.com
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
            <p className="mb-4">
            Personenbezogene Daten verbleiben bei uns nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder
            gesetzliche Aufbewahrungsfristen bestehen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde zu. Zuständig ist insbesondere die Aufsichtsbehörde
            des Bundeslandes Brandenburg.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="mb-4">
            Beim Besuch dieser Website werden automatisch folgende Daten erfasst:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular / Kontaktaufnahme</h3>
            <p className="mb-4">
            Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
            bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Cookies</h2>
            <p className="mb-4">
            Auf dieser Website werden keine Cookies zu Analyse-, Marketing- oder Trackingzwecken eingesetzt.
            Es werden lediglich technisch notwendige Verbindungsdaten durch den Server verarbeitet,
            um die Website korrekt bereitzustellen.
            </p>
            <p className="mb-4">
            Da keine Tracking- oder Analyse-Tools verwendet werden, ist kein Cookie-Banner erforderlich.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Hinweis zu Abmahnungen</h2>
            <p className="mb-4">
            Zur Vermeidung unnötiger Rechtsstreitigkeiten bitten wir im Falle möglicher wettbewerbsrechtlicher oder
            datenschutzrechtlicher Probleme um eine vorherige Kontaktaufnahme ohne Kostennote.
            </p>

            <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#020617' }}>
              <p className="text-sm opacity-70">Stand: Januar 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
