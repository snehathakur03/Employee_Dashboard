import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Employeedashboard from "./routes/Employeedashboard";
import Groupdata from "./routes/Teammembers";
import "./App.css";
import { Stack } from "@mui/material";

const AppLayout = () => (
  <>
    <Stack direction="row">
      <div sx="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; !important">
        <Navbar flex={2} />
        </div>
        <Outlet flex={6} />
      </Stack>
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/", 
        element: <Employeedashboard />, 
      },
      {
        path: "groups",
        element: <Groupdata />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
