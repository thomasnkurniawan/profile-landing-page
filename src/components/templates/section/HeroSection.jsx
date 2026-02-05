import { RiArrowDownDoubleLine } from "@remixicon/react";
import Reveal from "../../atoms/Reveal";

/**
 * Hero Section = Profile Section
 * @returns {JSX.Element}
 */
export default function HeroSection() {
  return (
    <Reveal>
      <section className="relative grid grid-cols-1 md:grid-cols-1 gap-24 items-center py-24 overflow-hidden">
        {/* background layer */}
        <div className="absolute inset-0 -z-10">
          {/* soft glow */}
          <div className="absolute top-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-800/20 blur-[120px]" />

          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Left: Big Name */}
        <div className="text-center flex flex-col justify-center">
          <p className="mt-6 text-neutral-400">Hi, I'm Thomas Kurniawan</p>

          <h1 className="text-5xl md:text-[7rem] font-bold tracking-tight leading-tight">
            The Frontend
            <br />
            Developer
          </h1>

          <p className="mt-6 text-neutral-400 max-w-md mx-auto">
            “Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.” - Martin Fowler
          </p>
        </div>

        {/* button scroll next section with icon */}
        <div className="flex items-center justify-center my-4">
          <a
            href="#about"
            className="text-neutral-400 hover:text-neutral-200 transition"
          >
            <RiArrowDownDoubleLine className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>
    </Reveal>
  );
}
