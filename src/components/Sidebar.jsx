import React from "react";
import {GroupOutlined,AccessTimeOutlined, CalendarTodayOutlined, VolumeDownOutlined, SettingsOutlined, LogoutOutlined, ShowChartOutlined} from "@mui/icons-material";

export const Sidebar = [
    {
        title: "",
        path: "/",
        icon: <ShowChartOutlined />,
        cName: "nav-text",
      },
    {
    title: "",
    path: "/groups",
    icon: <GroupOutlined />,
    cName: "nav-text",
  },
  {
    title: "",
    path: "/access",
    icon: <AccessTimeOutlined />, 
    cName: "nav-text",
  },
  {
    title: "",
    path: "/notification",
    icon: <VolumeDownOutlined />, 
    cName: "nav-text",
  },
  {
    title: "",
    path: "/calender",
    icon: <CalendarTodayOutlined />, 
    cName: "nav-text",
  },
  {
    title: "",
    path: "/settings",
    icon: <SettingsOutlined />, 
    cName: "nav-text",
  },
  {
    title: "",
    path: "/logout",
    icon: <LogoutOutlined/>, 
    cName: "nav-text",
  }
];
