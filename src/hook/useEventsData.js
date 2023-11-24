import { useEffect, useState } from "react";
const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Load API Call
    console.log("useeffect");
    const url =
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=RUMlldV5z0lh0xli5AJAgYWF13TePTL7&countryCode=MX";

    const fetchEvents = async () => {
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
    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
