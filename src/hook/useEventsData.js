import { useEffect, useState } from "react";
import eventsData from "../data/events.json";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Load API Call
    setTimeout(() => {
      try {
        setData(eventsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
