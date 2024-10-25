import { useEffect, useState } from "react";

const useBannerFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const index = Math.floor(Math.random() * 10) + 1;
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/" + index
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default useBannerFetch;
