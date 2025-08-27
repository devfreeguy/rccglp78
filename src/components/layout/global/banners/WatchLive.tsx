import { useState } from "react";
import Button from "../../../elements/buttons/Button";
import { WatchLivePlaceholderImage } from "../../../../assets/images";

const WatchLive = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onBlur={() => setIsHovering(false)}
      className="relative w-full aspect-video sm:aspect-[2/1] md:aspect-[32/9] flex bg-neutral rounded-2xl sm:rounded-3xl overflow-hidden outline-3 outline-transparent hover:outline-youtube transition-all duration-700 cursor-pointer"
    >
      {/* Bg cover */}
      <img
        src={WatchLivePlaceholderImage}
        alt="Youtube Live"
        className={`w-full object-cover ${
          isHovering ? "scale-150" : "scale-100"
        } duration-700`}
      />

      {/* Content */}
      <div
        className={`absolute flex items-center w-full h-full justify-center   ${
          isHovering ? "bg-primary/60" : "bg-primary/5"
        } duration-700`}
      >
        <Button
          label="WATCH NOW"
          className={`w-min bg-youtube border-2 border-white ${
            isHovering ? "scale-115" : "scale-100"
          } duration-700`}
          variant="secondary"
        />
      </div>

      {/* Label */}
      {/* <div className="w-2/4 absolute top-4 -right-8 bg-youtube text-white text-sm rotate-30 text-center">
        WATCH LIVE
      </div> */}
    </section>
  );
};

export default WatchLive;
