import { getGithubActivity } from "@/app/actions";

export default async function GithubActivity() {
  const activities = await getGithubActivity();

  return (
    <div className="w-full border border-slate-800 bg-[#0A192F]/50 rounded-xl p-6 backdrop-blur-sm shadow-xl" aria-labelledby="github-activity-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#D4AF37]" aria-hidden="true">❯</span>
        <h3 id="github-activity-heading" className="text-sm font-mono text-slate-200 uppercase tracking-widest">Pulse of the Engine</h3>
        <span className="ml-auto flex h-2 w-2 relative" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
        </span>
      </div>

      <div className="space-y-5">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="flex flex-col gap-1.5 border-l-2 border-slate-800 pl-4 py-1 hover:border-[#D4AF37] transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-200 font-semibold">{activity.repo}</span>
                <span className="text-xs font-mono text-slate-500">{new Date(activity.date).toLocaleDateString()}</span>
              </div>
              <span className="text-sm text-slate-400 truncate font-mono">{activity.message}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 font-mono">Awaiting GitHub telemetry...</p>
        )}
      </div>
    </div>
  );
}