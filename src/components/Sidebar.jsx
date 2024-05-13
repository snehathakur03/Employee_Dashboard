import React from "react";
import {GroupOutlined,AccessTimeOutlined, SettingsOutlined, ShowChartOutlined} from "@mui/icons-material";

export const Sidebar = [
  {
    title: "",
    path: "/",
    icon: <GroupOutlined />,
    cName: "nav-text",
  },
    {
        title: "",
        path: "/analytics",
        icon: <ShowChartOutlined />,
        cName: "nav-text",
      },
  // {
  //   title: "",
  //   path: "/calender",
  //   icon: <CalendarTodayOutlined />, 
  //   cName: "nav-text",
  // },
  {
    title: "",
    path: "/activities",
    icon: <AccessTimeOutlined />, 
    cName: "nav-text",
  },
  
  {
    title: "",
    path: "/settings",
    icon: <SettingsOutlined />, 
    cName: "nav-text",
  }
];
