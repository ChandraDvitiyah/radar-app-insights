import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6 items-center">
            <a href="/privacy" className="text-gray-400 hover:text-neon transition-colors duration-300">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-neon transition-colors duration-300">Terms</a>
            <a href="https://twitter.com/ChandraDvitiyah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors duration-300">Twitter</a>
            <a href="mailto:Support@sonar.wtf" className="text-gray-400 hover:text-neon transition-colors duration-300">Support@sonar.wtf</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
