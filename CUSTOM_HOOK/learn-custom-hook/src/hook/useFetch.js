import axios from "axios";
import { useEffect, useState } from "react";

function useFetch({ method = "get", url = "", body = {} }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      method: method,
      url: url,
      data: body,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
