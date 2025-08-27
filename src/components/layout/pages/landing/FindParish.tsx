import { LandingData } from "../../../../data";
import Button from "../../../elements/buttons/Button";
import ParishInfoCard from "../../../elements/cards/ParishInfoCard";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";

const FindParish = () => {
  return (
    <PageWrapper className="min-h-fit bg-find-parish-bg">
      <SectionWrapper className="flex-col py-10 items-center justify-center gap-6">
        {/* Title */}
        <h2 className="text-white text-center text-2xl font-extrabold">
          Find A Parish Near You
        </h2>

        {/* Parish List */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {LandingData.findParish.data.map(
            ({ name, pic, address, socials }, i) => (
              <ParishInfoCard
                key={i}
                name={name}
                pic={pic}
                address={address}
                socials={socials}
              />
            )
          )}
        </div>

        {/* CTA */}
        <div className="flex mx-auto [&_*]:border-white [&_*]:text-white!">
          <Button
            outlined
            label="See More"
            variant="neutral"
            iconName="right_line text-xs "
            className="flex-row-reverse"
            size="sm"
          />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FindParish;
