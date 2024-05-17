import React, { useState } from "react";
import s from "./Lang.module.scss";
import { Box } from "@chakra-ui/react";
import {
  EngIcon,
  RussiaIcon,
  UzbIcon,
} from "components/SvgComponents/SvgComponents";
export const Lang = () => {
  const [activeLang, setActiveLang] = useState("Русский");

  const lang = [
    { lang: "Русский", icon: <RussiaIcon /> },
    { lang: "Узбекский", icon: <UzbIcon /> },
    { lang: "Англисйский", icon: <EngIcon /> },
  ];
  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };
  return (
    <Box className={s.lang}>
      {lang.map((el, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`${s.lang__language} ${
              activeLang === el.lang ? s.activeLang : ""
            }`}
            onClick={() => handleLangClick(el.lang)}
          >
            <h2>{el.lang}</h2>
            <span>{el.icon}</span>
          </button>
        );
      })}
    </Box>
  );
};

export default Lang;
