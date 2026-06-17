import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck } from 'lucide-react';
import type { Creator } from '../mockData';

export const CreatorCard: React.FC<{ creator: Creator }> = ({ creator }) => {
  return (
    <Link 
      to={`/creator/${creator.handle}`}
      className="group block bg-ink-2 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div 
        className="h-24 w-full relative"
        style={{ background: creator.coverGradient }}
      />
      <div className="px-4 pb-4">
        <div className="flex justify-between items-end -mt-8 mb-3">
          <div 
            className="w-16 h-16 rounded-full border-4 border-ink-2 shadow-sm z-10 relative"
            style={{ background: creator.avatarGradient }}
          />
        </div>
        
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-lg font-display font-bold text-cream group-hover:text-gold-2 transition-colors">
              {creator.name}
            </h3>
            {creator.verified && <BadgeCheck className="w-4 h-4 text-gold" />}
          </div>
          <p className="text-sm text-mute mt-0.5">@{creator.handle}</p>
          
          <div className="mt-3 text-sm text-cream/80 line-clamp-2">
            {creator.bio}
          </div>
          
          <div className="mt-4 flex items-center justify-between text-xs font-medium text-mute border-t border-white/5 pt-3">
            <div className="flex gap-3">
              <span>{creator.postCount} posts</span>
              <span>{creator.subCount} subs</span>
            </div>
            <span className="text-gold bg-gold/10 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              {creator.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
