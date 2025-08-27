import { useEffect, useRef, type ReactNode } from "react";
// import GeneralAnimations from "../../../animations/general";
import { useAnimation, useInView, motion } from "motion/react";
import CustomAnimations from "../../../animations/custom";

interface IReveal {
  children: ReactNode;
  getIsInView?: (inView?: boolean) => void;
  className?: string;
  wrapperClassName?: string;
  noMargin?: boolean;
}

const ContainerReveal = ({
  children,
  className = "",
  wrapperClassName,
  getIsInView = () => {},
  noMargin = false,
}: IReveal) => {
  // const { fadeIn, slideUp } = GeneralAnimations;
  const { reveal } = CustomAnimations;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: noMargin ? undefined : "-200px",
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
    getIsInView(isInView);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`w-full h-full overflow-hidden ${wrapperClassName}`}
    >
      <motion.div
        variants={reveal.container}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-200px" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContainerReveal;
