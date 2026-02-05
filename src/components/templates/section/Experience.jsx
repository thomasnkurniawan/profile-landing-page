import Reveal from "../../atoms/Reveal";

/**
 * Experience Section
 * @returns {JSX.Element}
 */
export default function Experience() {
  const experience = [
    {
      key: "AI-Powered Event Intelligence (SaaS)",
      detail:
        "Senior Software Engineer Building the future of event analytics by merging AI capabilities with product-centric engineering.",
    },
    {
      key: "Dynamic Listing & Discovery Platform",
      detail:
        "Frontend Engineer Crafted a high-performance listing engine focused on user discovery and pixel-perfect interface.",
    },
    {
      key: "Scalable Ticketing Ecosystem",
      detail:
        "Mobile Engineer Developed a high-traffic mobile platform for seamless event entry and ticket management.",
    },
    {
      key: "Self-Initiated Product Lab",
      detail:
        "Product Engineer Turning personal ideas into fully functional MVPs to explore new technologies and user behaviors.",
    },
  ];

  return (
    <Reveal>
      <section className="relative flex flex-col items-center py-32 mx-auto px-6 gap-12">
        {/* section divider */}
        <div className="absolute top-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />
        <div className="absolute bottom-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />

        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-neutral-900 font-bold pb-4">
            Experience
          </h1>
          <p className="text-neutral-500 max-w-md text-center">
            Building real products across SaaS, web, and mobile — always
            focusing on performance, clarity, and user experience.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {experience.map((item, idx) => {
            return (
              <Reveal key={item.key} delay={idx * 80}>
                <div
                  key={item.key}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-xl font-semibold text-neutral-900">
                      {item.key}
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
