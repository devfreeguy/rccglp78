import type { IButton } from "../../../types/comp.types";

const Button = ({
  id,
  icon,
  type,
  loading,
  onClick,
  tabIndex,
  iconName,
  disabled,
  className,
  ariaLabel,
  variant = "primary",
  label = "Add a label",
  size = "md",
  isSoftButton = false,
  outlined = false,
}: IButton) => {
  const sizes = {
    xs: "btn-xs md:btn-sm",
    sm: "btn-sm md:btn-md",
    md: "md:btn-lg",
    lg: "btn-lg md:btn-xl",
    xl: "btn-xl",
  };

  const btnVariant = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    neutral: "btn-neutral",
    error: "btn-error",
    warning: "btn-warning",
    success: "btn-success",
  };

  return (
    <button
      id={id}
      onClick={onClick}
      aria-busy={loading}
      tabIndex={tabIndex}
      data-loading={loading}
      aria-label={ariaLabel}
      type={type || "button"}
      data-testid="filled-button"
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={`btn flex px-6 py-3 gap-3 justify-center items-center transition-all ${
        sizes[size]
      } ${isSoftButton ? "btn-soft" : outlined ? "btn-outline" : ""} ${
        btnVariant[variant]
      } cursor-pointer whitespace-nowrap line-clamp-1 disabled:bg-disabled disabled:text-disabled-content hover:scale-105 rounded-full duration-500 ${className}`}
    >
      {icon}
      {iconName && <i className={`mgc_${iconName}_line text-xl`}></i>}
      {label && label}
    </button>
  );
};

export default Button;
