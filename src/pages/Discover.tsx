import React, { useState } from 'react';
import { creators, categories } from '../mockData';
import { CreatorCard } from '../components/CreatorCard';
import { cn } from '../components/Layout';
import { ChevronRight } from 'lucide-react';

export const Discover = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCreators = activeCategory === 'All' 
    ? creators 
    : creators.filter(c => c.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold-glow -z-10" />
        <h1 className="text-4xl md:text-6xl font-display font-bold text-cream mb-4 tracking-tight">
          Find Your Perfect <span className="text-gold-2">Sole</span> Mate
        </h1>
        <p className="text-lg text-mute max-w-2xl mx-auto mb-10">
          Subscribe to premium creators and unlock an exclusive world of foot care, modeling, and lifestyle content.
        </p>
      </section>

      {/* Category Filters */}
      <section className="relative mb-10">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-3 px-1 min-w-max pr-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-cream text-ink shadow-[0_0_15px_rgba(243,237,227,0.3)]"
                    : "bg-ink-2 text-mute border border-white/5 hover:border-white/20 hover:text-cream"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator (Mobile only) */}
        <div className="absolute top-0 right-0 h-[calc(100%-16px)] w-20 bg-gradient-to-l from-ink via-ink/80 to-transparent pointer-events-none flex items-center justify-end pr-1 sm:hidden">
          <ChevronRight className="w-5 h-5 text-mute animate-pulse" />
        </div>
      </section>

      {/* Creator Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
        {filteredCreators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
        {filteredCreators.length === 0 && (
          <div className="col-span-full py-20 text-center text-mute">
            No creators found in this category.
          </div>
        )}
      </section>
    </div>
  );
};
