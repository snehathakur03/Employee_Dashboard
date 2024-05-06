import React from "react";
import { Typography,Grid,Box,FormGroup,FormControlLabel,Checkbox,Button, Divider, Stack } from "@mui/material";

export default function Timesheet(){
    return(
        <>
        <Grid container>
        <Grid item xs={3}>
            <Box marginTop="15px">
            <Typography sx={{fontSize:"16px", fontWeight:"600"}}>Projects</Typography>
            </Box>

            <Box marginTop="15px">
            <FormGroup>
             <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }}}/>} label="All projects" sx={{  '& .MuiTypography-root': {fontSize:"13px", color:"#4f4f4f"}}}/>
             <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }}}/>} label="HR app" sx={{  '& .MuiTypography-root': {fontSize:"13px", color:"#4f4f4f"}}} />
             <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }}}/>} label="Lead tracker"  sx={{  '& .MuiTypography-root': {fontSize:"13px", color:"#4f4f4f"}}}/>
             <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }}}/>} label="E-Box"  sx={{  '& .MuiTypography-root': {fontSize:"13px", color:"#4f4f4f"}}}/>
             <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }}}/>} label="Other"  sx={{  '& .MuiTypography-root': {fontSize:"13px", color:"#4f4f4f"}}}/>
             </FormGroup>

            </Box>
        </Grid>

        <Grid item xs={9} >
        <Stack  direction="row" marginTop="15px" display="flex" justifyContent="space-between" alignItems="center">
        <Box flex={6}>
        <Typography sx={{fontSize:"16px", fontWeight:"600"}}>Time sheet</Typography>
        </Box>

        <Box flex={6}  sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" 
            sx={{ textTransform:"none",
            fontSize:"13px",
            fontFamily:"Poppins,san-serif",
            backgroundColor:"#516ed9bf",
            color:"white"}}
            alignItems= "flex-start !important" >New Task</Button>
        </Box>
        </Stack>

    <Box marginTop="15px">
       
    <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    
    <Grid item xs={2} >            
    <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
    3:00 pm - 4:00 pm
    </Typography>
    </Grid>

    <Grid item xs={2} >            
    <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600",color:"#696969c4"}}>
    19 Mar 2024
    </Typography>
    </Grid>

    <Grid item xs={3} >            
    <Typography variant="p" sx={{ fontSize: "12px",  paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
    Design system update
    </Typography>
    </Grid>

    <Grid item xs={2} >            
    <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600", color:"#696969c4"}}>
     Others
    </Typography>
    </Grid>

    <Grid item xs={2} display="flex" justifyContent="flex-end" >

    <Button variant="contained" 
    sx={{ textTransform:"none",
    fontSize:"13px",
    fontFamily:"Poppins,san-serif",
    fontWeight:"550",
    color:"#516ed9bf",
    backgroundColor:"#e0e8fc57",
    border:"0px",
    boxShadow:"none"}}
    alignItems= "flex-start !important" >Edit</Button>
    </Grid>
    </Grid>

    <Divider sx={{ my: '10px' }} />

    <Box sx={{width:"90px",height:"25px",backgroundColor:"#e0e8fc57",borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Typography variant="p" sx={{ color:"#516ed9bf", fontSize:"11.5px",fontWeight:"550",letterSpacing:"0.7"}}>#Meeting</Typography>
    </Box>
    <Box sx={{my:"10px"}}>
    <Typography variant="p" sx={{ color:"#696969", fontSize:"11.5px"}}>
        Updated the design system components with the new brand guidelines and added few more components
    </Typography>
    </Box>  

    </Box>

</Box>



    <Box marginTop="15px">
       
       <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
       <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
       
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
       3:00 pm - 4:00 pm
       </Typography>
       </Grid>
   
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600",color:"#696969c4"}}>
       19 Mar 2024
       </Typography>
       </Grid>
   
       <Grid item xs={3} >            
       <Typography variant="p" sx={{ fontSize: "12px",  paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
       Poster design
       </Typography>
       </Grid>
   
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600", color:"#696969c4"}}>
        Others
       </Typography>
       </Grid>
   
       <Grid item xs={2} display="flex" justifyContent="flex-end" >
   
       <Button variant="contained" 
       sx={{ textTransform:"none",
       fontSize:"13px",
       fontFamily:"Poppins,san-serif",
       fontWeight:"550",
       color:"#516ed9bf",
       backgroundColor:"#e0e8fc57",
       border:"0px",
       boxShadow:"none"}}
       alignItems= "flex-start !important" >Edit</Button>
       </Grid>
       </Grid>
   
       <Divider sx={{ my: '10px' }} />

       <Grid container>
       <Grid item xs={2}>
       <Box sx={{width:"90px",height:"25px",backgroundColor:"#fab75930",borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
           <Typography variant="p" sx={{ color:"#f99508bf", fontSize:"11.5px",fontWeight:"550",letterSpacing:"0.7"}}>#UI design</Typography>
       </Box>
       </Grid>

        <Grid item xs={2}>
       <Box sx={{width:"170px",height:"25px",backgroundColor:"#d8ffe585",borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
           <Typography variant="p" sx={{ color:"#00cc43bf", fontSize:"11.5px",fontWeight:"550",letterSpacing:"0.7"}}>#Social media posters</Typography>
       </Box>
       </Grid>
        </Grid>

        <Grid item xs={8}></Grid>

       <Box sx={{my:"10px"}}>
       <Typography variant="p" sx={{ color:"#696969", fontSize:"11.5px"}}>
           Updated the design system components with the new brand guidelines and added few more components
       </Typography>
       </Box>
   
       </Box>
    </Box>


    <Box marginTop="15px">
       
       <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
       <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
       
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
       3:00 pm - 4:00 pm
       </Typography>
       </Grid>
   
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600",color:"#696969c4"}}>
       19 Mar 2024
       </Typography>
       </Grid>
   
       <Grid item xs={3} >            
       <Typography variant="p" sx={{ fontSize: "12px",  paddingLeft:"0px",fontWeight: "600",color:"#696969c4"}}>
       Poster design
       </Typography>
       </Grid>
   
       <Grid item xs={2} >            
       <Typography variant="p" sx={{ fontSize: "12px", paddingLeft:"0px", fontWeight: "600", color:"#696969c4"}}>
        Others
       </Typography>
       </Grid>
   
       <Grid item xs={2} display="flex" justifyContent="flex-end" >
   
       <Button variant="contained" 
       sx={{ textTransform:"none",
       fontSize:"13px",
       fontFamily:"Poppins,san-serif",
       fontWeight:"550",
       color:"#516ed9bf",
       backgroundColor:"#e0e8fc57",
       border:"0px",
       boxShadow:"none"}}
       alignItems= "flex-start !important" >Edit</Button>
       </Grid>
       </Grid>
   
       <Divider sx={{ my: '10px' }} />

       <Grid container>
       <Grid item xs={2}>
       <Box sx={{width:"90px",height:"25px",backgroundColor:"#fab75930",borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
           <Typography variant="p" sx={{ color:"#f99508bf", fontSize:"11.5px",fontWeight:"550",letterSpacing:"0.7"}}>#UI design</Typography>
       </Box>
       </Grid>

        <Grid item xs={2}>
       <Box sx={{width:"170px",height:"25px",backgroundColor:"#d8ffe585",borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
           <Typography variant="p" sx={{ color:"#00cc43bf", fontSize:"11.5px",fontWeight:"550",letterSpacing:"0.7"}}>#Social media posters</Typography>
       </Box>
       </Grid>
        </Grid>

        <Grid item xs={8}></Grid>

       <Box sx={{my:"10px"}}>
       <Typography variant="p" sx={{ color:"#696969", fontSize:"11.5px"}}>
           Updated the design system components with the new brand guidelines and added few more components
       </Typography>
       </Box>
   
       </Box>
    </Box>

        </Grid>
        </Grid>
        </>
    )
}