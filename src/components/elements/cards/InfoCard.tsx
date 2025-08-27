import { useState, type ReactNode } from "react";
import type { IButton } from "../../../types/comp.types";
import BadgesTile from "../badges/BadgesTile";
import Button from "../buttons/Button";
import type { badgeVariant, labelType } from "../../../types/global.types";
import { TileBgImage } from "../../../assets/images";
import { upperFirst } from "lodash";
import TextReveal from "../animations/TextReveal";
import { motion } from "motion/react";
import GeneralAnimations from "../../../animations/general";
import ContainerReveal from "../animations/ContainerReveal";

interface InforCardAction {
  label: string;
  btnVariant?: IButton["variant"];
  btnOutlined?: boolean;
  btnAction: () => void;
}

export interface InfoCardInterface {
  label?: labelType;
  imagePath?: string;
  className?: string;
  headingText: string | ReactNode;
  textContent?: string | ReactNode;
  actions: Partial<InforCardAction>[] | [];
  vectorImage?: string;
}

const InfoCard = ({
  imagePath,
  label,
  headingText,
  textContent,
  actions,
  className,
  vectorImage,
}: InfoCardInterface) => {
  const { fadeIn, zoomIn } = GeneralAnimations;
  const [isInView, setIsInView] = useState(false);

  const labelVariant = {
    "online-giving": "yellow",
    program: "green",
    podcast: "red",
    article: "blue",
  };

  return (
    <ContainerReveal
      getIsInView={(inView) => setIsInView(inView || false)}
      className={`w-full h-full flex flex-col sm:flex-row items-center justify-center bg-base-200 rounded-xl overflow-hidden ${className}`}
    >
      {/* Image */}

      {imagePath && (
        <div className="flex w-fit items-center justify-center bg-base-200">
          <img
            src={imagePath}
            className="w-7/10 m-8 min-w-60 max-w-82 aspect-square object-fit"
          />
        </div>
      )}

      {/* Body */}
      <div
        style={{ backgroundImage: `url(${TileBgImage})` }}
        className="relative w-full h-full flex flex-col gap-2 p-6 bg-cover bg-no-repeat"
      >
        {/* Label */}
        {label && (
          <div className="flex w-full justify-end">
            <motion.div
              variants={{ ...fadeIn, ...zoomIn }}
              initial="from"
              animate={isInView ? "to" : "from"}
            >
              <BadgesTile
                size="sm"
                bgVariant={labelVariant[label] as badgeVariant}
              >
                {upperFirst(label.replaceAll("-", " "))}
              </BadgesTile>
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="h-full flex flex-col gap-4 z-10">
          {/* Heading */}
          {headingText && (
            <TextReveal style="bg-gray-400">
              <h2 className="w-full text-xl font-extrabold">{headingText}</h2>
            </TextReveal>
          )}

          {/* Text center */}
          {textContent && (
            <TextReveal style="bg-gray-400">
              <p>{textContent}</p>
            </TextReveal>
          )}

          <div className="flex-1"></div>

          {/* Actions */}
          {actions.length > 0 && (
            <div className="inline items-center">
              {actions.map(
                (
                  {
                    label = "",
                    btnAction,
                    btnOutlined = false,
                    btnVariant = "neutral",
                  },
                  i
                ) => (
                  <Button
                    key={i}
                    label={label.toUpperCase()}
                    className="inline-flex w-fit m-2 ml-0 md:btn-md!"
                    onClick={btnAction}
                    variant={btnVariant}
                    outlined={btnOutlined}
                  />
                )
              )}
            </div>
          )}
        </div>

        {vectorImage && (
          <img
            src={vectorImage}
            className="size-40 object-fit absolute bottom-0 right-0 opacity-25"
          />
        )}
      </div>
    </ContainerReveal>
  );
};

export default InfoCard;
