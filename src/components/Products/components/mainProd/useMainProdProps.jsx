import React from "react";
import { useState } from "./imports";
const useMainProdProps = () => {
  const [article, setArticle] = useState("");
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colourOptions1 = [
    { value: "chocolate", label: "Делимый" },
    { value: "strawberry", label: "Не делимый " },
  ];
  const colourOptions3 = [
    { value: "chocolate", label: "Делимый" },
    { value: "strawberry", label: "Не делимый" },
  ];
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    setArticle(randomNumber.toString());
  };
  const handleArticleChange = (event) => {
    let value = event.target.value;
    if (value.length > 6) {
      value = value.slice(0, 6);
    }
    setArticle(value);
  };
  return {
    article,
    setArticle,
    colourOptions,
    colourOptions1,
    colourOptions3,
    generateRandomNumber,
    handleArticleChange,
  };
};

export default useMainProdProps;
