import React, { useEffect, useState } from "react";
import { Snackbar, IconButton, Typography, Icon, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CampaignOutlined, WorkHistoryOutlined } from "@mui/icons-material";

export default function BottomRightSnackbar() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  useEffect(() => {
    setOpenFirst(true);
  }, []); 

  const handleCloseFirst = () => {
    setOpenFirst(false);
    setOpenSecond(true); // Open the second Snackbar after the first one is closed
  };

  const handleCloseSecond = () => {
    setOpenSecond(false);
  };

  return (
    <div>
      <Snackbar 
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openFirst}
        autoHideDuration={2000} 
        onClose={handleCloseFirst}
        sx={{
          "& .MuiSnackbarContent-root": {
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            color:"#000",
            width:"900px",
          },
        }}
        message={
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon><CampaignOutlined color="primary" /></Icon>
              <Typography variant="body1" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px", color:"#418fdc" }}>
                Work from home - Covid 19
              </Typography>
            </div>
            <Typography  sx={{ fontSize: "13px", fontWeight: "500", marginTop: "12px", color:"#6f6f6f" }}>
              We all know that COVID-19 has been categorized as a pandemic, keeping in mind the welfare of each
              of our employee, Amphisoft Technologies has taken a decision to allow the following staff members to work 
              from home with effective from 23rd March 2020 to 27th March 2020.
            </Typography>
            <Typography  sx={{ fontSize: "13px", fontWeight: "500", marginTop: "12px", color:"#6f6f6f" }}>
              1. Content team <br />
              2. Backtrack team <br />
              3. Operations team <br />
              4. Accounts and Functional team <br />
            </Typography>
          </div>
        }
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseFirst}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />

      {openSecond && (
        <Snackbar 
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={openSecond}
          autoHideDuration={2000} 
          onClose={handleCloseSecond}
          sx={{
            "& .MuiSnackbarContent-root": {
              bgcolor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              color:"#000",
              width:"900px",
              marginTop: "20px",
            },
          }}
          message={
            <Stack direction="row">

              <Icon flex={2}><WorkHistoryOutlined color="primary" /></Icon>
              <Typography flex={8} variant="body1" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px", color:"#3f3f3f" }}>
                Today is Jenny Wilson's 3rd work anniversary
              </Typography>
              {/* <Button flex={2} justifyContent="flex-end" variant="outlined" size="small" >Say Congrats</Button> */}
            </Stack>
          }
       
        />
      )}
    </div>
  );
}
