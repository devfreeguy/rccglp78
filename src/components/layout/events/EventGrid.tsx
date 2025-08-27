import EventGridTile from "../../elements/events/EventGridTile";

const EventGrid = () => {
  return (
    <section className="w-full h-[420px] md:h-96 flex flex-col md:flex-row rounded-2xl md:rounded-3xl bg-neutral overflow-hidden">
      <EventGridTile
        title="Watch Weekly Services Live"
        desc="Live Broadcast of all RCCG events are available here for your edification."
      />
      <EventGridTile
        title="Watch Breakthrough Services Live"
        desc="Live Broadcast of all RCCG events are available here for your edification."
      />
      <EventGridTile
        title="Watch Past Events"
        desc="Live Broadcast of all RCCG events are available here for your edification."
      />
    </section>
  );
};

export default EventGrid;
