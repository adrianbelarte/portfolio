export default function Contact() {
  return (
    <section id="contacto" className="py-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          Contacto
        </p>
        <h2 className="font-display text-4xl text-stone-100 mb-6">
          Hablemos
        </h2>
        <p className="text-stone-400 max-w-lg mb-12 leading-relaxed">
          Estoy buscando mi primera oportunidad como desarrollador Full Stack.
          Si tienes un proyecto o una vacante que encaje, escríbeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:adrian.belarte.it@gmail.com"
            className="bg-amber-400 text-stone-950 px-8 py-4 text-sm font-medium hover:bg-amber-300 transition-colors text-center"
          >
            adrian.belarte.it@gmail.com
          </a>
          <a
            href="https://github.com/adrianbelarte"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 text-stone-300 px-8 py-4 text-sm font-medium hover:border-amber-400 hover:text-amber-400 transition-colors text-center"
          >
            GitHub
          </a>
        </div>
        <p className="text-stone-600 text-xs mt-16">
          © 2025 Adrián Belarte. Construido con React + TypeScript + Tailwind.
        </p>
      </div>
    </section>
  )
}
