import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Divider from "../../atoms/Divider";
import Reveal from "../../atoms/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Finansialku",
      desc: "Personal finance tracker SaaS for income & expense management with AI insights.",
      stack: ["Next.js", "Supabase", "Tailwind", "AI"],
      demo: "#",
      github: "#",
    },
    {
      title: "Knowledge Hub",
      desc: "Content platform with search, filter, sorting, and pagination powered by CMS.",
      stack: ["React", "Strapi", "REST API", "Tailwind"],
      demo: "#",
      github: "#",
    },
    {
      title: "Minimal Portfolio Template",
      desc: "A minimalist monochrome portfolio starter template with reusable components.",
      stack: ["React", "Tailwind", "UI System"],
      demo: "#",
      github: "#",
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
