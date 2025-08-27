import { ChurchBuilding, MediaFolder } from "../../../../assets/icons";
import InfoCard from "../../../elements/cards/InfoCard";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";

const Supports = () => {
  return (
    <PageWrapper className="min-h-fit mb-12">
      <SectionWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        <InfoCard
          headingText="Breakthrough Building Projects"
          label="online-giving"
          vectorImage={ChurchBuilding}
          actions={[
            {
              label: "Click Her To Support",
              btnAction: () => {},
            },
          ]}
        />

        <InfoCard
          headingText="RCCG LP78, Media Support"
          label="online-giving"
          vectorImage={MediaFolder}
          actions={[
            {
              label: "Click Her To Support",
              btnAction: () => {},
            },
          ]}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Supports;
