import React from "react";

import {
  CurrencyDollarIcon,
  FireIcon,
  GiftIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const PricingContent = () => {
  return (
    <div className="flex w-full max-w-[400px] bg-[var(--color-card-bg)] p-6 shadow-lg rounded-lg border border-[var(--color-border)]">
      {/* Panel Izquierdo */}
      <div className="w-6/12 pr-4 flex flex-col space-y-4">
        <div className="flex items-center bg-[var(--color-bg)] shadow-sm p-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-muted)]/10 transition-colors cursor-pointer">
          <CurrencyDollarIcon className="h-5 w-5 text-[var(--color-accent)] mr-2" />
          <span className="text-sm text-[var(--color-text)] font-medium">
            Overview
          </span>
        </div>
        <div className="flex items-center bg-[var(--color-bg)] shadow-sm p-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-muted)]/10 transition-colors cursor-pointer">
          <FireIcon className="h-5 w-5 text-[var(--color-secondary)] mr-2" />
          <span className="text-sm text-[var(--color-text)] font-medium">
            Highlights
          </span>
        </div>
        <div className="flex items-center bg-[var(--color-bg)] shadow-sm p-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-muted)]/10 transition-colors cursor-pointer">
          <GiftIcon className="h-5 w-5 text-[var(--color-success)] mr-2" />
          <span className="text-sm text-[var(--color-text)] font-medium">
            Benefits
          </span>
        </div>
        <div className="flex items-center bg-[var(--color-bg)] shadow-sm p-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-muted)]/10 transition-colors cursor-pointer">
          <ClockIcon className="h-5 w-5 text-[var(--color-tertiary)] mr-2" />
          <span className="text-sm text-[var(--color-text)] font-medium">
            Next Steps
          </span>
        </div>
      </div>

      {/* Panel Derecho */}
      <div className="w-80 pl-4 bg-[var(--color-bg)] p-6 border border-[var(--color-border)] shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
          🍕 PEPERONI COIN
        </h3>
        <p className="text-sm text-[var(--color-muted)] mb-4">
          A fresh take on community-backed tokens. Explore how we blend digital
          value with real-world experiences.
        </p>
        <ul className="list-disc pl-5 text-sm text-[var(--color-muted)] space-y-2">
          <li>Community governance in action</li>
          <li>Rewards that you can taste (literally!)</li>
          <li>Real pizza, real perks, real blockchain</li>
        </ul>
        <div className="mt-4 bg-[var(--color-accent)]/10 p-3 rounded-md text-center border border-[var(--color-accent)]/30">
          <p className="text-xs text-[var(--color-accent)] italic">
            Tip: Stay active in our channels to earn exclusive rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingContent;
