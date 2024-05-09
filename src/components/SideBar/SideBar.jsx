// SideBar.js
import React, { useState } from "react";
import s from "./SideBar.module.scss";
import { LogoIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const SideBar = () => {
  const { sideBarLinks, settings } = useSideBarProps();
  const [isClientsActive, setIsClientsActive] = useState(false);

  const handleLinkClick = (path) => {
    setIsClientsActive(path === "/admin/clients");
  };

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__main_wrapper}>
        <div className={s.sidebar__wrapper}>
          <div className={s.sidebar__main_top}>
            <div className={s.sidebar__top}>
              <div className={s.sidebar__logo}>
                <LogoIcon width={"36"} height={"36"} />
                <div onClick={() => setIsClientsActive(!isClientsActive)} className={s.sidebar__pp}>
                  {isClientsActive ? (
                    <button  className={s.chevronR} variant="ghost">
                      <FiChevronsLeft  className={s.sidebar__chevnor} />
                    </button>
                  ) : (
                    <button className={setIsClientsActive ? s.gg : s.ff} variant="ghost">
                      <FiChevronsRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className={s.sidebar__bottom}>
              {sideBarLinks.map((el, index) => (
                <div className={s.sidebar__links} key={index}>
                  <Link
                    to={el.path}
                    onClick={() => handleLinkClick(el.path)}
                    className={
                      el.path === "/admin/clients" && isClientsActive
                        ? "active"
                        : ""
                    }
                  >
                    <div>{el.icon}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={s.sidebar__main_bottom}>
            {settings.map((el, index) => (
              <div
                className={el.id === 1 ? s.sidebar__set : s.sidebar__acc}
                key={index}
              >
                {el.icon}
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            !isClientsActive
              ? s.sidebar__wrapper_left
              : s.sidebar__wrapper_left_active
          }
        >
          <div className={s.sidebar__left_top}>
            <Box
              className={s.sidebar__left_btn}
              onClick={() => setIsClientsActive(!isClientsActive)}
            >
              <h2>Каталог</h2>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
