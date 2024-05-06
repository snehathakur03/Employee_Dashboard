import React, { useState } from 'react';
import {Box,Typography,Divider,Grid, Button} from "@mui/material";
import Leaves from "./Leaves";
import Timesheet from './Timesheet';


export default function Activity() {

    const [selectedTab, setSelectedTab] = useState('Leaves');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
   
    return(
      <>
         <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} width="100%" height="100vh" >

        <Box padding={"16px 0px"} width={"100%"} display="flex">
        <Grid container alignItems="center">
        <Grid item xs>
        <Typography  fontWeight={700} fontSize={19} variant="p">
            My Activity
        </Typography>
        </Grid>

        <Grid item xs>
        <Button 
            variant="text" 
            onClick={() => handleTabClick('Leaves')}
            sx={{
                fontSize: "14px", 
                textTransform: "capitalize", 
                color: selectedTab === "Leaves" ? "#0000ff" : "#516ed9bf"
            }}
        >
            Leaves
        </Button>
    </Grid>

    <Grid item xs>
        <Button 
            variant="text" 
            onClick={() => handleTabClick('Timesheet')} 
            sx={{
                fontSize: "14px", 
                textTransform: "capitalize", 
                color: selectedTab === "Timesheet" ? "#0000ff" : "#737373"
            }}
        >
            Work Log/Timesheet
        </Button>
    </Grid>

        <Grid item xs="6">

        </Grid>
        </Grid>
        </Box>
        <Divider />

        {selectedTab === 'Leaves' && <Leaves />} 
        {selectedTab === 'Timesheet' && <Timesheet />} 
        </Box>

      </>
    )
}