const CustomAnimations = {
  reveal: {
    main: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    slider: {
      hidden: { left: 0 },
      visible: { left: "100%" },
    },
    container: {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  },
  zoomAndFadeIn: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default CustomAnimations;
