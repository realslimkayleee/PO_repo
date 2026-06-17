import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Search, Tv, User, LayoutDashboard } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



const Header = () => (
  <header className="sticky top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-display font-bold text-cream">
        PedicuresOnly
      </NavLink>
      <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
        <NavLink to="/" className={({ isActive }) => cn("hover:text-cream transition-colors", isActive ? "text-cream" : "text-mute")}>
          Discover
        </NavLink>
        <NavLink to="/feed" className={({ isActive }) => cn("hover:text-cream transition-colors", isActive ? "text-cream" : "text-mute")}>
          My Feed
        </NavLink>
        <NavLink to="/studio" className={({ isActive }) => cn("hover:text-cream transition-colors", isActive ? "text-cream" : "text-mute")}>
          Studio
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => cn("hover:text-cream transition-colors", isActive ? "text-cream" : "text-mute")}>
          <Search className="w-5 h-5" />
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => cn("hover:text-cream transition-colors", isActive ? "text-cream" : "text-mute")}>
          <User className="w-5 h-5" />
        </NavLink>
      </nav>
    </div>
  </header>
);

const MobileTabBar = () => (
  <nav className="sm:hidden fixed bottom-0 w-full bg-ink/90 backdrop-blur-md border-t border-white/10 pb-safe z-50">
    <div className="flex justify-around items-center h-16">
      <NavLink to="/" className={({ isActive }) => cn("flex flex-col items-center gap-1", isActive ? "text-cream" : "text-mute")}>
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-medium">Discover</span>
      </NavLink>
      <NavLink to="/feed" className={({ isActive }) => cn("flex flex-col items-center gap-1", isActive ? "text-cream" : "text-mute")}>
        <Tv className="w-6 h-6" />
        <span className="text-[10px] font-medium">Feed</span>
      </NavLink>
      <NavLink to="/search" className={({ isActive }) => cn("flex flex-col items-center gap-1", isActive ? "text-cream" : "text-mute")}>
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-medium">Search</span>
      </NavLink>
      <NavLink to="/studio" className={({ isActive }) => cn("flex flex-col items-center gap-1", isActive ? "text-cream" : "text-mute")}>
        <LayoutDashboard className="w-6 h-6" />
        <span className="text-[10px] font-medium">Studio</span>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => cn("flex flex-col items-center gap-1", isActive ? "text-cream" : "text-mute")}>
        <User className="w-6 h-6" />
        <span className="text-[10px] font-medium">You</span>
      </NavLink>
    </div>
  </nav>
);

export const Layout = () => {
  return (
    <div className="min-h-screen bg-ink text-cream pb-16 sm:pb-0 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <MobileTabBar />
    </div>
  );
};
