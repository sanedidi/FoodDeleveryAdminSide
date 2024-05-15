import React from "react";
import s from "./UnderHeader.module.scss";
import { Box } from "@chakra-ui/react";
const UnderHeader = ({ firstItem, secondItem, thirdItem }) => {
  return (
    <Box className={s.underHeader}>
      <div className={s.underHeader__wrapper}>
        <div className={s.underHeader__firstItem}>{firstItem}</div>
        <div style={{display:"flex", alignItems:"center", gap:"5px"}} className={s.underHeader__firstItem}>
          {secondItem}
          {thirdItem}
        </div>
      </div>
    </Box>
  );
};

export default UnderHeader;
