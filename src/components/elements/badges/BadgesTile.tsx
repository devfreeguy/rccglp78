import type { ReactNode } from "react";
import type {
  badgeVariant,
  sizes,
  variants,
} from "../../../types/global.types";

interface IBadges {
  size?: sizes;
  variant?: variants;
  bgVariant?: badgeVariant;
  children: ReactNode;
}

const BadgesTile = ({
  size = "md",
  variant = "primary",
  bgVariant,
  children,
}: IBadges) => {
  const badgeVariants = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    neutral: "badge-neutral",
    error: "badge-error",
    warning: "badge-warning",
    success: "badge-success",
  };

  const bgVariants = {
    yellow: "bg-label-yellow border-label-yellow",
    blue: "bg-label-blue border-label-blue",
    red: "bg-label-red border-label-red",
    green: "bg-label-green border-label-green",
  };

  const badgeSizes = {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg",
    xl: "badge-xl",
  };

  return (
    <div
      className={`badge ${badgeVariants[variant]} ${
        bgVariant ? bgVariants[bgVariant] : ""
      } ${badgeSizes[size]}`}
    >
      {children}
    </div>
  );
};

export default BadgesTile;
