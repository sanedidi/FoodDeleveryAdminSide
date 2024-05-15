import React, { useState, useEffect } from "react";
import {
  BarIcon,
  ClientsIcon,
  DateIcon,
  GroupsIcon,
  LocationIcon,
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
    return currentPath === path ? "#fff" : "#6E8BB7";
  };

  const sideBarLinks = [
    {
      id: 1,
      icon: (
        <BarIcon
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
        <ClientsIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/clients")}
        />
      ),
      path: "/admin/clients",
    },
    {
      id: 4,
      icon: (
        <GroupsIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/groups")}
        />
      ),
      path: "/admin/groups",
    },
    {
      id: 5,
      icon: (
        <LocationIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/fillials")}
        />
      ),
      path: "/admin/fillials",
    },
    {
      id: 6,
      icon: (
        <RestaurantIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/categories")}
        />
      ),
      path: "/admin/categories",
    },
    {
      id: 7,
      icon: (
        <DateIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/calendar")}
        />
      ),
      path: "/admin/calendar",
    },
  ];

  const settings = [
    {
      id: 1,
      icon: (
        <SettingsIcon
          width={26}
          height={26}
          color={getColorForPath("/admin/settings")}
        />
      ),
      path: "/admin/settings",
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
    { link: "Атрибуты товаров", path: "/admin/atributes" },
    { link: "Бренды", path: "/admin/brands" },
    { link: "Единица измерения", path: "/admin/quant" },
    { link: "Теги", path: "/admin/tags" },
    { link: "Отдел", path: "/admin/otdel" },
    { link: "Прейскурант", path: "./admin/preys" },
  ];
  const [activePath, setActivePath] = useState("");
  const [isClientsActive, setIsClientsActive] = useState(false);

  return {
    sideBarLinks,
    settings,
    CatalogLinks,
    activePath, setActivePath,
    isClientsActive, setIsClientsActive,
  };
};

export default useSideBarProps;
