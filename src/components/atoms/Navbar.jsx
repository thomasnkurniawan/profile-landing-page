import {
  RiLinkedinFill,
  RiInstagramFill,
  RiTiktokFill,
} from "@remixicon/react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-50 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex gap-3">
          <a href="#">
            <RiTiktokFill className="w-6 h-6" />
          </a>
          <a href="#">
            <RiLinkedinFill className="w-6 h-6" />
          </a>
          <a href="#">
            <RiInstagramFill className="w-6 h-6" />
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="px-4 py-2 text-black rounded-tl-lg hover:bg-slate-100"
          >
            PROFILE
          </a>
          <a
            href="#"
            className="px-4 py-2 text-black rounded-none hover:bg-slate-100"
          >
            SKILLS
          </a>
          <a
            href="#"
            className="px-4 py-2 text-black rounded-none hover:bg-slate-100"
          >
            EXPERIENCES
          </a>
          <a
            href="#"
            className="px-4 py-2 text-black rounded-r-lg hover:bg-slate-100"
          >
            CONTACTS
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="px-4 py-2 text-black rounded-tl-lg hover:bg-slate-100"
          >
            tomisedunia@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}
