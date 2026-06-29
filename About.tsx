const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Angular', 'Ionic', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Python'],
  },
  {
    category: 'Bases de datos',
    items: ['MySQL', 'MongoDB', 'SQLite', 'Sequelize'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'Jest', 'Supertest', 'Power BI', 'Swagger', 'Vite'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          Skills
        </p>
        <h2 className="font-display text-4xl text-stone-100 mb-16">
          Tecnologías
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item} className="text-stone-300 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
