import "./JoinButton.css";
import React from "react";

const JoinButton: React.FC = () => {
  const joinTodayText = "JoinToday";
  const joinNowText = "JoinNow";

  return (
    <>
      {" "}
      <button className="join-button">
        <div className="bg" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 342 208"
          height={208}
          width={342}
          className="splash"
        >
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
          />
        </svg>

        <div className="wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 221 42"
            height={42}
            width={221}
            className="path"
          >
            <path
              strokeLinecap="round"
              strokeWidth={3}
              d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
            />
          </svg>

          <div className="outline" />
          <div className="content">
            <span className="char state-1">
              {joinTodayText.split("").map((char, i) => (
                <span
                  key={`today-${i}`}
                  data-label={char}
                  style={{ "--i": i + 1 } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>

            <div className="icon">
              <div />
            </div>

            <span className="char state-2">
              {joinNowText.split("").map((char, i) => (
                <span
                  key={`now-${i}`}
                  data-label={char}
                  style={{ "--i": i + 1 } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default JoinButton;
