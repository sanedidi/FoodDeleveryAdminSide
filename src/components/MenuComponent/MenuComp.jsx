import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from '@chakra-ui/react';

const MenuComp = ({ MenuBtn, ListMenu, ListMenu1, ListMenu3 }) => {
  return (
    <Menu>
      <MenuButton>{MenuBtn}</MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>{ListMenu}</MenuItem>
          <MenuItem>{ListMenu1}</MenuItem>
          <MenuItem>{ListMenu3}</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MenuComp;
