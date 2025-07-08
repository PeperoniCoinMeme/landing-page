import React from "react";

interface GalleryCardProps {
  className?: string;
  imageUrl: string;
  status?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  className,
  imageUrl,
  status,
}) => {
  return (
    <div
      className={`relative overflow-hidden max-w-sm
   ${className || ""}`}
      onClick={() => window.open("https://x.com/Peperoni_Meme", "_blank")}
    >
      <img
        src={imageUrl}
        alt="Gallery Item"
        className="w-full h-60 md:h-70 lg:h-78 object-cover opacity-90 hover:opacity-100"
      />
      <div className="absolute top-0 w-full">{status}</div>
      <div className="gallery-card__stripe">
        <a
          href="https://x.com/Peperoni_Meme"
          target="_blank"
          className="rounded-full border-1 p-3 cursor-pointer gallery-card__social hover:scale-120 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            className="w-4 h-4 fill-white"
          >
            <path d="M749 548 1190 0H1088L701 464 396 0H0L468 701 0 1227h102l408-480 319 480h393L749 548Zm-144 170-47-70-339-502h150l270 398 47 69 356 524h-147l-290-419Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;
