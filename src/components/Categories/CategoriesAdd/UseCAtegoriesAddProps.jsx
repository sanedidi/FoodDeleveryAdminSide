import {
  EngIcon,
  RussiaIcon,
  UzbIcon,
} from "components/SvgComponents/SvgComponents";
import React, { useState } from "react";
const UseCAtegoriesAddProps = () => {
  const lang = [
    { lang: "Русский", icon: <RussiaIcon /> },
    { lang: "Узбекский", icon: <UzbIcon /> },
    { lang: "Англисйский", icon: <EngIcon /> },
  ];
  const [activeLang, setActiveLang] = useState("");
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  return {
    lang,
    activeLang,
    setActiveLang,
    name,
    setName,
    mainImage,
    setMainImage,
    imagePreview,
    setImagePreview,
  };
};

export default UseCAtegoriesAddProps;
