import React from "react";
import s from "./UnderHeader.module.scss";
import { Box } from "@chakra-ui/react";

export const UnderHeader = ({
  firstItem,
  secondItem,
  thirdItem,
  first1Item,
  first2Item,
}) => {
  return (
    <Box className={s.underHeader}>
      <Box className={s.underHeader__wrapper}>
        {firstItem ||
          first1Item ||
          (first2Item && (
            <>
              <Box className={s.underHeader__firstItem}>{firstItem}</Box>
              <Box className={s.underHeader__firstItem}>{first1Item}</Box>
              <Box className={s.underHeader__firstItem}>{first2Item}</Box>
            </>
          ))}
        {(secondItem || thirdItem) && (
          <Box
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            className={s.underHeader__secondItem}
          >
            {secondItem}
            {thirdItem}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UnderHeader;
