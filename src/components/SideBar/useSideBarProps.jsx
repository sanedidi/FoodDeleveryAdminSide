import React from "react";
import {
  BarIcon,
  ClientsIcon,
  DateIcon,
  GroupsIcon,
  LocationIcon,
  RestaurantIcon,
  ShopIcon,
} from "../SvgComponents/SvgComponents";

const useSideBarProps = () => {
  const sideBarLinks = [
    { id: 1, icon: <BarIcon />, path: "" },
    { id: 2, icon: <ShopIcon />, path: "" },
    { id: 3, icon: <ClientsIcon />, path: "" },
    { id: 4, icon: <GroupsIcon />, path: "" },
    { id: 5, icon: <LocationIcon />, path: "" },
    { id: 6, icon: <RestaurantIcon />, path: "" },
    { id: 7, icon: <DateIcon />, path: "" },
  ];
  return {
    sideBarLinks,
  };
};

export default useSideBarProps;
