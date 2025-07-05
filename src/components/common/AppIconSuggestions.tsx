import React, { useState } from 'react';

interface AppIconSuggestionsProps {
  onSelect: (url: string) => void;
}

const apps = [
  {
    url: 'https://apps.apple.com/us/app/starla-call-the-universe/id6741873786',
    imgSrc: '/app-icons/starla.webp',
    rotation: 30,
    bgColor: 'from-purple-500/20 to-pink-500/20'
  },
  {
    url: 'https://apps.apple.com/us/app/yuka-food-cosmetic-scanner/id1092799236',
    imgSrc: '/app-icons/yuka.webp',
    rotation: -30,
    bgColor: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    url: 'https://play.google.com/store/apps/details?id=cc.forestapp&hl=en_IN',
    imgSrc: '/app-icons/forest.webp',
    rotation: 30,
    bgColor: 'from-emerald-500/20 to-green-500/20'
  },
  {
    url: 'https://play.google.com/store/apps/details?id=com.duolingo',
    imgSrc: '/app-icons/duolingo.webp',
    rotation: -30,
    bgColor: 'from-green-500/20 to-teal-500/20'
  }
];

const AppIconSuggestions = ({ onSelect }: AppIconSuggestionsProps) => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({ ...prev, [url]: true }));
  };

  return (
    <div className="flex justify-center gap-4 mb-4">
      {apps.map((app, index) => (
        <button
          key={index}
          onClick={() => onSelect(app.url)}
          className="relative"
        >
          <div 
            className={`
              w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden
              hover:scale-110 transition-all duration-300
              hover:ring-2 hover:ring-neon hover:ring-offset-2 hover:ring-offset-[#0F0F0F]
              shadow-lg hover:shadow-neon/50
            `}
            style={{ 
              transform: `rotate(${app.rotation}deg)`,
              transformOrigin: 'center center'
            }}
          >
            {!loadedImages[app.url] && (
              <div className={`absolute inset-0 bg-gradient-to-br ${app.bgColor} animate-pulse`} />
            )}
            <img 
              src={app.imgSrc} 
              alt="App icon" 
              className={`
                w-full h-full object-cover transition-opacity duration-300
                ${loadedImages[app.url] ? 'opacity-100' : 'opacity-0'}
              `}
              onLoad={() => handleImageLoad(app.url)}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default AppIconSuggestions; 