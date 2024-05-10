import React from "react";
import { styled, alpha } from '@mui/material/styles';
import {Box,Grid,InputBase , Divider, Stack, Typography, useTheme, useMediaQuery, IconButton,TablePagination , Icon, Button, Chip,Avatar,TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody} from "@mui/material";
import { ChatBubbleOutline, ErrorOutline, FreeBreakfastOutlined, HourglassBottom, KeyboardArrowDown , ShortcutOutlined, SouthOutlined } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import {Dropdown, MenuButton,Menu,MenuItem} from '@mui/joy';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '300px',
      [theme.breakpoints.up('md')]: {
      },
    },
  }));
  


export default function Teammembers(){

    const theme = useTheme();
    const isXsOrSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  

 
    
function createData(
    id: number,
    user: string,
    intime: number,
    outtime: number,
    worktime: number,
    breaktime: number,
    overtime: number,
    actions: string,


  ) {
    return { id, user, intime, outtime, worktime,breaktime,overtime,actions };
  }
  
  const rows = [
    createData(100143, "Willam Cooper", "9:10 AM", "10:12 PM", "10h", "1h", "2h", "..."),
    createData(100144, "John David", "9:10 AM", "10:12 PM", "10h", "1h", "2h",  "..."),
    createData(100145, "Emily Watson", "9:15 AM", "10:20 PM", "9h", "0.5h", "1.5h", "..."),
    createData(100146, "Michael Smith", "9:00 AM", "10:00 PM", "10h", "1h", "1h", "..."),
    createData(100147, "Jessica Brown", "9:30 AM", "10:30 PM", "9h", "0.5h", "1h",  "..."),
    createData(100143, "Willam Cooper", "9:10 AM", "10:12 PM", "10h", "1h", "2h", "..."),
    createData(100144, "John David", "9:10 AM", "10:12 PM", "10h", "1h", "2h",  "..."),
    createData(100145, "Emily Watson", "9:15 AM", "10:20 PM", "9h", "0.5h", "1.5h", "..."),
    createData(100146, "Michael Smith", "9:00 AM", "10:00 PM", "10h", "1h", "1h", "..."),
    createData(100147, "Jessica Brown", "9:30 AM", "10:30 PM", "9h", "0.5h", "1h",  "..."),
    createData(100148, "David Johnson", "9:20 AM", "10:15 PM", "8.75h", "0.25h", "1h",  "..."),
    createData(100149, "Sophia Martinez", "9:05 AM", "10:25 PM", "9.33h", "0.33h", "1.75h",  "..."),
    createData(100150, "Daniel Wilson", "9:45 AM", "10:35 PM", "8.83h", "0.33h", "0.83h",  "..."),
    createData(100151, "Olivia Taylor", "9:25 AM", "10:05 PM", "9.67h", "0.5h", "1.33h",  "..."),
    createData(100152, "Alexander Anderson", "9:35 AM", "10:40 PM", "8.75h", "0.5h", "0.75h",  "..."),
];

    return(
        <>
        <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} height="auto" >

        <Box padding={"16px 0px"} width={"100%"}>
        <Typography  fontWeight={700} fontSize={19} variant="p">
            UI/UX Team
        </Typography>
        </Box>
        <Divider />

        
        <Grid container  marginTop="15px" spacing={3}>

        <Grid item xs={6}>
        <Typography variant="h6"  fontSize={14} fontWeight="600" color="#787a81"> Team Stats</Typography>
        </Grid>

        <Grid item xs={6}  display="flex" justifyContent="flex-end">
        <Dropdown>
                <MenuButton sx={{padding:"0px", border:"0px", color:"#787a81", fontWeight:"550" , alignItems: "flex-start !important" }}>Daywise
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
          </Grid>
        </Grid>


        <Grid container spacing={2} >
            <Grid item xs={3} >
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Grid container height="80px" alignItems="center" justifyContent="center"> 
                <Grid item xs={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}  style={{ textAlign: "left" }}>9:16 AM
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#787a81"  style={{ textAlign: "left" }}>Today's in time
                    </Typography>
                </Grid>

                <Grid item xs={6} justifyContent="flex-end" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <SouthOutlined sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            </Grid>

            <Grid item xs={3} >
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Grid container height="80px" alignItems="center" justifyContent="center"> 
                <Grid item xs={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}  style={{ textAlign: "left" }}>45 m
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#787a81"  style={{ textAlign: "left" }}>Teams's Average Break Time
                    </Typography>
                </Grid>

                <Grid item xs={6} justifyContent="flex-end" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FreeBreakfastOutlined sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Box>
             </Grid>

            <Grid item xs={3} >
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Grid container height="80px"  alignItems="center" justifyContent="center"> 
                <Grid item xs={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}  style={{ textAlign: "left" }}>4 h 23 m
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#787a81"  style={{ textAlign: "left" }}>Teams's Average Work time
                    </Typography>
                </Grid>

                <Grid item xs={6} justifyContent="flex-end" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <HourglassBottom sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            </Grid>

            <Grid item xs={3} >
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Grid container height="80px"  alignItems="center" justifyContent="center"> 
                <Grid item xs={6} textAlign="center">  
                    <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}  style={{ textAlign: "left" }}>-
                    </Typography>
                    <Typography variant="h6" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#787a81"  style={{ textAlign: "left" }}>Teams's Average Out time
                    </Typography>
                </Grid>

                <Grid item xs={6} justifyContent="flex-end" display="flex">
                    <Box sx={{width:"55px", height:"55px", bgcolor:"#eef1ff", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShortcutOutlined sx={{color:"#556ee6"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            </Grid>
        </Grid>  
      
          <Box sx={{ 
          bgcolor: "#fff",
          borderRadius: "15px",
          padding: "13px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          display: "flex",
          alignItems: "center", 
          marginTop:"30px"
          }}>  

        <Stack direction= {isXsOrSmScreen ? "column":"row"} justifyContent="space-between" spacing= {isXsOrSmScreen ? "0px":"460px"}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Icon><ErrorOutline sx={{color:"#556ee6"}}/></Icon>
                
            <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
            Wade Warren was absent on 12th December 2023 without any intimation.
                </Typography>
            </Box>
            
            <Button variant="outlined" 
            sx={{ textTransform:"none",
            fontFamily:"Poppins,san-serif",color:"556ee6", borderColor:"#c4ceff"}}
            alignItems= "flex-start !important" >Send Reminder</Button>
            </Stack>
            </Box>


            <Grid container spacing={3}  marginTop={-0.6}>

              <Grid item xs={6}>
              <Box sx={{bgcolor:"#fff",borderRadius:"15px", padding:"20px",  marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>

                <Grid container>
                <Grid item xs={6} >
                <Chip 
                    avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                    style={{ width: '50px', height: '50px' }} />}
                    label={
                    <>
                    <h4>Johny Wilson</h4>
                    <Typography variant="p" sx={{color:"#848a9b"}}>UI/UX Designer</Typography>
                    </> 
                    }
                    style={{ backgroundColor: 'transparent' }} 
                    />
                <br /><br />
                <Typography variant="p" fontSize="15px" fontWeight={450}>Friend's Wedding Celebration </Typography>

                </Grid>

                <Grid item xs={6}>
                  <Stack direction="row">
                      <Box flex={2} ></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",fontSize:"12px",color:"#556ee6", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",color:"#556ee6",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>2 Days</Button></Box>
                  </Stack>
                </Grid>
    
                </Grid>

                <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="p"fontSize="12px" fontWeight={450} color="#848a9b">10 April 2023 - 11 April 2023</Typography>
                </Grid>

                <Grid item xs={6}>
                    
                <Stack direction="row">
                    <Box flex={2} display="flex" alignItems="center" justifyContent="center"> <Icon style={{color:"#556ee6" }}><ChatBubbleOutline /> </Icon> </Box>
                    <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" ,color:"#556ee6"}}>Deny</Button></Box>
                    <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eef1ff",color:"#556ee6", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>
                    </Stack>
                </Grid>
    
                </Grid>
 
              </Box>
              </Grid>

              <Grid item xs={6}>
              <Box sx={{bgcolor:"#fff",borderRadius:"15px", padding:"20px",marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                  
              <Grid container>
                <Grid item xs={6} >
                <Chip 
                        avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                        style={{ width: '50px', height: '50px' }} />}
                    label={
                    <>
                        <h4>David Kail</h4>
                    <Typography variant="p" sx={{color:"#848a9b"}}>UI/UX Designer</Typography>
                    </> 
                    }
                    style={{ backgroundColor: 'transparent' }} 
                    />
                <br /><br />
                <Typography variant="p" fontSize="15px" fontWeight={450}>Personal Work</Typography>

                </Grid>

                <Grid item xs={6}>
                  <Stack direction="row">
                      <Box flex={2} ></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",fontSize:"12px",color:"#556ee6", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",color:"#556ee6",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>2 Days</Button></Box>
                  </Stack>
                </Grid>
    
                </Grid>

                <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="p"fontSize="12px" fontWeight={450} color="#848a9b">10 April 2023 - 11 April 2023</Typography>
                </Grid>

                <Grid item xs={6}>
                    
                <Stack direction="row">
                    <Box flex={2} display="flex" alignItems="center" justifyContent="center"> <Icon style={{color:"#556ee6" }}><ChatBubbleOutline /> </Icon> </Box>
                    <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" ,color:"#556ee6"}}>Deny</Button></Box>
                    <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eef1ff",color:"#556ee6", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>
                    </Stack>
                </Grid>
    
                </Grid>
 
              </Box>
              </Grid>

            </Grid>

            
            <Grid container spacing={3} marginTop={-0.6}>

              <Grid item xs={6}>
              <Box sx={{bgcolor:"#fff",borderRadius:"15px", padding:"20px",  marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>

                <Grid container>
                <Grid item xs={6} >
                <Chip 
                      avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                      style={{ width: '50px', height: '50px' }} />}
                    label={
                    <>
                      <h4>Kevin lyn</h4>
                      <Typography variant="p" sx={{color:"#848a9b"}}>UX Researcher</Typography>
                    </> 
                    }
                    style={{ backgroundColor: 'transparent' }} 
                    />
                <br /><br />
                <Typography variant="p" fontSize="15px" fontWeight={450}>Vacation </Typography>

                </Grid>

                <Grid item xs={6}>
                  <Stack direction="row">
                      <Box flex={2} ></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",fontSize:"12px",color:"#556ee6", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                      <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#f9fafc",color:"#556ee6",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>2 Days</Button></Box>
                  </Stack>
                </Grid>
    
                </Grid>

                <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="p"fontSize="12px" fontWeight={450} color="#848a9b">10 April 2023 - 11 April 2023</Typography>
                </Grid>

                <Grid item xs={6}>
                    
                <Stack direction="row">
                    <Box flex={2} display="flex" alignItems="center" justifyContent="center"> <Icon style={{color:"#556ee6" }}><ChatBubbleOutline /> </Icon> </Box>
                    <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" ,color:"#556ee6"}}>Deny</Button></Box>
                    <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eef1ff",color:"#556ee6", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>
                    </Stack>
                </Grid>
    
                </Grid>
 
              </Box>
              </Grid>

              <Grid item xs={6}></Grid>
          </Grid>


          <Box>
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"25px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
           <Typography variant="h6" sx={{fontFamily:"inherit"}}>Team Activity</Typography>
           <br/>

           <Stack direction="row" justifyContent="space-between"  spacing={2} >
            <Box flex={5}> 
            <Search sx={{border:"1px solid #d4d4d4", color:"#000", fontFamily:"inherit", marginLeft:"0px !important" ,width:"300px !important"}}>
            <SearchIconWrapper sx={{color:"#5f5f5f", padding:"10px 12px"}}>
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Name or Employee id"
              inputProps={{ 'aria-label': 'search' }} sx={{width:"300px !important"}} 
            />
          </Search>
          </Box>

          <Box>
          <Dropdown>
            <MenuButton sx={{padding:"6px 30px", border:"1px solid #d4d4d4", color:"#a4a4a4", fontWeight:"600" ,fontSize:"15px", alignItems: "flex-start !important" }}>Daywise
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
            </Box>

            <Box>
            <Typography variant="p" fontSize="14px" fontWeight={450} fontFamily="inherit">Today( 17 Apr )</Typography>
            </Box>
           </Stack>
           <br/>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow  sx={{bgcolor:"#eef1ff", height:"40px"}}>
                    <TableCell sx={{ borderRadius: "10px" ,border:"5px solid white" }}>Emp.ID</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px" , border:"5px solid white"  }}>User</TableCell>
                    <TableCell align="left" sx={{ borderRadius: "15px" , border:"5px solid white" }}>In Time</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"   }}>Out Time</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>Work Time</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>Breal Time</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>Over Time</TableCell>
                    <TableCell align="left"   sx={{ borderRadius: "15px", border:"5px solid white"  }}>Action</TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">
                    <Chip
                    avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" />}
                    label= {row.user}
                    variant="outlined"
                    style={{ border: '0px' }} 
                    />
                       </TableCell>
                    <TableCell align="left">{row.intime}</TableCell>
                    <TableCell align="left">{row.outtime}</TableCell>
                    <TableCell align="left">{row.worktime}</TableCell>
                    <TableCell align="left">{row.breaktime}</TableCell>
                    <TableCell align="left">{row.overtime}</TableCell>
                    <TableCell align="left">{row.actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
            </Box>
            </Box>

        </Box>
        </>
    )
}