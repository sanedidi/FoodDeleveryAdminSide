import React from "react";
import s from "./SideBar.module.scss";
import { Box } from "@chakra-ui/react";
import { LogoIcon, SettingsIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { sideBarLinks, settings } = useSideBarProps();
  return (
    <Box className={s.sidebar}>
      <Box className={s.sidebar__wrapper}>
        <Box className={s.sidebar__main_top}>
          <Box className={s.sidebar__top}>
            <Box className={s.sidebar__logo}>
              <LogoIcon width={"36"} height={"36"} />
            </Box>
          </Box>
          <Box className={s.sidebar__bottom}>
            {sideBarLinks.map((el, index) => {
              return (
                <Box className={s.sidebar__links} key={index}>
                  <Link to={el.path}>{el.icon}</Link>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className={s.sidebar__main_bottom}>
          {settings.map((el, index) => {
            return (
              <Box
                className={el.id === 1 ? s.sidebar__set : s.sidebar__acc}
                key={index}
              >
                {el.icon}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
