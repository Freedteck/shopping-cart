import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "./Root.module.css";

const Root = () => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.children}>
        <Outlet context={""} />
      </div>
    </div>
  );
};

export default Root;
