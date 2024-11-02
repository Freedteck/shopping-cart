import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "./Root.module.css";
import { useEffect, useState } from "react";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
    };

    handleStorage();

    return () => {};
  }, []);

  return token ? (
    <div className={style.root}>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <div className={style.children}>
        <Outlet context={{ cartItems, setCartItems }} />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Root;
