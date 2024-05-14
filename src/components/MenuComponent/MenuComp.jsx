import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

export const MenuComp = ({
  MenuBtn,
  ListMenu,
  ListMenu1,
  ListMenu3,
  MenuSvg,
  MenuSvg1,
  MenuClass,
}) => {
  return (
    <Menu>
      <MenuButton>
        <div
          className={MenuClass}
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {MenuSvg1}
          {MenuBtn}
          {MenuSvg}
        </div>
      </MenuButton>
      <Portal>
        <MenuList >
          <MenuItem>{ListMenu}</MenuItem>
          <MenuItem>{ListMenu1}</MenuItem>
          <MenuItem>{ListMenu3}</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MenuComp;
