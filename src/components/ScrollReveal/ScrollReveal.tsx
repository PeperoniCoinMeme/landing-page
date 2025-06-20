import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="your-class"
    >
      <h2>Hola mundo</h2>
    </motion.div>
  );
};

export default ScrollReveal;
