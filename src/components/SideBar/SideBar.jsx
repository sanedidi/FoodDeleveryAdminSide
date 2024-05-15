import React, { useState } from "react";
import s from "./SideBar.module.scss";
import { LogoIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const SideBar = () => {
  const {
    isClientsActive,
    setIsClientsActive,
    sideBarLinks,
    settings,
    activePath,
    setActivePath,
    CatalogLinks,
  } = useSideBarProps();
  const location = useLocation();

  const isActive = location.pathname === "/admin/categories";

  const handleLinkClick = (path) => {
    setActivePath(path);
    setIsClientsActive(path === "/admin/categories" || isActive);
  };

  return (
    <Box className={s.sidebar}>
      <Box className={s.sidebar__main_wrapper}>
        <Box className={s.sidebar__wrapper}>
          <Box className={s.sidebar__main_top}>
            <Box className={s.sidebar__top}>
              <Box className={s.sidebar__logo}>
                <LogoIcon width={"36"} height={"36"} />
                <Box
                  onClick={() => setIsClientsActive(!isClientsActive)}
                  className={s.sidebar__pp}
                >
                  {isClientsActive ? (
                    <button className={s.chevronR} variant="ghost">
                      <FiChevronsLeft className={s.sidebar__chevnor} />
                    </button>
                  ) : (
                    <button
                      className={setIsClientsActive ? s.gg : s.ff}
                      variant="ghost"
                    >
                      <FiChevronsRight />
                    </button>
                  )}
                </Box>
              </Box>
            </Box>
            <Box className={s.sidebar__bottom}>
              {sideBarLinks.map((el, index) => (
                <Box className={s.sidebar__links} key={index}>
                  <Link to={el.path} onClick={() => handleLinkClick(el.path)}>
                    <Box className={el.path === activePath ? "active" : ""}>
                      {el.icon}
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className={s.sidebar__main_bottom}>
            {settings.map((el, index) => (
              <Box
                className={el.id === 1 ? s.sidebar__set : s.sidebar__acc}
                key={index}
              >
                {el.icon}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          className={
            !isClientsActive
              ? s.sidebar__wrapper_left
              : s.sidebar__wrapper_left_active
          }
        >
          <Box className={s.sidebar__left_top}>
            <Box
              className={s.sidebar__left_btn}
              onClick={() => setIsClientsActive(!isClientsActive)}
            >
              <h2>Каталог</h2>
            </Box>
          </Box>
          <Box className={s.sidebar__sec_links}>
            {isClientsActive &&
              CatalogLinks.map((link, index) => (
                <Link
                  key={index}
                  onClick={() => handleLinkClick(link.path)}
                  className={`${link.path === activePath ? s.ActiveLink : ""} ${
                    s.sidebar__catalog_links
                  }`}
                  to={link.path}
                >
                  {link.link}
                </Link>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
