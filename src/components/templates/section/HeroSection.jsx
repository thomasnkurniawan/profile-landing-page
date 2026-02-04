import { RiArrowDownDoubleLine } from "@remixicon/react";

/**
 * Hero Section = Profile Section
 * @returns {JSX.Element}
 */
export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 gap-24 items-center py-24">
      {/* Left: Big Name */}
      <div className="text-center flex flex-col justify-center">
        <p className="mt-6 text-neutral-400">
          Hi, I'm Thomas Kurniawan
        </p>
        <h1 className="text-5xl md:text-[7rem] font-bold tracking-tight leading-tight">
          The Frontend
          <br />
          Developer
        </h1>
        <p className="mt-6 text-neutral-400 max-w-md mx-auto">
          “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” - Martin Fowler
        </p>
      </div>

      {/* button scroll next session with icon */}
      <div className="flex items-center justify-center my-4">
        <a href="#">
          <RiArrowDownDoubleLine className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
