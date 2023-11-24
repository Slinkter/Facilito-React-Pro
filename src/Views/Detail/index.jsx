import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return <div>Detail{eventId}</div>;
};

export default Detail;
