import React from "react";
import { styled, alpha } from '@mui/material/styles';
import {Box,InputBase , Divider, Stack, Typography, useTheme, useMediaQuery, IconButton,TablePagination , Icon, Button, Chip,Avatar,TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody} from "@mui/material";
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
        <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"} width="100%" >

        <Box padding={"16px 0px"} width={"100%"}>
        <Typography  fontWeight={700} fontSize={19} variant="p">
            UI/UX Team
        </Typography>
        </Box>
        <Divider />
        
        <Box marginTop="15px">
        <Stack direction = "row"  justifyContent="space-between" marginTop = {isXsOrSmScreen ?"15px":"0px"}  >
                <Typography variant="p"  fontSize={14} fontWeight={600} color={"#666666"}> Team Stats</Typography>
               <Box>
                <Dropdown>
                <MenuButton sx={{padding:"0px", border:"0px", color:"#666666", fontWeight:"600" , alignItems: "flex-start !important" }}>Daywise
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
            </Stack>

        <Stack  direction={isXsOrSmScreen ? 'column' : 'row'}
                justifyContent="space-between"
                spacing={3} 
                sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>

            <Box flex="2" >
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Box sx={{display:"flex", height:"100px",  alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>9:16 AM
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Teams's Average in time
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box width={isXsOrSmScreen ? "100px":"55px" } sx={{ height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SouthOutlined color="primary"/>
                        </Box>
                    </Box>
            </Box>
            </Box>

            <Box flex="2" >
             <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Box sx={{display:"flex", height:"100px",  alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>45 m
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Teams's Average Break Time
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box width={isXsOrSmScreen ? "100px":"55px" } sx={{ height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FreeBreakfastOutlined color="primary"/>
                        </Box>
                    </Box>
            </Box>
            </Box>

            <Box flex="2">
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Box sx={{display:"flex", height:"100px",  alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>4h 23m
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Teams's Average Work time
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box width={isXsOrSmScreen ? "100px":"55px" } sx={{ height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <HourglassBottom color="primary"/>
                        </Box>
                    </Box>
            </Box>
            </Box>

            <Box flex="2">
            <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Box sx={{display:"flex", height:"100px",  alignItems: "center", justifyContent: "center" }}>
                        <Stack direction="column">
                        <Typography variant="h5"  fontWeight={560} letterSpacing={0.9}>-
                        </Typography>
                        <Typography variant="h7" fontSize="14px" fontWeight={500} letterSpacing={0.9} marginTop={1} color="#6f6f6f">Teams's Average Out time
                        </Typography>
                        </Stack>

                        <Box flex={0.6}></Box>
                        <Box width={isXsOrSmScreen ? "100px":"55px" } sx={{ height:"55px", bgcolor:"#e9ecf5",textAlign:"center", borderRadius:"28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ShortcutOutlined color="primary"/>
                        </Box>
                    </Box>
            </Box>
            </Box>
        </Stack>
        </Box>
        <br />


        <Box sx={{ 
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display: "flex",
            alignItems: "center", 

            }}>  

        <Stack direction= {isXsOrSmScreen ? "column":"row"} justifyContent="space-between" spacing= {isXsOrSmScreen ? "0px":"460px"}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Icon><ErrorOutline color="primary"/></Icon>
                
            <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
            Wade Warren was absent on 12th December 2023 without any intimation.
                </Typography>
            </Box>
            
            <Button variant="outlined" 
            sx={{ textTransform:"none",
            fontFamily:"Poppins,san-serif"}}
            alignItems= "flex-start !important" >Send Reminder</Button>
            </Stack>
            </Box>
            {/* <br/> */}

            <Stack direction="row" marginTop={2} justifyContent="space-between" spacing={5}>
                <Box flex={6} >
                <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <Stack direction="row">
                    <Box flex={6} >
                    <Chip 
                        avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                        style={{ width: '50px', height: '50px' }} />}
                        label={
                        <>
                        <h4>Johny Wilson</h4>
                        <p>UI/UX Designer</p>
                        </> 
                        }
                        style={{ backgroundColor: 'transparent' }} 
                    />
                    <br/>   <br/>
                    <Typography variant="p" fontSize="15px" fontWeight={450}>Friend's Wedding Celebration </Typography>
                    </Box>


                    <Box flex={6} height="100px">
                        
                    <Stack direction="row">
                        <Box flex={2} ></Box>

                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",fontSize:"12px",color:"#1976d2", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",color:"#1976d2",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>2 Days</Button></Box>
                        </Stack>
                    </Box>
                    </Stack>

                    <Stack direction="row">
                        <Box flex={6}><Typography variant="p"fontSize="12px" fontWeight={450} color="grey">10 April 2023 - 11 April 2023</Typography></Box>
                        <Box flex={2} > <Icon style={{color:"#52a9ff" }}><ChatBubbleOutline /> </Icon> </Box>
                        <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" }}>Deny</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#ecececa6",color:"#1976d2", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>

                    </Stack>
                </Box>

                </Box>

                <Box flex={6} >
                <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    
                <Stack direction="row">
                    <Box flex={6} >
                    <Chip 
                        avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                        style={{ width: '50px', height: '50px' }} />}
                        label={
                        <>
                        <h4>David Kail</h4>
                        <p>UI/UX Designer</p>
                        </> 
                        }
                        style={{ backgroundColor: 'transparent' }} 
                    />
                    <br/>   <br/>
                    <Typography variant="p" fontSize="15px" fontWeight={450}>Personal Work</Typography>
                    </Box>


                    <Box flex={6} height="100px">
                        
                    <Stack direction="row">
                        <Box flex={2} ></Box>

                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",fontSize:"12px",color:"#1976d2", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",color:"#1976d2",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>2 Days</Button></Box>
                        </Stack>
                    </Box>
                    </Stack>

                    <Stack direction="row">
                        <Box flex={6}><Typography variant="p"fontSize="12px" fontWeight={450} color="grey">13 Marcg 2023 - 14 March 2023</Typography></Box>
                        <Box flex={2} > <Icon style={{color:"#52a9ff" }}><ChatBubbleOutline /> </Icon> </Box>
                        <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" }}>Deny</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#ecececa6",color:"#1976d2", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>

                    </Stack>

                </Box>

                </Box>
                
            </Stack>


            <Stack direction="row" marginTop={2} justifyContent="space-between" spacing={5}>
                <Box flex={6} >
                <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <Stack direction="row">
                    <Box flex={6} >
                    <Chip 
                        avatar={<Avatar alt="Natacha" src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                        style={{ width: '50px', height: '50px' }} />}
                        label={
                        <>
                        <h4>Kevin lyn</h4>
                        <p>UX Researcher</p>
                        </> 
                        }
                        style={{ backgroundColor: 'transparent' }} 
                    />
                    <br/>   <br/>
                    <Typography variant="p" fontSize="15px" fontWeight={450}>Vacation </Typography>
                    </Box>


                    <Box flex={6} height="100px">
                        
                    <Stack direction="row">
                        <Box flex={2} ></Box>

                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",fontSize:"12px",color:"#1976d2", borderRadius:"20px",fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Casual</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#eeeeee5e",color:"#1976d2",fontSize:"12px", borderRadius:"20px", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>4 Days</Button></Box>
                        </Stack>
                    </Box>
                    </Stack>

                    <Stack direction="row">
                        <Box flex={6}><Typography variant="p"fontSize="12px" fontWeight={450} color="grey">15 May 2023 - 19 May 2023</Typography></Box>
                        <Box flex={2} > <Icon style={{color:"#52a9ff" }}><ChatBubbleOutline /> </Icon> </Box>
                        <Box flex={2} ><Button variant="text" style={{textTransform:"none",fontFamily: 'inherit',fontWeight:"450" }}>Deny</Button></Box>
                        <Box flex={2}> <Button variant="contained" style={{backgroundColor:"#ecececa6",color:"#1976d2", fontFamily:"inherit", textTransform:"none",boxShadow:"none"}}>Approve</Button></Box>

                    </Stack>
                </Box>

                </Box>

                <Box flex={6} >
            
                </Box>

            </Stack>

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
                <TableRow  sx={{bgcolor:"#ecececde", height:"40px"}}>
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