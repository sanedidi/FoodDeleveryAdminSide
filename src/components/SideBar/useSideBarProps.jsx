import React, { useState } from "react";
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
} from "../SvgComponents/SvgComponents";

const useSideBarProps = () => {
  const sideBarLinks = [
    {
      id: 1,
      icon: <BarIcon width={26} height={26} />,
      path: "/admin/dashboard",
    },
    { id: 2, icon: <ShopIcon width={26} height={26} />, path: "" },
    {
      id: 3,
      icon: <ClientsIcon width={26} height={26} />,
      path: "/admin/clients",
    },
    { id: 4, icon: <GroupsIcon width={26} height={26} />, path: "" },
    { id: 5, icon: <LocationIcon width={26} height={26} />, path: "" },
    { id: 6, icon: <RestaurantIcon width={26} height={26} />, path: "" },
    { id: 7, icon: <DateIcon width={26} height={26} />, path: "" },
  ];
  const settings = [
    { id: 1, icon: <SettingsIcon width={26} height={26} />, path: "" },
    { id: 2, icon: <UserIcon width={26} height={26} />, path: "" },
  ];
  const [open, setOpen] = useState(false);
  const isPath = () => {
      setOpen = !open;
  };
  return {
    sideBarLinks,
    settings,
    open,
    setOpen,
    isPath
  };
};

export default useSideBarProps;
