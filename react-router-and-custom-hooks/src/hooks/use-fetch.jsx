import React, { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const res = await response.json();

      if (res) {
        setData(res);
        setErr(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setData(null);
      setErr(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    err,
  };
}

export default useFetch;
