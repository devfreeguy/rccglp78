const GeneralAnimations = {
  // Slide
  slideUp: {
    from: {
      y: 100,
    },
    to: {
      y: 0,
    },
  },
  slideDown: {
    from: {
      y: "-100%",
    },
    to: {
      y: 0,
    },
  },
  // Zooms
  zoomIn: {
    from: {
      scale: 0.8,
    },
    to: {
      scale: 1,
    },
  },
  zoomOut: {
    from: {
      scale: 1,
    },
    to: {
      scale: 0.8,
    },
  },
  // Fades
  fadeIn: {
    from: {
      opacity: 0.5,
    },
    to: {
      opacity: 1,
    },
  },
  fadeOut: {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
};

export default GeneralAnimations;
