import React from "react";
import s from "./SideBar.module.scss";
import { Box } from "@chakra-ui/react";
import { LogoIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link } from "react-router-dom";
import {
  BarIcon,
  ClientsIcon,
  GroupsIcon,
  LocationIcon,
  RestaurantIcon,
  ShopIcon,
} from "../SvgComponents/SvgComponents";
const SideBar = () => {
  const { sideBarLinks } = useSideBarProps();
  return (
    <Box className={s.sidebar}>
      <Box className={s.sidebar__top}>
        <Box className={s.sidebar__logo}>
          <LogoIcon width={"36px"} height={"36px"} />
        </Box>
      </Box>
      <Box className={s.sidebar__bottom}>
        {sideBarLinks.map((el, index) => {
          return (
            <Box className={s.sidebar__links} key={index}>
              <Link to={"/"}>{el.icon}</Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
