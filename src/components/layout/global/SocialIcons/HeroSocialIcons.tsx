import { Link } from "react-router-dom";
import { GlobalData } from "../../../../data";
import IconButton from "../../../elements/buttons/IconButton";

interface IHeroSocialIcons {
  orientation?: "row" | "col";
  className?: string;
  small?: boolean;
}

const HeroSocialIcons = ({
  orientation = "row",
  className,
  small = false,
}: IHeroSocialIcons) => {
  return (
    <div className={`flex flex-${orientation} gap-1 ${className}`}>
      {GlobalData.socialMedia.map(({ iconName, link }, i) => (
        <Link to={link} key={i}>
          <IconButton iconName={iconName} small={small} />
        </Link>
      ))}
    </div>
  );
};

export default HeroSocialIcons;
