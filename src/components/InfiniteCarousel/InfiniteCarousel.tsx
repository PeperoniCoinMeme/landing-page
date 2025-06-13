// InfiniteCarousel.tsx
import React from "react";
import "./InfiniteCarousel.css";

interface InfiniteCarouselProps {
  images: string[];
  speed?: number; // duración total del ciclo en segundos
  height?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  speed = 20,
  height = "500px",
}) => {
  // Duplicamos las imágenes para lograr el efecto de bucle continuo
  const duplicatedImages = [...images, ...images];

  return (
    <div className="infinite-carousel" style={{ height }}>
      <div
        className="carousel-track"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
