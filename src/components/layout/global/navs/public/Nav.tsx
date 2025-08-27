import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GlobalData } from "../../../../../data";
import useGlobalStore from "../../../../../stores/globalStore";
import IconButton from "../../../../elements/buttons/IconButton";
import { useResponsiveScreen, useClickOutside } from "../../../../../hooks";
import GeneralAnimations from "../../../../../animations/general";

const Nav = () => {
  const { openPublicNav, togglePublicNav } = useGlobalStore();
  const { isSmallerDevices } = useResponsiveScreen();

  useEffect(() => {
    document.documentElement.style.overflow = openPublicNav ? "hidden" : "auto";
  }, [openPublicNav]);

  const navRef = useClickOutside(() => {
    if (openPublicNav) togglePublicNav(false);
  });

  return (
    <motion.nav
      ref={navRef}
      variants={GeneralAnimations.slideDown}
      initial="from"
      animate={openPublicNav || !isSmallerDevices ? "to" : "from"}
      transition={{ ease: "anticipate" }}
      className={
        isSmallerDevices
          ? "fixed top-0 right-0 w-full max-w-sm md:w-fit h-full py-20 bg-nav-bg -translate-y-[200%]"
          : ""
      }
    >
      {isSmallerDevices && (
        <IconButton
          onClick={togglePublicNav}
          iconName="close"
          className="[&_i]:text-white! fixed top-10 -translate-y-1/2 right-4"
        />
      )}

      <ul className="flex flex-col md:flex-row gap-2 w-full md:w-fit h-full p-3">
        {GlobalData.publicNav.map(({ destination, label }, i) => (
          <Link
            key={i}
            to={destination}
            className="p-3 md:py-0 md:px-2 md:w-fit hover:[&_li]:border-white hover:[&_li]:text-white transition-all"
          >
            <li
              onClick={() => togglePublicNav()}
              className="w-full md:w-max h-fit font-medium text-gray-300 md:text-sm border-b-2 border-transparent transition-all"
            >
              {label.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
