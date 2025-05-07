import { motion, Variants, MotionProps, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface AnimatedWrapperProps extends MotionProps {
  children: ReactNode;
  type?:
    | "fade"
    | "zoom"
    | "scale"
    | "slide-left"
    | "slide-right"
    | "slide-up"
    | "slide-down"
    | "rotate"
    | "shake"
    | "pulse"
    | "bounce-left"
    | "bounce-right"
    | "flash"
    | "spin";
  duration?: number;
  delay?: number;
  isVisible?: boolean;
}

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 180 },
  },
  shake: {
    hidden: { opacity: 1, x: 0 },
    visible: {
      opacity: 1,
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, x: 0 },
  },
  pulse: {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 0.8, repeat: 2 },
    },
    exit: { opacity: 0, scale: 0.8 },
  },
  "bounce-left": {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, x: -100 },
  },
  "bounce-right": {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, x: 100 },
  },
  flash: {
    hidden: { opacity: 1 },
    visible: {
      opacity: [1, 0, 1, 0, 1],
      transition: { duration: 0.8, repeat: 2 },
    },
    exit: { opacity: 0 },
  },
  spin: {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: { duration: 0.8 },
    },
    exit: { opacity: 0, scale: 0.5, rotate: 0 },
  },
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  type = "fade",
  duration = 0.5,
  delay = 0,
  isVisible = true,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={type}
          variants={animationVariants[type]}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration, delay }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedWrapper;
