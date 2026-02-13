import Button from "../../atoms/Button";
import Reveal from "../../atoms/Reveal";

/**
 * Hero Section = Profile Section
 * @returns {JSX.Element}
 */
export default function Contacts() {
  return (
    <section id="contact">
      <Reveal className="relative flex flex-col items-center py-32 mx-auto px-6 gap-12">
        {/* section divider */}
        <div className="absolute top-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />
        <div className="absolute bottom-0 left-1/2 w-[90%] max-w-6xl -translate-x-1/2 border-t border-neutral-200" />

        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-neutral-900 font-bold pb-4">Contact</h1>
          <p className="text-neutral-500 max-w-md text-center">
            From messy concepts to market-ready MVPs. Let's talk about how we
            can ship your next big thing, faster.
          </p>
        </div>

        <div className="w-full max-w-xl rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm flex flex-col items-center gap-6">
          <p className="text-neutral-600 text-center">
            Want to collaborate or hire me for your next product build?
          </p>

          <a href="mailto:tomisedunia@gmail.com">
            <Button variant="primary">Contact Me</Button>
          </a>

          <p className="text-sm text-neutral-400">
            Usually replies within 24 hours.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
