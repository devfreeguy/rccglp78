import { HeroImage, HeroVector } from "../../../../assets/images";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import Button from "../../../elements/buttons/Button";
import { LandingData } from "../../../../data";
import HeroStat from "../../../elements/stats/HeroStat";
import HeroSocialIcons from "../../global/SocialIcons/HeroSocialIcons";
import { useResponsiveScreen } from "../../../../hooks";
import {
  BlueGradientEllipse,
  OrangeGradientEllipse,
  OrangeGradientEllipse2,
} from "../../../../assets/vectors";
import TextReveal from "../../../elements/animations/TextReveal";
import { motion } from "motion/react";
import CustomAnimations from "../../../../animations/custom";

const Hero = () => {
  const { isSmallerDevices } = useResponsiveScreen();
  const { zoomAndFadeIn } = CustomAnimations;

  return (
    <div className="relative flex items-center justify-center w-screen h-dvh max-h-[700px] bg-neutral overflow-hidden">
      {/* Bg Image */}
      <img
        src={HeroImage}
        alt="Chruch Banner"
        className="w-full h-full object-cover"
      />

      {/* Lights */}
      <>
        <img src={BlueGradientEllipse} className="absolute top-0 left-0" />
        <img
          src={OrangeGradientEllipse2}
          className="absolute top-3/5 -translate-y-2/5 right-0"
        />
        <img
          src={OrangeGradientEllipse}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </>

      {/* Content Overlay */}
      <SectionWrapper className="flex flex-col absolute top-0 left-auto right-auto h-full items-center justify-center slide-top">
        <div className="relative w-full flex flex-col items-center sm:items-start max-w-md sm:mr-auto gap-5">
          {/* Heading */}
          <div className="relative flex w-full sm:w-fit items-center">
            <TextReveal style="bg-gray-800" delay={0}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white text-center sm:text-left w-full hyphens-manual">
                Break<span className="sm:hidden">&shy;</span>through Cathedral
              </h1>
            </TextReveal>

            <motion.img
              variants={zoomAndFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.5 }}
              src={HeroVector}
              className="w-24 absolute bottom-9 left-[calc(50%+10px)] -translate-x-1/2 sm:left-5/12 sm:bottom-12 lg:bottom-16 lg:w-28 lg:left-8/20"
            />
          </div>

          {/* Tagline */}
          <TextReveal style="bg-gray-800" delay={0}>
            <p className="md:text-xl text-gray-200 font-semibold">
              Lagos Province 78, Region 31
            </p>
          </TextReveal>

          {/* Action */}
          <motion.div
            variants={zoomAndFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.5 }}
          >
            <Button
              label="Watch us"
              className="w-min bg-youtube border-2 border-youtube hover:border-white"
              variant="secondary"
              iconName="youtube_fill sm:text-2xl "
            />
          </motion.div>
        </div>

        <HeroSocialIcons
          className={`[&_i]:text-white! absolute ${
            isSmallerDevices ? "top-1/7 right-1.5" : "right-0"
          }`}
          orientation="col"
          small={isSmallerDevices}
        />

        <div className="p-3 absolute bottom-32 left-1/2 -translate-x-1/2 sm:right-0 sm:left-auto sm:-translate-x-0 sm:bottom-8  w-fit cursor-pointer rounded-full hover:bg-white/10 hover:text-white">
          <TextReveal
            noMargin
            style="bg-gray-800"
            delay={0}
            className="flex items-center gap-2 text-gray-200"
          >
            <p className="text-sm md:text-xl font-semibold whitespace-nowrap">
              Find parishes near you
            </p>
            <i className="mgc_external_link_line"></i>
          </TextReveal>
        </div>

        {/* Stat */}
        <ul className="absolute bottom-8 left-0 w-full sm:w-fit flex items-center justify-center divide-x divide-gray-400">
          {LandingData.hero.stat.map(({ label, value }, i) => (
            <HeroStat key={i} label={label} value={value} />
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
