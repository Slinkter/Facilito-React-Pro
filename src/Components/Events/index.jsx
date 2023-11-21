import EventItem from "./components/EventItem";
import dataJS from "../../data/events.json";
import { useState } from "react";

const Events = () => {
  const [data] = useState(dataJS);
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log("evento clickado : ", id);
  };

  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}
      onEventClick={handleEventItemClick}
      id={eventItem.id}
    />
  ));

  return (
    <div>
      <h1> Events :</h1>
      {eventsComponent}
    </div>
  );
};

export default Events;
