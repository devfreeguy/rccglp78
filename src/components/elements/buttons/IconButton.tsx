import type { IButton } from "../../../types/comp.types";
import { buttonVariantStyles } from "../../../utils/global.util";

interface IIconButton extends IButton {
  small?: boolean;
  iconName: string;
  onClick?: () => void;
  onClickWithEvent?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const IconButton = ({
  id,
  onClick,
  onClickWithEvent,
  iconName,
  small = false,
  variant,
  className,
  isSoftButton,
  size = "md",
}: IIconButton) => {
  const sizes = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
    xl: "btn-xs",
  };

  return (
    <button
      id={id}
      onClick={(e) => {
        if (onClick) onClick();
        if (onClickWithEvent) onClickWithEvent(e);
      }}
      className={`btn btn-circle ${sizes[size]} ${
        isSoftButton ? "btn-soft" : ""
      } ${
        variant ? buttonVariantStyles[variant] : "btn-ghost hover:bg-white/20"
      }  ${small ? "btn-sm" : ""} ${className}`}
    >
      <i className={`mgc_${iconName}_line ${small ? "text-sm" : "text-lg"}`} />
    </button>
  );
};

export default IconButton;
