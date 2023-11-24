import { useState } from "react";
const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvents = async (params) => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=RUMlldV5z0lh0xli5AJAgYWF13TePTL7&countryCode=MX${
      params?.length ? params : ""
    }`;

    console.log("fetchEvents");
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);

      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
