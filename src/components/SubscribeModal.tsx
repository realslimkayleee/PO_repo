import React from 'react';
import type { Creator } from '../mockData';
import { X, CheckCircle2 } from 'lucide-react';
import { cn } from './Layout';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  creator: Creator;
  onConfirm: () => void;
  isSuccess: boolean;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose, creator, onConfirm, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-ink-2 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-mute hover:text-cream transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-ok mb-4 animate-in scale-in duration-300" />
              <h3 className="text-2xl font-display font-bold text-cream mb-2">You're In!</h3>
              <p className="text-mute">
                You now have full access to {creator.name}'s exclusive content.
              </p>
              <button
                onClick={onClose}
                className="mt-8 w-full py-3 px-4 bg-ink-3 hover:bg-white/5 border border-white/10 rounded-xl font-medium transition-colors"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-display font-bold text-cream mb-6">Subscribe to {creator.name}</h3>
              
              <div className="bg-ink-3 rounded-xl p-4 mb-6 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-mute font-medium">Monthly Subscription</span>
                  <span className="text-cream font-bold">${creator.basePrice}</span>
                </div>
                <ul className="text-sm text-mute space-y-1 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ok" /> Full gallery access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ok" /> Direct messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ok" /> Priority custom requests
                  </li>
                </ul>
              </div>

              {/* Fake Payment Form */}
              <div className="space-y-4 mb-6 opacity-60">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-mute uppercase tracking-wider">Card Number</label>
                  <input disabled placeholder="•••• •••• •••• ••••" className="w-full bg-ink border border-white/10 rounded-lg px-3 py-2 text-cream placeholder:text-white/20 focus:outline-none" />
                </div>
                <div className="flex gap-4">
                  <div className="space-y-1.5 flex-1">
                    <label className="text-xs font-medium text-mute uppercase tracking-wider">Expiry</label>
                    <input disabled placeholder="MM/YY" className="w-full bg-ink border border-white/10 rounded-lg px-3 py-2 text-cream placeholder:text-white/20 focus:outline-none" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <label className="text-xs font-medium text-mute uppercase tracking-wider">CVC</label>
                    <input disabled placeholder="•••" className="w-full bg-ink border border-white/10 rounded-lg px-3 py-2 text-cream placeholder:text-white/20 focus:outline-none" />
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-mute text-center mb-4">
                This is a prototype. No real payment will be processed.
              </p>

              <button
                onClick={onConfirm}
                className="w-full py-3 px-4 bg-gold hover:bg-gold-2 text-ink rounded-xl font-bold transition-colors"
              >
                Simulate Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
