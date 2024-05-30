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
      <MenuButton height={"max-content"}>
        <div
          className={MenuClass}
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {MenuSvg1 && MenuSvg1}
          {MenuBtn}
          {MenuSvg && MenuSvg}
        </div>
      </MenuButton>
      <Portal>
        <MenuList>
          {ListMenu && <MenuItem >{ListMenu}</MenuItem>}
          {ListMenu1 && <MenuItem >{ListMenu1}</MenuItem>}
          {ListMenu3 && <MenuItem >{ListMenu3}</MenuItem>}
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MenuComp;
