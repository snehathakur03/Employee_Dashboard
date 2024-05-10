import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Employeedashboard from "./routes/Employeedashboard";
import Teammembers from "./routes/Teammembers";
import Calender from "./routes/Calender";
import Settings from "./routes/Settings";
import Activity from "./routes/Myactivity";

import "./App.css";
import { Box, Stack } from "@mui/material";

const AppLayout = () => (
  <>
    <Stack direction="row">
    <Box flex={0.4}>
      <div sx="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; !important">
        <Navbar/>
        </div>
        </Box>
        <Box flex={6}>
        <Outlet />
      </Box>
      </Stack>
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Teammembers />,
      },
      {
        path: "/analytics", 
        element: <Employeedashboard />, 
      },
     
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "activities",
        element: <Activity />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
