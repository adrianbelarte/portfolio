export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          Disponible para trabajar
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-100 leading-tight mb-6">
          Adrián
          <br />
          <span className="italic text-stone-400">Belarte</span>
        </h1>
        <p className="text-stone-400 text-xl max-w-xl mb-10 leading-relaxed">
          Desarrollador Full Stack Junior. Construyo productos que funcionan,
          desde la base de datos hasta la interfaz.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#proyectos"
            className="bg-amber-400 text-stone-950 px-6 py-3 text-sm font-medium hover:bg-amber-300 transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="/CV_Adrian_Belarte_ES.pdf"
            download
            className="border border-stone-700 text-stone-300 px-6 py-3 text-sm font-medium hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}
