import React from "react";
import s from "./UnderHeader.module.scss";
import { Box } from "@chakra-ui/react";

const UnderHeaderItem = ({ children }) => {
  return <Box className={s.underHeader__firstItem}>{children}</Box>;
};

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
        <Box className={s.underHeader__items}>
          {(firstItem || first1Item || first2Item) && (
            <>
              {firstItem && <UnderHeaderItem>{firstItem}</UnderHeaderItem>}
              {first1Item && <UnderHeaderItem>{first1Item}</UnderHeaderItem>}
              {first2Item && <UnderHeaderItem>{first2Item}</UnderHeaderItem>}
            </>
          )}
        </Box>
        {(secondItem || thirdItem) && (
          <Box
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            className={s.underHeader__secondItem}
          >
            {secondItem && <Box>{secondItem}</Box>}
            {thirdItem && <Box>{thirdItem}</Box>}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UnderHeader;
