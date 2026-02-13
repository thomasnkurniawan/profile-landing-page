import Card from "../../atoms/Card";
import Divider from "../../atoms/Divider";
import Reveal from "../../atoms/Reveal";

/**
 * Skills Section
 * @returns {JSX.Element}
 */
export default function Skills() {
  const coreValues = [
    {
      key: "AI-Augmented Development",
      detail: "utilizing pro-code AI to build robust apps at 5x speed.",
      tools: ["Cursor", "Copilot", "LLM Prompting", "Windsurf"],
    },
    {
      key: "Multi-Platform Expert",
      detail: "crafting seamless experiences across Web, Mobile, and Desktop.",
      tools: ["Next.js", "Angular", "Ionic", "Capacitor", "Flutter"],
    },
    {
      key: "Product-Minded Logic",
      detail: "turning complex business needs into clean, functional features.",
      tools: ["Problem Solving", "System Architecture"],
    },
    {
      key: "Fast & Clean Delivery",
      detail: "shipping high-quality MVP with pixel-perfect execution.",
      tools: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      key: "Agile Management",
      detail:
        "professional workflow ensuring projects stay on track and transparent.",
      tools: ["Jira", "ClickUp", "Notion"],
    },
  ];

  return (
    <Reveal>
      <section
        className="relative flex flex-col items-center py-32 mx-auto px-6 gap-12"
        id="skills"
      >
        <div className="absolute top-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />

        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-slate-900 font-bold pb-4">
            Core Values
          </h1>
          <p className="text-neutral-400 max-w-md text-center">
            I build with the user in mind and the business in sight. Clean code
            is the standard, but a working product is the goal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {coreValues.map((item, index) => {
            return (
              <Reveal key={item.key} delay={index * 80}>
                <Card
                  background="slate"
                  className={
                    "rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition"
                  }
                  key={item.key}
                >
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-xl font-bold">{item.key}</p>
                    <p>{item.detail}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => {
                        return (
                          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600">
                            {tool}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />
      </section>
    </Reveal>
  );
}
