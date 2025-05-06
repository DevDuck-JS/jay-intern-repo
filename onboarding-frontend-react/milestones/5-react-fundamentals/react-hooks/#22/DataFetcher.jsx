// File: DataFetcher.js
import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  // Log on mount/unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Fetch data on trigger
  useEffect(() => {
    if (!triggerFetch) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          {
            signal: controller.signal,
          }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();

    // Cleanup
    return () => {
      controller.abort(); // cancel the fetch if component unmounts
    };
  }, [triggerFetch]);

  return (
    <div>
      <button onClick={() => setTriggerFetch(true)}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataFetcher;
