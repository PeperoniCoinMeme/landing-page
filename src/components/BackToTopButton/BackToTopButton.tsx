import { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mainSection = document.getElementById("hero"); // 👈 cambia el ID si tu sección principal tiene otro
    if (!mainSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting); // Mostrar botón si NO está visible
      },
      { threshold: 0.6 }
    );

    observer.observe(mainSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 px-4 py-2 bg-black text-white rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      Go up ⬆
    </button>
  );
};

export default BackToTopButton;
