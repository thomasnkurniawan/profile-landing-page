import Button from "../atoms/Button";

export default function Navbar() {
  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-neutral-900"
          >
            Tomi Sedunia.
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-neutral-900 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block">
              <Button variant="ghost">Let’s Talk</Button>
            </a>

            <a href="#projects">
              <Button variant="primary">Projects</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
