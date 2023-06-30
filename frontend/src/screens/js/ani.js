import { useState, useEffect } from 'react';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div
      id="image-carousel"
      style={{ display: 'flex', justifyContent: 'center', transform: `translateX(-${currentImageIndex * 100}%)` }}
    >
      {images.map((src, index) => (
        <img src={src} alt={`my image ${index + 1}`} style={{ margin: '10px' }} width="300" height="300" />
      ))}
    </div>
  );
}


export default Carousel;