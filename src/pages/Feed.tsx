import React, { useMemo } from 'react';
import { useSubscription } from '../SubscriptionContext';
import { getFeedPosts } from '../mockData';
import { PostCard } from '../components/PostCard';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export const Feed = () => {
  const { subscribedIds } = useSubscription();
  
  const posts = useMemo(() => {
    return getFeedPosts(Array.from(subscribedIds));
  }, [subscribedIds]);

  if (subscribedIds.size === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-500">
        <div className="bg-ink-2 p-6 rounded-full mb-6 border border-white/5">
          <Compass className="w-12 h-12 text-mute" />
        </div>
        <h2 className="text-3xl font-display font-bold text-cream mb-4">Your feed is empty</h2>
        <p className="text-mute max-w-md mx-auto mb-8">
          Subscribe to creators to unlock their exclusive content and see their latest posts right here.
        </p>
        <Link 
          to="/" 
          className="bg-gold hover:bg-gold-2 text-ink font-bold py-3 px-8 rounded-xl transition-colors shadow-[0_0_20px_rgba(227,165,60,0.2)]"
        >
          Discover Creators
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-3xl font-display font-bold text-cream mb-8">My Feed</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
