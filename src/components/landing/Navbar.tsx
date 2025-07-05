import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-end h-16">
          <Button 
            className="bg-neon hover:bg-neon-bright text-black font-semibold transition-all duration-300 hover:scale-105 neon-glow"
            onClick={() => window.location.href = '/dashboard'}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 