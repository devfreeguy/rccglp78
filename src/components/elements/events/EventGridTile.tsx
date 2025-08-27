import { useState } from "react";
import { motion } from "motion/react";
import { EventPlaceholderImage } from "../../../assets/images";
import { Link } from "react-router-dom";

interface IEventGridTile {
  title: string;
  desc?: string;
  link?: string;
  onClick?: () => void;
}

const EventGridTile = ({ title, desc, link, onClick }: IEventGridTile) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      className={`relative w-full h-full ${
        isHovering ? "flex-3" : "flex-1"
      } transition-all duration-500 overflow-hidden cursor-pointer`}
    >
      <img
        src={EventPlaceholderImage}
        alt=""
        className="size-full object-cover"
      />

      <div
        className={`absolute top-0 left-0 flex flex-col justify-end size-full p-6 gap-2 ${
          isHovering ? "bg-primary/60" : "bg-neutral/50"
        } transition-all duration-700`}
      >
        <motion.h3
          initial={{ y: "400%" }}
          animate={isHovering ? { y: 0 } : { y: "400%" }}
          className="font-medium text-xl text-white"
        >
          {title}
          {link && (
            <Link to={link}>
              <i className="mgc_external_link_line text-white"></i>
            </Link>
          )}
        </motion.h3>

        {desc && (
          <motion.p
            initial={{ y: "400%" }}
            animate={isHovering ? { y: 0 } : { y: "400%" }}
            className="text-gray-300 text-xs md:text-sm"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default EventGridTile;
