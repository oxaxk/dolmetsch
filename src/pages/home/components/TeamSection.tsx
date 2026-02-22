
const TeamSection = () => {
  return (
    <section id="bewerbung" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Bewerbung als Dolmetscher/in
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10">
          Sie möchten mit uns zusammenarbeiten? Senden Sie uns Ihre Bewerbung mit relevanten Qualifikationen und Einsatzgebieten.
        </p>
        <a
          href="/bewerbung"
          className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold bg-[#0F3D8C] text-white hover:bg-[#0C316F] transition-colors duration-200"
        >
          Jetzt bewerben
        </a>
      </div>
    </section>
  );
}

export default TeamSection;
