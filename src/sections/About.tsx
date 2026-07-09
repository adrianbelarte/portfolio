import foto from '../assets/foto.jpg'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            Sobre mí
          </p>
          <h2 className="font-display text-4xl text-stone-100 mb-6">
            Código con contexto real
          </h2>
          <p className="text-stone-400 leading-relaxed mb-4">
            Antes de programar, coordiné equipos en Berlín y gestioné tiendas durante años.
            Eso me enseñó algo que no se aprende en ningún bootcamp: cómo funcionan los negocios
            por dentro, qué necesita un equipo para trabajar bien y cómo resolver problemas
            bajo presión.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Hoy combino esa experiencia con formación técnica en Full Stack (React, Node.js,
            TypeScript) y prácticas en Accenture. Busco un equipo donde pueda aportar
            desde el primer día.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            {[
              { label: 'Formación', value: 'Bootcamp Full Stack · DAM' },
              { label: 'Experiencia', value: 'Prácticas en Accenture · Gestión de equipos en retail' },
              { label: 'Idiomas', value: 'Español · Inglés B1 · Alemán B1' },
              { label: 'Ubicación', value: 'Valencia, España' },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-2 border-amber-400 pl-4">
                <p className="text-xs text-stone-500 uppercase tracking-wider">{label}</p>
                <p className="text-stone-300 mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 border border-amber-400/20" />
            <img
              src={foto}
              alt="Adrián Belarte"
              className="w-72 h-80 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
