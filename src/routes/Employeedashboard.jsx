import {React} from "react";
import {Box, Divider, Icon, IconButton, Stack, Typography,useTheme , useMediaQuery,Button,Grid} from "@mui/material";
import {Dropdown, MenuButton,Menu,MenuItem} from '@mui/joy';
import { EastOutlined,  ErrorOutline, FreeBreakfastOutlined, KeyboardArrowDown, ShortcutOutlined, SouthOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import BarsDataset from "../components/Graphdata";
import BottomRightSnackbar from "../components/Snackbarmsg";


function Employeedashboard() {
 
    const theme = useTheme();
    const isXsOrSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
      <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} height="auto">
        <Box padding={"16px 0px"} width={"100%"}>
        <Typography  fontWeight={700} fontSize={19} variant="p">
            Dashboard
        </Typography>
        </Box>

        <Divider />

        <Grid container  marginTop="15px" spacing={3}>

        <Grid item sm={12} md={12} lg={6}>
        <Typography variant="h6"  fontSize={14} fontWeight={600} color={"#787a81"}> My Stats</Typography>

        <Box sx={{bgcolor:"#fff",borderRadius:"15px",height:"300px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>

        <Grid container padding="20px 30px 0px 30px" >
            <Grid item sm={6} md={6} lg={6}>
            <Grid container height="100px" alignItems="center" justifyContent="center"> 
                <Grid item sm={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}  style={{ textAlign: "left" }}>9:16 AM
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#787a81"  style={{ textAlign: "left" }}>Teams's Average in time
                    </Typography>
                </Grid>

                <Grid item sm={6} justifyContent="center" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <SouthOutlined sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
                </Grid>
            </Grid>


            <Grid item sm={6} md={6} lg={6}>

            <Grid container height="100px" alignItems="center" justifyContent="center"> 
            <Grid item sm={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9} style={{ textAlign: "left" }}>45 m
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} style={{ textAlign: "left" }} color="#787a81">Break Time*
                    </Typography>
                </Grid>

                <Grid item sm={6} justifyContent="center" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FreeBreakfastOutlined sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
                </Grid>

            </Grid>
        </Grid>

        <Grid container  padding="20px 30px 0px 30px"  >
        <Grid item sm={6} md={6} lg={6}>

        <Grid container height="100px" alignItems="center" justifyContent="center"> 
            <Grid item sm={6} textAlign="center">
                <Typography variant="h5"  fontWeight={560} letterSpacing={0.9} style={{ textAlign: "left" }}>4h 23m
                </Typography>
                <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} style={{ textAlign: "left" }} marginTop={1} color="#787a81">Work time*
                </Typography>
            </Grid>

            <Grid item sm={6} justifyContent="center" display="flex">
                <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WorkHistoryOutlined sx={{color:"#556ee6"}}/>
                </Box>
            </Grid>

        </Grid>
        </Grid>

        <Grid item sm={6} md={6} lg={6}>

        <Grid container height="100px" alignItems="center" justifyContent="center"> 
            <Grid item sm={6} textAlign="center">
                <Typography variant="h5"  fontWeight={560} letterSpacing={0.9} style={{ textAlign: "left" }}>3
                </Typography>
                <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} style={{ textAlign: "left" }} marginTop={1} color="#787a81">Tasks In Progress
                </Typography>
            </Grid>

            <Grid item sm={6} justifyContent="center" display="flex">
                <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShortcutOutlined sx={{color:"#556ee6"}}/>
                </Box>
            </Grid>

        </Grid>
        </Grid>

        </Grid>

        <Grid container  paddingLeft="20px" alignItems="center"  >
            <Grid item xs={6} >
            <Button sx={{ padding:"0px",  textTransform: 'none',color:"#556ee6", fontWeight:500, letterSpacing:"0.5", fontSize:"14px","&:hover": {backgroundColor: "transparent"}}}>View My Tasks
            <EastOutlined sx={{ display: "flex", height: "20px", alignItems: "center", justifyContent: "center" ,color:"#556ee6", paddingLeft:"10px" }}/>
            </Button> 
            </Grid>

            <Grid item xs={6} >
            <Button sx={{ padding:"0px",  textTransform: 'none',color:"#556ee6", fontWeight:500, letterSpacing:"0.5", fontSize:"14px","&:hover": {backgroundColor: "transparent"}}}>View My Leaves
            <EastOutlined sx={{ display: "flex", height: "20px", alignItems: "center", justifyContent: "center" ,color:"#556ee6", paddingLeft:"10px" }}/>
            </Button> 
            </Grid>
        </Grid>

        </Box>

    
    </Grid>

        <Grid item xs={12} md={12} lg={6} >
        <Stack direction = "row"  justifyContent="space-between" marginTop = {isXsOrSmScreen ?"15px":"0px"}  >
            <Typography variant="p"  fontSize={14} fontWeight={600} color={"#787a81"}> Work Hours</Typography>
            <Dropdown>
            <MenuButton sx={{padding:"0px", border:"0px", color:"#a8acb8",  alignItems: "flex-start !important" ,"&:hover": {backgroundColor: "transparent"}}}>Last 7 days
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

        <Box sx={{bgcolor:"#fff", height:"300px" , marginTop:"2px",borderRadius:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <BarsDataset />
        </Box>
        </Grid>

        </Grid>

        <br /> <br/>

<Box sx={{ 
    bgcolor: "#fff",
    borderRadius: "15px",
    padding: "17px",
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
    padding: "17px",
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