import { useRef } from "react";
import { goldStar } from "../../assets";
import LandingText from "../design/tipography/LandingText";

interface GlowCardProps {
  card: any;
  index: number;
  children?: React.ReactNode;
  textColor?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({
  card,
  index,
  children,
  textColor,
}) => {
  // refs for all the cards
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", `${angle + 60}deg`);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="landing-smooth timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column shadow-lg text-gray-800 border-1 border-gray-300 max-w-80 bg-white/10"
      style={{}}
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src={goldStar} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <LandingText className={`${textColor}`}>{card.review}</LandingText>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
