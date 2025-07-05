
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text">ReviewRadar</span>
            <p className="text-gray-400 mt-2">© 2024 ReviewRadar. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://producthunt.com" 
              target="_blank" 
              className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors duration-300"
            >
              🚀 Product Hunt
            </a>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
