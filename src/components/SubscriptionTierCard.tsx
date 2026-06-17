import React from 'react';
import { cn } from './Layout';
import { Check } from 'lucide-react';

interface TierProps {
  name: string;
  price: number;
  features: string[];
  isFeatured?: boolean;
  onSubscribe: () => void;
  isSubscribed?: boolean;
}

export const SubscriptionTierCard: React.FC<TierProps> = ({ 
  name, 
  price, 
  features, 
  isFeatured, 
  onSubscribe, 
  isSubscribed 
}) => {
  return (
    <div className={cn(
      "relative rounded-2xl p-6 flex flex-col",
      isFeatured 
        ? "bg-gradient-to-b from-gold-2/10 to-ink-2 border-gold/30 border" 
        : "bg-ink-2 border-white/5 border"
    )}>
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h4 className="text-xl font-display font-bold text-cream mb-2">{name}</h4>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-display font-bold text-gold-2">${price}</span>
        <span className="text-mute text-sm">/ month</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-cream/80">
            <Check className="w-5 h-5 text-ok shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSubscribe}
        disabled={isSubscribed}
        className={cn(
          "w-full py-3 rounded-xl font-bold transition-all duration-300",
          isSubscribed
            ? "bg-ok/20 text-ok cursor-default"
            : isFeatured
              ? "bg-gold hover:bg-gold-2 text-ink shadow-[0_0_20px_rgba(227,165,60,0.3)]"
              : "bg-ink-3 hover:bg-white/5 text-cream"
        )}
      >
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  );
};
