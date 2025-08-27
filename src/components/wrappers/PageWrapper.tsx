import { type ReactNode } from "react";

interface IPageWrapper {
  children: ReactNode;
  className?: string;
  backgroundImageUrl?: string;
}

const PageWrapper = ({
  children,
  className,
  backgroundImageUrl,
}: IPageWrapper) => {
  return (
    <main
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className={`w-screen min-h-dvh bg-cover bg-no-repeat ${className}`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
