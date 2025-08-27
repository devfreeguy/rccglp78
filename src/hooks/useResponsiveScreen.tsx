import { useState, useEffect } from "react";

type responsiveScreenTypes = {
  isPhoneScreen?: boolean;
  isMiniTabletScreen?: boolean;
  isTabletScreen?: boolean;
  isLaptopScreen?: boolean;
  isDesktopScreen?: boolean;
  isLargeDesktopScreen?: boolean;
  isXLargeDesktopScreen?: boolean;
  isSmallerDevices?: boolean;
  isMediumDevices?: boolean;
  isLargerDevices?: boolean;
};

const useResponsiveScreen = () => {
  const getScreenSize = () => {
    const width = window.innerWidth;
    return {
      isPhoneScreen: width <= 480, // xs
      isMiniTabletScreen: width > 480 && width <= 640, // sm
      isTabletScreen: width > 640 && width <= 768, // md
      isLaptopScreen: width > 768 && width <= 1024, // lg
      isDesktopScreen: width > 1024 && width <= 1280, // xl
      isLargeDesktopScreen: width > 1280 && width <= 1536, // 2xl
      isXLargeDesktopScreen: width > 1536, // 3xl and up
      //
      isSmallerDevices: width < 768,
      isMediumDevices: width >= 768 && width < 1024,
      isLargerDevices: width > 1024,
    };
  };

  const [screenSize, setScreenSize] = useState<responsiveScreenTypes>(
    getScreenSize()
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useResponsiveScreen;
