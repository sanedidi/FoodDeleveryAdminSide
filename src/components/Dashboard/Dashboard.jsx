import { Header } from "components/Header/Header";
import { PlusIcon } from "components/SvgComponents/SvgComponents";
import React from "react";
import { Link } from "react-router-dom";
import s from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn1={
          <>
            <Link style={{display:"flex"}} to={"/"} className={s.clients__header_btn}>
              {" "}
              <PlusIcon /> Добавить клиента
            </Link>
          </>
        }
      />
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
