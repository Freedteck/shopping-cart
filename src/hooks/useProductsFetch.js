import { useEffect, useState } from "react";

const useProductsFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { products, loading };
};

export default useProductsFetch;
