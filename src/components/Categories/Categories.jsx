import React, { useRef } from "react";
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
import useCategoriesProps from "./useCategoriesProps";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";

import { Header } from "components/Header/Header";
import html2canvas from "html2canvas"; 

const Categories = () => {
  const { columns, data, setSearchQuery } = useCategoriesProps();
  const categoriesWrapperRef = useRef(null);

  const handleDownload = () => {
    if (categoriesWrapperRef.current) {
      html2canvas(categoriesWrapperRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "categories.png"; 
          link.click();
        }, "image/png");
      });
    }
  };

  return (
    <>
      <Header
        headerBtn1={
          <div className={`${s.header_btn1}  ${s.categories__btn}`}>
            <ReloadIcon />
            Обновить CRM филиал
          </div>
        }
        headerBtn2={
          <Link to={"/admin/categories/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
        title={"Категории"}
      />
      <div className={s.categories}>
        <UnderHeader
          firstItem={
            <CustomInput
              InputIcon={<SearchIcon style={{ color: "#0e73fc" }} />}
              InputPlaceHolder={"Поиск..."}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          }
          thirdItem={
            <CustomBtn
              Onclick={() => handleDownload()} // Исправлено с Onclick на onClick
              BtnContent={
                <>
                  <DownloadIcon />
                  <p style={{ color: "black", fontWeight: "400" }}>Скачать</p>
                </>
              }
              BgColor={"white"}
              BtnBorder={"1px solid #E5E9EB"}
            />
          }
        />
        <div className={s.categories__wrapper} ref={categoriesWrapperRef}>
          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Categories;
