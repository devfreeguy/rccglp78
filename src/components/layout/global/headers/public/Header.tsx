import { RccgLogo } from "../../../../../assets/images";
import SectionWrapper from "../../../../wrappers/SectionWrapper";
import Nav from "../../navs/public/Nav";
import useGlobalStore from "../../../../../stores/globalStore";
import IconButton from "../../../../elements/buttons/IconButton";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import GeneralAnimations from "../../../../../animations/general";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const { togglePublicNav, openPublicNav } = useGlobalStore();

  const changeHeaderBg = () => {
    setScrolledDown(window.pageYOffset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBg);
    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <motion.header
      variants={GeneralAnimations.slideDown}
      initial="from"
      animate="to"
      transition={{ duration: 0.7 }}
      className={`w-screen flex fixed top-0 left-0 z-1000 items-center justify-between h-20 ${
        openPublicNav ? "bg-nav-bg" : scrolledDown ? "bg-nav-bg h-16" : ""
      } transition-all`}
    >
      <SectionWrapper className="justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <img
            src={RccgLogo}
            alt="RCCG LOGO"
            className="size-9 md:size-12 object-contain select-none"
          />

          <h1 className="text-white leading-snug text-xs font-medium">
            Breakthrough
            <br />
            Cathedral LP78
          </h1>
        </div>

        {/* Nav */}
        <Nav />

        {/* Nav toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          <IconButton iconName="search" className="[&_i]:text-white!" />

          <IconButton
            iconName="menu"
            onClick={togglePublicNav}
            className="[&_i]:text-white! md:hidden"
          />
        </div>
      </SectionWrapper>
    </motion.header>
  );
};

export default Header;
