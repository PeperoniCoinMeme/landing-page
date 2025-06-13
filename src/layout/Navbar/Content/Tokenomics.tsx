import React from "react";

const TokenomicsContent = () => {
  return (
    <div className="h-auto w-64 bg-[var(--color-card-bg)] p-6 shadow-md rounded-lg border border-[var(--color-border)]">
      <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        📊 Tokenomics
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-[var(--color-text)] mb-1">
            <span>Liquidity</span>
            <span className="font-medium">50%</span>
          </div>
          <div className="w-full bg-[var(--color-muted)]/20 rounded-full h-2">
            <div
              className="bg-[var(--color-accent)] h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm text-[var(--color-text)] mb-1">
            <span>Burned</span>
            <span className="font-medium">20%</span>
          </div>
          <div className="w-full bg-[var(--color-muted)]/20 rounded-full h-2">
            <div
              className="bg-[var(--color-secondary)] h-2 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm text-[var(--color-text)] mb-1">
            <span>Team</span>
            <span className="font-medium">10%</span>
          </div>
          <div className="w-full bg-[var(--color-muted)]/20 rounded-full h-2">
            <div
              className="bg-[var(--color-tertiary)] h-2 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-[var(--color-muted)] italic">
        "Like a pizza, every slice matters."
      </p>
      <div className="mt-4 bg-[var(--color-success)]/10 border border-[var(--color-success)]/40 rounded-md p-3 text-xs text-[var(--color-success)]">
        🔍 <span className="font-semibold">Note:</span> All tokens are audited
        and secured. Check our{" "}
        <a href="#" className="underline hover:text-[var(--color-text)]">
          smart contract
        </a>{" "}
        for transparency.
      </div>
    </div>
  );
};

export default TokenomicsContent;
