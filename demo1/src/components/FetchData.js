import React from "react";

const FetchData = (props) => {
  const [processedData, setProcessedData] = React.useState([]);

  const showData = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    /*
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json)
      .then((data) => {
    */
    setProcessedData(
      data.results.map((data) => ({
        id: data.episode_id,
        title: data.title,
        openingText: data.opening_crawl,
        releaseDate: data.release_date,
      }))
    );
    console.log(processedData);
    /*
      });
    */
  };
  console.log(processedData);
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
    </div>
  );
};

export default FetchData;
