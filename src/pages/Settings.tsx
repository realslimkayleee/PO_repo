import { Settings as SettingsIcon } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-500">
      <div className="bg-ink-2 p-6 rounded-full mb-6 border border-white/5">
        <SettingsIcon className="w-12 h-12 text-mute" />
      </div>
      <h2 className="text-3xl font-display font-bold text-cream mb-4">Settings</h2>
      <p className="text-mute max-w-md mx-auto mb-8">
        User settings are not implemented in this prototype.
      </p>
    </div>
  );
};
