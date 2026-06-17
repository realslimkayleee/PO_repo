import { DollarSign, Users, Image as ImageIcon, TrendingUp, Upload, Shield } from 'lucide-react';

const KpiCard = ({ title, value, icon: Icon, trend }: { title: string, value: string, icon: any, trend: string }) => (
  <div className="bg-ink-2 border border-white/5 p-6 rounded-2xl">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-ink-3 p-3 rounded-xl border border-white/5">
        <Icon className="w-6 h-6 text-mute" />
      </div>
      <span className="text-sm font-medium text-ok flex items-center gap-1">
        <TrendingUp className="w-4 h-4" /> {trend}
      </span>
    </div>
    <div className="text-mute text-sm font-medium mb-1">{title}</div>
    <div className="text-3xl font-display font-bold text-cream">{value}</div>
  </div>
);

export const Studio = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-display font-bold text-cream">Creator Studio</h1>
        <button className="bg-gold hover:bg-gold-2 text-ink px-4 py-2 rounded-lg font-bold transition-colors">
          Withdraw Funds
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KpiCard title="Net Payout" value="$4,289.50" icon={DollarSign} trend="+12%" />
        <KpiCard title="Active Subs" value="342" icon={Users} trend="+5%" />
        <KpiCard title="Total Posts" value="89" icon={ImageIcon} trend="+2%" />
        <KpiCard title="Monthly MRR" value="$5,130.00" icon={TrendingUp} trend="+15%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-ink-2 border border-white/5 rounded-2xl p-6">
            <h2 className="text-xl font-display font-bold text-cream mb-4">Create New Post</h2>
            
            {/* TODO: Implement real media upload to secure storage */}
            <div className="border-2 border-dashed border-white/10 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-gold/30 hover:bg-white/5 transition-colors cursor-pointer mb-6">
              <Upload className="w-10 h-10 text-mute mb-4" />
              <p className="text-cream font-medium mb-1">Click to upload or drag & drop</p>
              <p className="text-sm text-mute">High-res images or videos up to 50MB</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-mute mb-1.5">Caption</label>
                <textarea 
                  className="w-full bg-ink border border-white/10 rounded-xl p-3 text-cream placeholder:text-white/20 focus:outline-none focus:border-gold/50 min-h-[100px] resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mute mb-3">Access Level</label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer group">
                    <input type="radio" name="access" className="peer sr-only" defaultChecked />
                    <div className="p-4 rounded-xl border border-white/10 bg-ink peer-checked:border-gold peer-checked:bg-gold/5 transition-all text-center">
                      <span className="block text-cream font-medium mb-1">Members Only</span>
                      <span className="text-xs text-mute">Locked behind subscription</span>
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer group">
                    <input type="radio" name="access" className="peer sr-only" />
                    <div className="p-4 rounded-xl border border-white/10 bg-ink peer-checked:border-gold peer-checked:bg-gold/5 transition-all text-center">
                      <span className="block text-cream font-medium mb-1">Free Preview</span>
                      <span className="text-xs text-mute">Visible to everyone</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* TODO: Implement real post creation API call */}
              <button className="w-full py-3 bg-cream hover:bg-white text-ink rounded-xl font-bold transition-colors mt-4">
                Publish Post
              </button>
            </div>
          </div>
        </div>

        {/* Recent Subscribers Sidebar */}
        <div className="space-y-6">
          <div className="bg-ink-2 border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-bold text-cream">Recent Subs</h2>
              <Shield className="w-5 h-5 text-mute" />
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-ink-3 to-white/10`} />
                  <div>
                    <div className="text-sm font-medium text-cream">User_{Math.floor(Math.random() * 10000)}</div>
                    <div className="text-xs text-mute">Subscribed {i} hour{i !== 1 && 's'} ago</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full py-2 mt-6 text-sm font-medium text-mute hover:text-cream transition-colors border border-white/5 rounded-lg hover:bg-white/5">
              View All Subscribers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
