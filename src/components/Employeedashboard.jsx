import React from "react";
import {Box, Divider, Icon, IconButton, Stack, Typography,useTheme , useMediaQuery,Snackbar, Grid, Button} from "@mui/material";
import {Dropdown, MenuButton,Menu,MenuItem} from '@mui/joy';
import { EastOutlined, ErrorOutline, FreeBreakfastOutlined, KeyboardArrowDown, ShortcutOutlined, SouthOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import BarsDataset from "./Graphdata";
import BottomRightSnackbar from "./Snackbarmsg";


function Employeedashboard(){
   
    const theme = useTheme();

  // Check if the screen size is extra small (xs) or small (sm)
  const isXsOrSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <>
        <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} >
        <Box padding={"16px 0px"} width={"100%"}>
            <Typography  fontWeight={700} fontSize={19} variant="p">My Dashboard</Typography>
            </Box>
            <Divider />

            <Stack  direction={isXsOrSmScreen ? 'column' : 'row'}  justifyContent="space-between" height="350px" marginTop={4}>
            <Box  flex={4} >
                <Typography variant="p"  fontSize={14} fontWeight={600} color={"#000000d6"}> My Stats</Typography>
                <Box sx={{bgcolor:"#fff",borderRadius:"15px", height:"250px", padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                
                <Stack direction = "row"  justifyContent="space-between" >

                    <Box flex={4} height="100px">
                    <Box sx={{display:"flex", height:"100px", alignItems:"flex-start",  display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>9:16 AM
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Today's in time
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box sx={{width:"55px", height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SouthOutlined color="primary"/>
                        </Box>
                    </Box>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{margin:'0'}}/>

                    <Box flex={4}>
                    <Box sx={{display:"flex", height:"100px", alignItems:"flex-start", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>45 m
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Break Time*
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box sx={{width:"55px", height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FreeBreakfastOutlined color="primary"/>
                        </Box>
                    </Box>
                    </Box>
                </Stack>
                

                <Divider orientation="horizontal" variant="middle" flexItem />


                <Stack direction = "row"  justifyContent="space-between" >
                    <Box flex={4} height="100px">
                    <Box sx={{display:"flex", height:"100px", alignItems:"flex-start",  display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>4h 23m
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Work time*
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box sx={{width:"55px", height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <WorkHistoryOutlined color="primary"/>
                        </Box>
                    </Box>

                    </Box>

                    <Divider orientation="vertical" variant="middle" sx={{margin:'0'}} flexItem />

                    <Box flex={4}>
                    <Box sx={{display:"flex", height:"100px", alignItems:"flex-start",  display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>3
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} marginTop={1} color="#6f6f6f">Tasks In Progress
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box sx={{width:"55px", height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ShortcutOutlined color="primary"/>
                        </Box>
                    </Box>

                    </Box>

                </Stack>

                <Stack direction = "row"  justifyContent="space-between" margin="15px">
                <Box flex={4} sx={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "flex-start" }}>
                        <Button sx={{  textTransform: 'none',color:"#418fdc", fontWeight:500, letterSpacing:"0.5", fontSize:"16px"}}>View My Tasks
                <EastOutlined sx={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "center" ,color:"#62aaf1", paddingLeft:"10px" }}/>
                </Button>
                </Box>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Box flex={4}>
                <Box flex={4} sx={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "flex-start" }}>
                        <Button sx={{  textTransform: 'none',color:"#418fdc", fontWeight:500, letterSpacing:"0.5", fontSize:"16px",paddingLeft:"20px"}}>View My Leaves
                <EastOutlined sx={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "center" ,color:"#62aaf1", paddingLeft:"10px" }}/>
                </Button>
                </Box>
                </Box>

                </Stack>
                </Box>
            </Box>

            <Box flex={0.2}></Box>

            <Box flex={4}  >
                <Stack direction = "row"  justifyContent="space-between" >
                <Typography variant="p"  fontSize={14} fontWeight={600} color={"#000000d6"}> Work Hours</Typography>
                <Dropdown>
                <MenuButton sx={{padding:"0px", border:"0px", color:"#898989",  alignItems: "flex-start !important" }}>Last 7 days
                <IconButton sx={{ alignItems: "flex-start !important" , padding:"0px"}}>
                    <KeyboardArrowDown sx={{color:"#898989",  alignItems: "flex-start !important"  }}/>
                    </IconButton>
                </MenuButton>
                <Menu>
                    <MenuItem>Last 15 Days</MenuItem>
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Yearly</MenuItem>
                </Menu>
                </Dropdown>
            </Stack>

            <Box sx={{ bgcolor:"#fff",borderRadius:"15px", height:"250px", padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <BarsDataset />
            </Box>
            </Box>
            </Stack>


            <Box sx={{ 
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display: "flex",
            alignItems: "center", 
            }}>  
          <Icon><ErrorOutline color="error"/></Icon>
            
          <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
            You were absent for 3 days this month.
            </Typography>
            </Box>
            <br />

            <Box sx={{ 
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "24px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display: "flex",
            alignItems: "center", 
            }}>              
          <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
          Your compensation package includes a competitive salary, comprehensive benefits.
            </Typography>
            </Box>

            <BottomRightSnackbar />

            </Box>


</>
    )
}

export default Employeedashboard;