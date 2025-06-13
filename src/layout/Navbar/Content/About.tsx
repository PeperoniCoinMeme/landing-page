import React from "react";

const AboutContent = () => {
  return (
    <div className="h-auto w-[300px] bg-[var(--color-card-bg)] p-6 shadow-md border border-[var(--color-tertiary)]/30">
      <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-3">
        📌 About Peperoni Coin
      </h3>
      <p className="text-sm text-[var(--color-text)] mb-4">
        The first crypto backed by{" "}
        <span className="font-medium text-[var(--color-tertiary)]">
          real pizza
        </span>
        . Earn rewards, redeem for delivery, and participate in our growing
        ecosystem.
      </p>
      <div className="bg-[var(--color-bg)] p-3 rounded-md border border-[var(--color-tertiary)]/30">
        <p className="text-xs text-[var(--color-text)] leading-relaxed">
          <span className="font-semibold text-[var(--color-tertiary)]">
            Roadmap Q3 2024:
          </span>
          <br />
          – Launch staking features 🍕
          <br />
          – Introduce ingredient NFTs 🧀
          <br />– Expand pizza partner network 🍽️
        </p>
      </div>
      <button className="mt-4 w-full bg-[var(--color-accent)] hover:brightness-110 text-[var(--color-button-text)] py-2 px-4 rounded-md text-sm font-semibold transition-all shadow hover:shadow-[var(--color-accent)]/30">
        Join our Telegram
      </button>
    </div>
  );
};

export default AboutContent;
