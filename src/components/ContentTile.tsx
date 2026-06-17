import React from 'react';
import type { Post } from '../mockData';
import { Lock, Heart, MessageCircle } from 'lucide-react';
import { cn } from './Layout';

export const ContentTile: React.FC<{ post: Post; isUnlocked: boolean }> = ({ post, isUnlocked }) => {
  const isPreview = post.type === 'free';
  const showContent = isPreview || isUnlocked;

  return (
    <div className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 bg-ink-2">
      {/* Content Layer */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-500",
          showContent ? "scale-100 blur-0" : "scale-110 blur-xl opacity-50"
        )}
        style={{ background: post.gradient }}
      />
      
      {/* Overlay & Interactions for Unlocked/Preview */}
      {showContent && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          <div className="flex items-center gap-3 text-cream">
            <span className="flex items-center gap-1 text-xs font-medium">
              <Heart className="w-4 h-4" /> {post.likes}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium">
              <MessageCircle className="w-4 h-4" /> {post.comments}
            </span>
          </div>
        </div>
      )}

      {/* Locked State Overlay */}
      {!showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/40 backdrop-blur-[2px]">
          <div className="bg-ink-3/80 p-3 rounded-full backdrop-blur-md mb-2">
            <Lock className="w-5 h-5 text-mute" />
          </div>
          <span className="text-xs font-medium text-mute tracking-wide uppercase">Members Only</span>
        </div>
      )}
      
      {/* Preview Badge */}
      {isPreview && !isUnlocked && (
        <div className="absolute top-2 right-2 bg-ok/20 text-ok px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
          Preview
        </div>
      )}
    </div>
  );
};
