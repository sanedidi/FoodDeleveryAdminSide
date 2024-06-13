import React, { useState, useEffect } from "react";
import {
  DateIcon,
  LogOutIcon,
  RestaurantIcon,
  SettingsIcon,
  ShopIcon,
  UserIcon,
} from "components/SvgComponents/SvgComponents";
import { useLocation } from "react-router-dom";

const useSideBarProps = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const getColorForPath = (path) => {
    return currentPath.startsWith(path) ? "#fff" : "#6e8bb7";
  };

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  const sideBarLinks = [
    {
      id: 1,
      icon: (
        <DateIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/dashboard")}
        />
      ),
      path: "/admin/dashboard",
    },
    {
      id: 2,
      icon: (
        <ShopIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/orders")}
        />
      ),
      path: "/admin/orders",
    },
    {
      id: 3,
      icon: (
        <RestaurantIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/categories")}
        />
      ),
      path: "/admin/categories",
    },
   
  ];

  const settings = [
    {
      id: 1,
      icon: <LogOutIcon onCLick={()=>logout()} />,
    },
    {
      id: 2,
      icon: (
        <UserIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/profile")}
        />
      ),
      path: "/admin/profile",
    },
  ];

  const CatalogLinks = [
    { link: "Категория", path: "/admin/categories" },
    { link: "Товары", path: "/admin/categories/products" },
  ];

  const [activePath, setActivePath] = useState("");
  const [isClientsActive, setIsClientsActive] = useState(false);

  return {
    sideBarLinks,
    settings,
    CatalogLinks,
    activePath,
    setActivePath,
    isClientsActive,
    setIsClientsActive,
  };
};

export default useSideBarProps;
