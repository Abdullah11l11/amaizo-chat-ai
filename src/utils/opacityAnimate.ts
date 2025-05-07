export const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  exit: { opacity: 0 },
};
export const mainVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "linear",
    },
  },
};

export const scaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "linear",
    },
  },
};
