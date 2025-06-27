import { InstagramIcon } from "@/assets/svg/Instagram";
import { TelegramIcon } from "@/assets/svg/Telegram";
import { TikTokIcon } from "@/assets/svg/TikTok";
import { XIcon } from "@/assets/svg/X";
import React from "react";
import { motion } from "framer-motion";

interface SocialProps {
  mode?: string;
}

const iconStyle = "hover:scale-110 transition-transform duration-200";
const iconStyleHero =
  "hover:scale-110 transition-transform duration-200 opacity-50";

const Social: React.FC<SocialProps> = ({ mode }) => {
  if (mode === "footer") {
    return (
      <div className="flex gap-4 mt-2">
        <a href="https://x.com/Peperoni_Meme" className={iconStyle}>
          <XIcon width={24} height={24} />
        </a>
        <a href="https://t.me/PeperoniOven" className={iconStyle}>
          <TelegramIcon width={24} height={24} />
        </a>
        <a href="https://instagram.com/peperoni_meme" className={iconStyle}>
          <InstagramIcon width={24} height={24} />
        </a>
        <a
          href="https://www.tiktok.com/@peperoni.memecoin"
          className={iconStyle}
        >
          <TikTokIcon width={24} height={24} />
        </a>
      </div>
    );
  }

  if (mode === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-between gap-5 rounded-xl"
      >
        <a href="https://x.com/Peperoni_Meme" className={iconStyleHero}>
          <XIcon width={28} height={28} />
        </a>
        <a href="https://t.me/PeperoniOven" className={iconStyleHero}>
          <TelegramIcon width={28} height={28} />
        </a>
        <a href="https://instagram.com/peperoni_meme" className={iconStyleHero}>
          <InstagramIcon width={28} height={28} />
        </a>
        <a
          href="https://www.tiktok.com/@peperoni.memecoin"
          className={iconStyleHero}
        >
          <TikTokIcon width={28} height={28} />
        </a>
      </motion.div>
    );
  }

  return null;
};

export default Social;
