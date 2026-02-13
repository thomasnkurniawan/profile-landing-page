import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Divider from "../../atoms/Divider";
import Reveal from "../../atoms/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "React Vite Starter",
      desc: "A minimal React + Vite template with Tailwind, TypeScript, and ESLint configured.",
      stack: ["React", "Vite", "Tailwind", "TypeScript"],
      demo: "#",
      github: "https://github.com/thomasnkurniawan/vite-react-tailwind-starter",
    },
    {
      title: "Our Little Universe",
      desc: "A digital space to share memories, notes, and love",
      stack: ["React", "Tailwind", "Supabase", "Framer Motion"],
      demo: "https://our-little-universe-tawny.vercel.app/",
      github: "https://github.com/thomasnkurniawan/our-little-universe",
    },
    {
      title: "Profile Landing Page",
      desc: "A minimalist monochrome portfolio starter template with reusable components.",
      stack: ["React", "Tailwind", "UI System"],
      demo: "https://profile-landing-page-thomasnkurniawan.vercel.app/",
      github: "https://github.com/thomasnkurniawan/profile-landing-page",
    },
    {
      title: "Freelance Rate Calculator",
      desc: "A simple calculator to help freelancers determine their hourly rate based on desired annual income and working hours.",
      stack: ["React", "Tailwind", "Vite"],
      demo: "#",
      github: "https://github.com/thomasnkurniawan/freelance-rate-calculator",
    },
    {
      title: "Gajian Allocator",
      desc: "A simple app to help you allocate your salary into different categories.",
      stack: ["React", "Tailwind", "Vite"],
      demo: "#",
      github: "https://github.com/thomasnkurniawan/budget-planner",
    },
  ];

  return (
    <section id="projects" className="section">
      <Divider position="top" />
      <Divider position="bottom" />

      <Reveal>
        <div className="flex flex-col items-center">
          <h1 className="section-title">Projects</h1>
          <p className="section-desc">
            Selected work — built with clean UI, strong architecture, and real
            product focus.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 100}>
            <Card className="flex flex-col justify-between min-h-[220px]">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">
                  {project.title}
                </h2>

                <p className="text-neutral-600 mt-3 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a href={project.demo} target="_blank">
                  <Button variant="primary">Live Demo</Button>
                </a>

                <a href={project.github} target="_blank">
                  <Button variant="ghost">GitHub</Button>
                </a>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
