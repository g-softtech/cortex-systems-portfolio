export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 w-full max-w-3xl flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-2 tracking-tight">
            Cortex <span className="text-cortex-gold">Systems</span>
          </h1>
          <p className="font-mono text-slate-400 text-sm">
            Senior Fullstack Developer / Product Engineer
          </p>
        </div>
        
        <div className="mt-8 p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm w-full shadow-xl">
          <p className="text-slate-300 text-center font-mono text-sm">
            System initialized. Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 mx-1 text-cortex-gold">CMD</kbd> + <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 mx-1 text-cortex-gold">K</kbd> to open command center.
          </p>
        </div>
      </div>
    </main>
  );
}