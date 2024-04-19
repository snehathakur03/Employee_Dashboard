import React from "react";
import Sidebar from "./components/Sidebar";
import { Stack } from "@mui/material";
import Employeedashboard from "./components/Employeedashboard";

function App() {
  return (
    <>
      <Stack direction = "row" justifyContent="space-between">
      <Sidebar />
    <Employeedashboard />
     
    </Stack>
    </>
  );
}

export default App;
