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
         <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} width="100%" height="auto" >

        <Box padding={"16px 0px"} width={"100%"} display="flex">
        <Grid container alignItems="center" spacing={2}>
        <Grid item>
        <Typography  fontWeight={700} fontSize={19} variant="p">
            My Activity
        </Typography>
        </Grid>

        <Grid item>
        <Button 
            variant="text" 
            onClick={() => handleTabClick('Leaves')}
            sx={{
                fontSize: "14px", 
                textTransform: "capitalize", 
                color: selectedTab === "Leaves" ? "#556ee6" : "#787a81",
                '&:hover': {
                    bgcolor: 'transparent !important'
                  }
            }}
        >
            Leaves
        </Button>
    </Grid>

    <Grid item>
        <Button 
            variant="text" 
            onClick={() => handleTabClick('Timesheet')} 
            sx={{
                fontSize: "14px", 
                textTransform: "capitalize", 
                color: selectedTab === "Timesheet" ? "#556ee6" : "#787a81",
                '&:hover': {
                    bgcolor: 'transparent !important'
                  }
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