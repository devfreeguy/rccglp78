import { CrowdImage } from "../../../../assets/images";
import { LandingData } from "../../../../data";
import ContentCard from "../../../elements/cards/ContentCard";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";

const Surrender = () => {
  return (
    <PageWrapper className="sm:py-4">
      <SectionWrapper
        backgroundImageUrl={CrowdImage}
        className="mx-0! w-full sm:mx-auto!"
      >
        <div className="w-full h-full py-10 flex flex-col items-center justify-center bg-pink-400/60 gap-8 ">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 md:gap-4 px-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white">
              Do You Want To Give Your Life To Christ?
            </h2>
            <p className="text-lg md:text-2xl font-medium text-gray-100 text-center">
              Please follow the steps below
            </p>
          </div>

          {/* Body grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-2 md:px-4">
            {LandingData.surrender.data.map(({ title, content }, i) => (
              <ContentCard
                key={i}
                title={title}
                content={content}
                number={i + 1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Surrender;
