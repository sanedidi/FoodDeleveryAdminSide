import React from "react";
import s from "./SideBar.module.scss";
import { Box } from "@chakra-ui/react";
import { LogoIcon, SettingsIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { sideBarLinks, settings, open, setOpen, isPath } = useSideBarProps();
  const handleLinkClick = (path) => {
    setActiveAdminLink(path);
    if (path === "admin/category") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <Box className={s.sidebar}>
      <Box className={s.sidebar__main_wrapper}>
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
                    <Link
                      to={el.path}
                      className={`${s.sidebar__navLink} ${
                        pathname.includes(el.path) ? s.active : ""
                      }`}
                      onClick={() => handleLinkClick(el.path)}
                    >
                      <Box>{el.icon}</Box>
                    </Link>
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
        <Box>vsdvsd</Box>
      </Box>
    </Box>
  );
};

export default SideBar;
