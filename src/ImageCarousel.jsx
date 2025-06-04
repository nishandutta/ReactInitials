import React, { useState } from 'react';
import './ImageCarousel.css';

const images = [
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg',
  'https://knightstemplar.co/wp-content/uploads/2023/06/galileus_medieval_town_photo_realistic_6bfe2135-ae15-4d4e-baed-a10beec2fe5a.jpg',
  'https://img.freepik.com/premium-photo/nature-s-mystical-dark-space-forest-wallpaper-with-twinkling-stars-generative-ai_753390-5692.jpg?w=740',
  'https://cdn.pixabay.com/photo/2023/10/16/18/05/ai-generated-8319806_640.png',
  'https://images3.alphacoders.com/155/155095.jpg'
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="nav prev" onClick={prevImage}>&#10094;</button>
      <img src={images[index]} alt={`Slide ${index}`} className="carousel-image" />
      <button className="nav next" onClick={nextImage}>&#10095;</button>
    </div>
  );
}

export default ImageCarousel;
