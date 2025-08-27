import { useState } from "react";
import { Link } from "react-router-dom";
import { RccgLogo } from "../../../assets/images";
import IconButton from "../buttons/IconButton";
import GeneralAnimations from "../../../animations/general";
import { motion } from "motion/react";
import ContainerReveal from "../animations/ContainerReveal";

interface ISocial {
  id: string;
  link: string;
}

interface IParishInfo {
  name: string;
  pic: string;
  address: string;
  socials: ISocial[];
}

const ParishInfoCard = ({ name, pic, address, socials }: IParishInfo) => {
  const { fadeIn, zoomIn } = GeneralAnimations;
  const [isInView, setIsInView] = useState(false);

  return (
    <ContainerReveal
      getIsInView={(inView) => setIsInView(inView || false)}
      className="flex flex-col gap-5 p-4 border border-gray-200 rounded-3xl backdrop-blur-3xl bg-gray-50/8 shadow-sm shadow-gray-800 [&_*]:text-gray-100"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <img src={RccgLogo} alt="RCCG Logo" className="size-10" />
        <div className="flex flex-col gap-1">
          <h6 className="text-sm font-medium text-white!">{name}</h6>
          <span className="text-xs w-full">{pic}</span>
        </div>
      </div>

      {/* Address */}
      <span className="text-xs w-4/5 font-light">{address}</span>

      {/* Others */}
      <div className="flex items-end justify-between gap-2 w-full">
        {/* Socials */}
        <div className="flex items-center gap-1">
          {socials.map(({ id, link }, i) => (
            <Link to={link} key={i}>
              <i className={`mgc_${id}_fill text-lg p-1`} />
            </Link>
          ))}
        </div>

        {/* Location */}
        <motion.div
          variants={{ ...fadeIn, ...zoomIn }}
          initial="from"
          animate={isInView ? "to" : "from"}
        >
          <IconButton
            iconName="location_fill "
            className="bg-main-orange hover:bg-orange-700!"
          />
        </motion.div>
      </div>
    </ContainerReveal>
  );
};

export default ParishInfoCard;
