const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-amber-400 text-xl">AB</span>
        <ul className="flex gap-8 text-sm text-stone-400">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-amber-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
