import React from 'react';

// Placeholder image URLs
const heroImageUrl = 'https://via.placeholder.com/1200x800';
const sectionImageUrl = 'https://via.placeholder.com/600x400';

const HeroSection = () => {
  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <img src={heroImageUrl} alt="Comfortable furniture" style={{ width: '100%', height: 'auto' }} />
      <h1 style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Get comfortable.</h1>
      <p style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
        At University Furnishings, our top priority is to make you and your residents as comfortable as possible.
      </p>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <button style={{ marginRight: '10px' }}>CATALOG</button>
        <button>COLLECTIONS</button>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h2>About Us</h2>
      <p>The ultimate furniture collection for student housing.</p>
      <p>
        University Furnishings is a global furniture design and manufacturing company. Our furniture is built to last, and we offer a wide range of styles to suit any residence.
      </p>
      <img src={sectionImageUrl} alt="Furniture collection" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* Include other sections of the homepage here */}
    </div>
  );
};

export default App;
