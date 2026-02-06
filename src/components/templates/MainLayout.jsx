import Navbar from "../atoms/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col relative overflow-hidden">
      {/* Apple-style soft glow background */}
      <div className="absolute inset-0 -z-10">
        {/* top glow */}
        <div className="absolute top-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neutral-200/60 blur-[120px]" />

        {/* bottom glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neutral-100 blur-[120px]" />

        {/* subtle gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />
      </div>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16">{children}</div>
      </main>
    </div>
  );
}
