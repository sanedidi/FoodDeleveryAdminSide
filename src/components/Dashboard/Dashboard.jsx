import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "components/Header/Header";
import { PlusIcon } from "components/SvgComponents/SvgComponents";
import axios from "axios"; 
import s from './Dashboard.module.scss'

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
              <PlusIcon /> Добавить клиента
            </Link>
          </>
        }
      />
      <div>
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="file"
            onChange={handleMainImageChange}
            accept="image/*"
          />
          <button type="submit"> 
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
