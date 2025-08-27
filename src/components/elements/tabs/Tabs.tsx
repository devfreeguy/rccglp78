import { nanoid } from "nanoid";
import type { sizes } from "../../../types/global.types";

interface Tab {
  label: string;
}

interface ITab {
  list: Tab[];
  className?: string;
  isDark?: boolean;
  size?: sizes;
  getActivePos?: (val: number) => void;
}

const Tabs = ({
  list,
  className,
  size = "md",
  isDark = false,
  getActivePos,
}: ITab) => {
  const tabName = nanoid(5);

  const tabSize = {
    xs: "tabs-xs",
    sm: "tabs-sm",
    md: "tabs-md",
    lg: "tabs-lg",
    xl: "tabs-xl",
  };

  return (
    <div className={`tabs tabs-border ${tabSize[size]} ${className}`}>
      {list.map(({ label }, i) => (
        <input
          key={i}
          type="radio"
          name={tabName}
          className={`tab ${
            isDark
              ? "checked:text-white! checked:hover:text-white! text-gray-500! hover:text-gray-200!"
              : ""
          } transition-all duration-500`}
          aria-label={label}
          defaultChecked={i == 0}
          onChange={(e) => {
            if (e.target.checked && getActivePos) getActivePos(i);
          }}
        />
      ))}
    </div>
  );
};

export default Tabs;
