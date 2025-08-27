import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import EventGrid from "../../events/EventGrid";
import WatchLive from "../../global/banners/WatchLive";

const LiveAndEvents = () => {
  return (
    <PageWrapper>
      <SectionWrapper className="py-8 flex-col gap-8">
        <WatchLive />
        <EventGrid />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default LiveAndEvents;
