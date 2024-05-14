import {
  EngIcon,
  RussiaIcon,
  UzbIcon,
} from "components/SvgComponents/SvgComponents";
import React from "react";
const UseCAtegoriesAddProps = () => {
  const lang = [
    { lang: "Русский", icon: <RussiaIcon /> },
    { lang: "Узбекский", icon: <UzbIcon /> },
    { lang: "Англисйский", icon: <EngIcon /> },
  ];

  return {
    lang,
  };
};

export default UseCAtegoriesAddProps;
