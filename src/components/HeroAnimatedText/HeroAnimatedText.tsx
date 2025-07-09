// HeroAnimatedText.tsx
import { useEffect, useState } from "react";
import "./HeroAnimatedText.css";

const phrases = [
  {
    icon: "🔥 ",
    label: "Cook your investments",
  },
  {
    icon: "🍕 ",
    label: "Season your economics",
  },
  {
    icon: "💰 ",
    label: "Cripto with flavour",
  },
];

const HeroAnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row align-center text-2xl">
      <span>{phrases[index].icon}</span>
      <h6 className="text-white">{phrases[index].label}</h6>
    </div>
  );
};

export default HeroAnimatedText;
