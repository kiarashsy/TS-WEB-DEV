import React from 'react';

const ParticleBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      background: 'var(--bg-primary)'
    }} />
  );
};

export default ParticleBackground;