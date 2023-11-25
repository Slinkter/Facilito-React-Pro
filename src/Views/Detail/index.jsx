import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { format } from "date-fns";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const url = `
          https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=RUMlldV5z0lh0xli5AJAgYWF13TePTL7`;
        const res = await fetch(url);
        const data = await res.json();
        setEventData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };

    fetchEventData();
    return () => {};
  }, []);

  console.log(eventData);
  console.log(error);
  console.log(isLoading);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando evento</div>;
  }
  if (Object.keys(error) > 0) {
    return <div>Ha ocurrido error</div>;
  }

  /* const fecha = format(
    new Date(eventData?.dates?.start?.dateTime),
    "d LLLL yyyy"
  ) */
  const fecha = eventData?.dates?.start.dateTime ? (
    <p>{format(new Date(eventData.dates.start.dateTime), "d LLLL yyyy")}</p>
  ) : null;

  console.log(fecha);

  return (
    <div className={style.container}>
      <div className={style.mainInfoContainer}>
        <img
          src={eventData.images?.[0].url}
          className={style.eventImage}
          alt={eventData.name}
        />
        <h4 className={style.eventName}>{eventData.name}</h4>
        <p className={style.infoParagraph}>{eventData.info}</p>

        <p className={style.dateParagraph}>{fecha}</p>
      </div>
      <div className={style.seatInfoContainer}>
        <h5> Mapa concierto </h5>
        <img src={eventData.seatmap.staticUrl} alt="seatmaop event" />
        <p>{eventData.placesNote}</p>
        <p>Rango de precios : {eventData.priceRanges?.[0].min}</p>
      </div>
    </div>
  );
};

export default Detail;
