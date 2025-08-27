import { ApostleStephenImage } from "../../../../assets/images";
import InfoCard from "../../../elements/cards/InfoCard";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";

const ApostleStephen = () => {
  return (
    <PageWrapper className="min-h-fit flex bg-apostle-stephen-bg items-center justify-center">
      <SectionWrapper>
        <InfoCard
          className="my-4.5 sm:my-8"
          imagePath={ApostleStephenImage}
          headingText={<pre>{`Chat with\nApostle Stephen.`}</pre>}
          textContent="APOSTLE STEPHEN (The RCCG Intelligent Virtual Apostle) provides Christian Believers (of any denomination) and non-believers searching for the TRUTH in the word of the living God with helpful resources, commentaries on tough scriptural verses and answers to difficult biblical questions"
          actions={[
            {
              label: "Learn more",
              btnOutlined: true,
              btnAction: () => {},
            },
            {
              label: "Ask Stephen",
              btnAction: () => {},
            },
          ]}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ApostleStephen;
