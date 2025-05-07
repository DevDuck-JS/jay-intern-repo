import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  // Log when mounted/unmounted
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

    return () => {
      controller.abort();
    };
  }, [triggerFetch]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <button
        onClick={() => setTriggerFetch(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Fetch Data
      </button>
      {data && (
        <pre className="mt-4 bg-gray-100 p-3 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DataFetcher;
