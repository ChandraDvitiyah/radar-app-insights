
import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="particles">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
};

export default ParticleBackground;
