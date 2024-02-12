export const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  export const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  export const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  export const listVariants = {
    closed: {
      y: "-20vw",
    },
    opened: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.4,
        ease: 'linear'
      },
    },
  };

  export const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
