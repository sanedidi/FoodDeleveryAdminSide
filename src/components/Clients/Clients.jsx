import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import s from "./Clients.module.scss";
import {
  ArroDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  PlusIcon,
  SearchIcon,
} from "components/SvgComponents/SvgComponents";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import MenuComp from "components/MenuComponent/MenuComp";
import useClientsProps from "./useClientsProps";
import { Link } from "react-router-dom";

export const Clients = () => {
  const { currentTime, setCurrentTime, currentDate, setCurrentDate } =
    useClientsProps();

  useEffect(() => {
    const fetchTimeAndDate = async () => {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/Asia/Tashkent"
        );
        const data = await response.json();
        const { datetime } = data;
        setCurrentTime(datetime.slice(11, 16));
        setCurrentDate(datetime.slice(0, 10));
      } catch (error) {
        console.error("Error fetching time and date:", error);
      }
    };

    fetchTimeAndDate();
  }, []);

  return (
    <>
      <Header
        title={"Клиенты"}
        headerBtn2={
          <>
            <Link to={"/"} className="header_btn1">
              {" "}
              <PlusIcon /> Добавить клиента
            </Link>
          </>
        }
      />
      <div className={s.clients}>
        <div className={s.clients__top_bar}>
          <div className={s.clients__top_items}>
            <CustomInput
              InputIcon={<SearchIcon />}
              InputPlaceHolder={"Поиск..."}
            />
            <MenuComp
              MenuClass={"clients__menu"}
              MenuSvg={<ArroDownIcon />}
              MenuSvg1={<CalendarIcon />}
              MenuBtn={
                <>
                  <span className={s.clients__time}>
                    {currentDate}
                    __
                    {currentTime}
                  </span>
                </>
              }
              ListMenu={"??????????"}
              ListMenu1={"????????"}
              ListMenu3={"?????????"}
            />
          </div>
          <div className={s.clients__import}>
            <MenuComp MenuSvg1={<ArrowUpIcon />} ListMenu={"?????????"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
