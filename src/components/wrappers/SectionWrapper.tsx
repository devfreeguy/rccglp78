import { type ReactNode } from "react";

interface ISectionWrapper {
  children: ReactNode;
  className?: string;
  innerSpacing?: boolean;
  backgroundImageUrl?: string;
}

const SectionWrapper = ({
  children,
  className,
  innerSpacing = false,
  backgroundImageUrl,
}: ISectionWrapper) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className={`bg-cover bg-no-repeat ${
        innerSpacing ? "w-full px-[calc(100%-11/12)]" : "w-11/12"
      } flex mx-auto max-w-5xl ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
