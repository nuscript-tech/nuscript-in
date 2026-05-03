import { motion, AnimatePresence } from "framer-motion";

export default function SlideWrapper({ children, slideKey, direction }) {
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-16 pb-24"
      >
        <div className="w-full max-w-6xl">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}
