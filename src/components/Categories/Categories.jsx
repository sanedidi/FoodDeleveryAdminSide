import { Header } from "components/Header/Header";
import React from "react";
import s from "./Categories.module.scss";
import {
  DownloadIcon,
  PlusIcon,
  ReloadIcon,
} from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
import UnderHeader from "components/UnderHeader/UnderHeader";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { SearchIcon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
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
        title={"Категории"}
      />
      <div className={s.categories}>
        <UnderHeader
          firstItem={
            <>
              <CustomInput
                InputIcon={<SearchIcon style={{ color: "#0e73fc" }} />}
                InputPlaceHolder={"Поиск..."}
              />
            </>
          }
          thirdItem={
            <>
              <CustomBtn
                BtnContent={
                  <>
                    <DownloadIcon />
                    <p style={{ color: "black", fontWeight: "400" }}>Скачать</p>
                  </>
                }
                BgColor={"white"}
                BtnBorder={"1px solid #E5E9EB"}
              />
            </>
          }
        />
        <div className={s.categories__wrapper}>
            
        </div>
      </div>
    </>
  );
};

export default Categories;
