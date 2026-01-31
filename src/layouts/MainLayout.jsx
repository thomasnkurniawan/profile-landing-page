export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="max-w-4xl mx-auto p-6">
        {children}
      </main>
    </div>
  )
}
