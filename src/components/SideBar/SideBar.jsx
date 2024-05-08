// SideBar.js
import React, { useState } from "react";
import s from "./SideBar.module.scss";
import { LogoIcon } from "../SvgComponents/SvgComponents";
import useSideBarProps from "./useSideBarProps";
import { Link } from "react-router-dom";
import PersistentDrawerLeft from "../CustomSideBar/CustomSideBar";

const SideBar = () => {
  const { sideBarLinks, settings } = useSideBarProps();
  const [showHeader, setShowHeader] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
    if (window.location.pathname === "/admin/clients") {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };


  const handleLinkClick = (path) => {
    if (path === "/admin/clients") {
      setOpen(true);
      setShowHeader(false);
    } else {
      setOpen(false);
      setShowHeader(true);
    }
  };

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__main_wrapper}>
        <div className={s.sidebar__wrapper}>
          <div className={s.sidebar__main_top}>
            <div className={s.sidebar__top}>
              <div className={s.sidebar__logo}>
                <LogoIcon width={"36"} height={"36"} />
              </div>
            </div>
            <div className={s.sidebar__bottom}>
              {sideBarLinks.map((el, index) => (
                <div className={s.sidebar__links} key={index}>
                  <Link to={el.path} onClick={() => handleLinkClick(el.path)}>
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
      </div>
      <PersistentDrawerLeft
        handleDrawerToggle={open}
        hideHeader={!showHeader}
      />
    </div>
  );
};

export default SideBar;
