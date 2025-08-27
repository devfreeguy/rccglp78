import { type ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import CustomAnimations from "../../../animations/custom";
import type { variants } from "../../../types/global.types";

interface IReveal {
  children: ReactNode;
  width?: "fit-content" | "100%";
  style?: `bg-${variants | string}`;
  delay?: number;
  className?: string;
  noMargin?: boolean;
}

const TextReveal = ({
  children,
  width = "fit-content",
  style = "bg-primary",
  delay = 0.25,
  className,
  noMargin = false,
}: IReveal) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: noMargin ? undefined : "-100px",
  });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref} style={{ width }} className="relative overflow-hidden">
      {/* element */}
      <motion.div
        variants={CustomAnimations.reveal.main}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </motion.div>

      {/* Revealer */}
      <motion.div
        variants={CustomAnimations.reveal.slider}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={`absolute top-0 bottom-0 left-0 right-0 ${style} z-20`}
      />
    </div>
  );
};

export default TextReveal;
