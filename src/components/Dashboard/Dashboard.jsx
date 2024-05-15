import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "components/Header/Header";
import { PlusIcon } from "components/SvgComponents/SvgComponents";
import axios from "axios";
import s from "./Dashboard.module.scss";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState(null);

  const handleMainImageChange = (event) => {
    setMainImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", mainImage);

    try {
      const response = await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Success", response);
    } catch (error) {
      alert("Error:", error);
    }
  };

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn1={
          <>
            <Link to={"/"} className={s.clients__header_btn}>
              <CustomBtn
                BtnContent={
                  <>
                    {" "}
                    <PlusIcon /> Добавить 
                  </>
                }
                BgColor={"blue"}
              />
            </Link>
          </>
        }
      />
    </>
  );
};

export default Dashboard;
