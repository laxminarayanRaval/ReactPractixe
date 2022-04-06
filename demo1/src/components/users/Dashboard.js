import React from "react";
import axios from "axios";
import ShareName from "../../ShareName";

export default function Dashboard(props) {
  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/auto-complete",
    params: { q: "RELIANCE", region: "IN" },
    headers: {
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      "X-RapidAPI-Key": "6c1ec53a65mshb1a9d43961d7debp164c41jsna19e0ffc7d75",
    },
  };

  const [shareData, setShareData] = React.useState([]);
  const [searchQry, setSearchQry] = React.useState("");

  React.useEffect(() => {
    options.params.q = searchQry;
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.quotes);
        setShareData(response.data.quotes);
      })
      .catch(function (error) {
        console.error(error);
      });
    }, [searchQry]);

    // console.log(shareData);
  return (
    <React.Fragment>
      <h1>Welcome {props.username}</h1>
      <h3>to the User Dashboard</h3>
      Search Share :<input type='search' name="qry" onKeyUp={e => { setSearchQry(e.target.value) }} />
      { shareData &&
        shareData.map((e, i) => (<ShareName key={i} data={e} />))
      }
      
    </React.Fragment>
  );
}
