const projects = [
  {
    title: 'TPV Hostelería',
    description:
      'Sistema de punto de venta completo para hostelería. Backend con Node.js, Express, SQLite y JWT. Frontend con React, Vite y TypeScript. Tests con Jest y Supertest.',
    tags: ['React', 'TypeScript', 'Node.js', 'SQLite', 'JWT', 'Jest'],
    demo: 'https://matthatantpv.netlify.app/',
    repo: 'https://github.com/adrianbelarte',
  },
  {
    title: 'M Construcciones y Diseños',
    description:
      'Web corporativa para empresa de reformas en Valencia. Diseño orientado a conversión, SEO local y formulario de contacto para captación de presupuestos.',
    tags: ['Diseño web', 'SEO', 'Lovable'],
    demo: 'https://mconstruccionesydisenos.es',
    repo: null,
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          Proyectos
        </p>
        <h2 className="font-display text-4xl text-stone-100 mb-16">
          Lo que he construido
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-stone-800 p-8 flex flex-col gap-4 hover:border-amber-400/50 transition-colors"
            >
              <h3 className="font-display text-2xl text-stone-100">
                {project.title}
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-amber-400 border border-amber-400/30 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Ver demo →
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
