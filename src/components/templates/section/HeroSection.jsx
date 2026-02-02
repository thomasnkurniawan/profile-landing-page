import { RiArrowDownDoubleLine } from "@remixicon/react";

/**
 * Hero Section = Profile Section
 * @returns {JSX.Element}
 */
export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 gap-24 items-end py-24">
      {/* Left: Big Name */}
      <div>
        <p className="mt-6 text-neutral-400 max-w-md">
          Lorem Ipsum
        </p>
        <h1 className="text-5xl md:text-[7rem] font-bold tracking-tight leading-tight">
          Magical
          <br />
          Lorem Ipsum
        </h1>
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
