import { Header } from "components/Header/Header";
import React from "react";
import s from "./Categories.module.scss";
import { PlusIcon, ReloadIcon } from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <Header
        headerBtn1={
          <>
            <button className={`${s.header_btn1}  ${s.categories__btn}`}>
              <ReloadIcon />
              Обновить CRM филиал
            </button>
          </>
        }
        headerBtn2={
          <Link to={"/"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
        title={"Товары"}
      />
      <div>Products</div>
    </>
  );
};

export default Categories;
