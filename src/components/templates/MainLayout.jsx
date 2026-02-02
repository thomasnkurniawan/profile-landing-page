import Navbar from "../atoms/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-16">{children}</div>
      </main>
    </div>
  );
}
