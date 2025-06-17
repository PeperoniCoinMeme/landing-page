import React from "react";
import styles from "./AnimatedMenuButton.module.css";

interface AnimatedMenuButtonProps {
  onClick?: () => void;
}

const AnimatedMenuButton: React.FC<AnimatedMenuButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles.menuButton}
      aria-label="Abrir menú de navegación"
      onClick={onClick}
    >
      ☰
    </button>
  );
};

export default AnimatedMenuButton;
