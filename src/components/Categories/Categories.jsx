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
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

import { Header } from "components/Header/Header";

const Categories = () => {
  const { columns, data, setSearchQuery } = useCategoriesProps(); // Destructure setSearchQuery from the hook
  const categoriesWrapperRef = useRef(null);

  const handleDownload = () => {
    const node = document.querySelector(`.${s.categories__wrapper}`);

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        saveAs(dataUrl, "categories.png");
      })
      .catch(function (error) {
        console.error(error);
      });
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
              Onclick={() => handleDownload()}
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
        <div
          className={s.categories__wrapper}
          id="categoriesWrapper"
          ref={categoriesWrapperRef}
        >
          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Categories;
