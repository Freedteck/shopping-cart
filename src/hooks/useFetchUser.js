import { useEffect, useState } from "react";

const useFetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users/1");
        if (!res.ok) {
          throw new Error("An error occurred while fetching user");
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useFetchUser;
