import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCreator, getPostsForCreator } from '../mockData';
import type { Post } from '../mockData';
import { useSubscription } from '../SubscriptionContext';
import { BadgeCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentTile } from '../components/ContentTile';
import { SubscriptionTierCard } from '../components/SubscriptionTierCard';
import { SubscribeModal } from '../components/SubscribeModal';

export const CreatorProfile = () => {
  const { handle } = useParams();
  const creator = handle ? getCreator(handle) : undefined;
  const { isSubscribed, subscribe } = useSubscription();
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (creator) {
      setPosts(getPostsForCreator(creator.id));
    }
  }, [creator]);

  if (!creator) {
    return <Navigate to="/" replace />;
  }

  const userIsSubscribed = isSubscribed(creator.id);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const handleSimulatePayment = () => {
    // Simulate API delay
    setTimeout(() => {
      subscribe(creator.id);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Navigation */}
      <Link to="/" className="inline-flex items-center gap-2 text-mute hover:text-cream mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Discover
      </Link>

      {/* Profile Header */}
      <div className="bg-ink-2 rounded-3xl overflow-hidden border border-white/5 mb-10">
        <div 
          className="h-48 md:h-64 w-full relative"
          style={{ background: creator.coverGradient }}
        />
        <div className="px-6 pb-8 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8 -mt-16 md:-mt-20 mb-6">
            <div 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-ink-2 shadow-xl z-10"
              style={{ background: creator.avatarGradient }}
            />
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-display font-bold text-cream">{creator.name}</h1>
                {creator.verified && <BadgeCheck className="w-6 h-6 text-gold" />}
              </div>
              <p className="text-lg text-mute">@{creator.handle}</p>
            </div>
            <div className="flex gap-6 pb-4 md:pb-2 text-center text-sm">
              <div>
                <div className="font-display font-bold text-xl text-cream">{creator.postCount}</div>
                <div className="text-mute uppercase tracking-wide text-xs">Posts</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-cream">{creator.subCount}</div>
                <div className="text-mute uppercase tracking-wide text-xs">Subs</div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl text-cream/90 text-lg leading-relaxed">
            {creator.bio}
          </div>
        </div>
      </div>

      {/* Subscription Tiers */}
      {!userIsSubscribed && (
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-cream mb-6">Choose your tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SubscriptionTierCard 
              name="Supporter"
              price={creator.basePrice}
              features={['Full gallery access', 'Cancel anytime']}
              onSubscribe={handleSubscribeClick}
            />
            <SubscriptionTierCard 
              name="Insider"
              price={Math.round(creator.basePrice * 1.5 * 100) / 100}
              features={['Full gallery access', 'Direct messaging', 'Priority requests']}
              isFeatured
              onSubscribe={handleSubscribeClick}
            />
            <SubscriptionTierCard 
              name="VIP"
              price={Math.round(creator.basePrice * 3 * 100) / 100}
              features={['Everything in Insider', '1 Custom request per month', 'Video shoutouts']}
              onSubscribe={handleSubscribeClick}
            />
          </div>
        </section>
      )}

      {/* Content Gallery */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold text-cream">Gallery</h2>
          {userIsSubscribed && (
            <span className="text-ok bg-ok/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Subscribed
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post) => (
            <ContentTile key={post.id} post={post} isUnlocked={userIsSubscribed} />
          ))}
        </div>
      </section>

      <SubscribeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        creator={creator}
        onConfirm={handleSimulatePayment}
        isSuccess={isSuccess}
      />
    </div>
  );
};
