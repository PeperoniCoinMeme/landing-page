import React, {
  useState,
  useEffect,
  type CSSProperties,
  type ReactNode,
} from "react";

interface HeadroomProps {
  children: ReactNode;
  disable?: boolean;
  upTolerance?: number;
  downTolerance?: number;
  pinStart?: number;
  wrapperStyle?: CSSProperties;
  className?: string;
  onUnpin?: () => void;
  onPin?: () => void;
  onUnfix?: () => void;
}

interface HeadroomState {
  className: string;
  translateY: string | number;
  lastScrollY: number;
}

const Headroom: React.FC<HeadroomProps> = ({
  children,
  disable = false,
  upTolerance = 5,
  downTolerance = 0,
  pinStart = 0,
  wrapperStyle = {},
  className = "",
  onUnpin,
  onPin,
  onUnfix,
}) => {
  const [state, setState] = useState<HeadroomState>({
    className: "headroom",
    translateY: 0,
    lastScrollY: 0,
  });

  useEffect(() => {
    if (disable) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setState((prevState) => {
            const { lastScrollY } = prevState;
            const scrollDirection = scrollY > lastScrollY ? "down" : "up";
            const distanceScrolled = Math.abs(scrollY - lastScrollY);

            // Top of the page
            if (scrollY <= pinStart) {
              if (prevState.className !== "headroom headroom--unfixed") {
                onUnfix?.();
                return {
                  className: "headroom headroom--unfixed",
                  translateY: 0,
                  lastScrollY: scrollY,
                };
              }
              return { ...prevState, lastScrollY: scrollY };
            }

            // Scrolling down
            if (scrollDirection === "down") {
              if (
                prevState.className !== "headroom headroom--unpinned" &&
                distanceScrolled > downTolerance
              ) {
                onUnpin?.();
                return {
                  className: "headroom headroom--unpinned",
                  translateY: "-100%",
                  lastScrollY: scrollY,
                };
              }
            }
            // Scrolling up
            else if (scrollDirection === "up") {
              if (
                prevState.className !== "headroom headroom--pinned" &&
                distanceScrolled > upTolerance
              ) {
                onPin?.();
                return {
                  className: "headroom headroom--pinned",
                  translateY: "0",
                  lastScrollY: scrollY,
                };
              }
            }

            return { ...prevState, lastScrollY: scrollY };
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [disable, downTolerance, upTolerance, pinStart, onPin, onUnpin, onUnfix]);

  const style: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transform: `translateY(${state.translateY})`,
    transition: "all .2s ease-in-out",
    ...wrapperStyle,
  };

  return (
    <div style={style} className={`${state.className} ${className}`}>
      {children}
    </div>
  );
};

export default Headroom;
