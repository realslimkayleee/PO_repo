import React from 'react';
import { getCreator } from '../mockData';
import type { Post } from '../mockData';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const creator = getCreator(post.creatorId);
  if (!creator) return null;

  return (
    <article className="bg-ink-2 rounded-2xl overflow-hidden border border-white/5 mb-6">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <Link to={`/creator/${creator.handle}`} className="flex items-center gap-3 group">
          <div 
            className="w-10 h-10 rounded-full"
            style={{ background: creator.avatarGradient }}
          />
          <div>
            <h4 className="font-display font-bold text-cream group-hover:text-gold-2 transition-colors">
              {creator.name}
            </h4>
            <div className="flex items-center gap-2 text-xs text-mute">
              <span>@{creator.handle}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </Link>
        <button className="text-mute hover:text-cream transition-colors p-2">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div 
        className="w-full aspect-square"
        style={{ background: post.gradient }}
      />

      {/* Footer */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button className="flex items-center gap-1.5 text-mute hover:text-ok transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-1.5 text-mute hover:text-cream transition-colors">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-1.5 text-mute hover:text-cream transition-colors ml-auto">
            <Share className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-sm font-medium text-cream mb-1">
          {post.likes} likes
        </div>
        
        {post.caption && (
          <div className="text-sm">
            <span className="font-bold text-cream mr-2">{creator.name}</span>
            <span className="text-cream/80">{post.caption}</span>
          </div>
        )}
        
        <button className="text-mute text-sm mt-2">
          View all {post.comments} comments
        </button>
      </div>
    </article>
  );
};
