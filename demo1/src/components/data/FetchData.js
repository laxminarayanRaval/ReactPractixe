import React, { useState, useEffect, useCallback } from "react";

const FetchData = (props) => {
  const [processedData, setProcessedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const showData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://demoapi-8a3d5-default-rtdb.firebaseio.com/movies.json");  // https://swapi.dev/api/films

      if (!response.ok) throw new Error("API not Responding.");
      const data = await response.json();

      setProcessedData(
        data.results.map((data) => ({
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        }))
      );
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
    setIsLoading(false);
    // console.log(processedData);
    /*
      fetch("https://swapi.dev/api/films")
        .then((response) => response.json)
        .then((data) => {
          setProcessedData({...});
      });
    */
  });

  useEffect(() => {
    showData();
  }, [showData]);
  // console.log(processedData);
  return (
    <div>
      FetchData <button onClick={showData}> Show Fetched Data</button>
      {processedData &&
        processedData.map((e) => (
          <div key={e.id}>
            <h2>{e.title}</h2>
            <p>
              Movie released on <b>{e.releaseDate}</b> with opening text{" "}
              <i>{e.openingText}</i>
            </p>
          </div>
        ))}
      {error && <p>{error}</p>}
      {isLoading && <p>please wait while loading data.</p>}
    </div>
  );
};

export default FetchData;
