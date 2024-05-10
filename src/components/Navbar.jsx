import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "../App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const storedSelected = localStorage.getItem("selected");
    if (storedSelected !== null) {
      setSelected(parseInt(storedSelected));
    } else {
      setSelected(0); 
    }
  }, []);

  const handleItemClick = (index) => {
    setSelected(index);
    localStorage.setItem("selected", index.toString()); 
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="navbar">
          {/* Show the MenuIcon only in mobile view */}
          <Link to="#" className="menu-bars">
            <MenuIcon onClick={showSidebar} className="mobile-menu-icon" />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <CloseIcon />
              </Link>
            </li>
            
            <li className="nav-text">
              <Typography variant="h4" fontWeight={"bold"} color={"#556ee6"} >hr</Typography>
            </li>

            {Sidebar.map((item, index) => (
              <li key={index} className={item.cName}>
                <Box height="45px" borderRadius={2} 
                  sx={{
                    bgcolor: selected === index ? "#556ee6" : "#f9fafc",
                    color: selected === index ? "#fff" : "#8c8c8cc2",
                  }}
                  onClick={() => handleItemClick(index)}
                >
                  <Link to={item.path}>
                    {item.icon}
                  </Link>
                </Box>
              </li>
            ))}
          </ul>

          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            textAlign="center"
            bgcolor="#ebebeb70"
            color="#8c8c8cc2"
            p={2}
          >
            <Link to="/logout">
              <LogoutOutlined color="error" />
            </Link>
          </Box>
        </nav>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
