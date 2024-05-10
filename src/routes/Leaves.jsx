import React from 'react';
import {Box,Typography,IconButton,Grid, Button, Icon,TableContainer,Paper,Table,TableHead,TableRow,TableBody,TableCell,TablePagination} from "@mui/material";
import {ErrorOutline,KeyboardArrowDown} from "@mui/icons-material";
import {Dropdown, MenuButton,Menu,MenuItem} from '@mui/joy';


export default function Activity() {
  
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
    srno: number,
    type: string,
    from: number,
    to: number,
    days: number,
    reason: string,
    status: string,
    action: string,


  ) {
    return { srno, type, from, to, days,reason,status,action };
  }
  
 const rows = [
    createData(1, "Casual", "19 Feb 2024 - 9:00 AM", "19 Feb 2024 - 6:00 PM", "1h", "Friends wedding celebration", "pending", "..."),
    createData(2, "Formal", "20 Feb 2024 - 10:00 AM", "20 Feb 2024 - 7:00 PM", "2h", "Business meeting", "approved", "..."),
    createData(3, "Sick", "21 Feb 2024 - 11:00 AM", "21 Feb 2024 - 8:00 PM", "3h", "Fever", "rejected", "..."),
    createData(4, "Vacation", "22 Feb 2024 - 12:00 PM", "22 Feb 2024 - 9:00 PM", "4h", "Holiday trip", "pending", "..."),
    createData(5, "Casual", "23 Feb 2024 - 1:00 PM", "23 Feb 2024 - 10:00 PM", "5h", "Family gathering", "approved", "..."),
    createData(6, "Formal", "24 Feb 2024 - 2:00 PM", "24 Feb 2024 - 11:00 PM", "6h", "Conference", "rejected", "..."),
    createData(7, "Sick", "25 Feb 2024 - 3:00 PM", "25 Feb 2024 - 12:00 AM", "7h", "Cold", "pending", "..."),
    createData(8, "Vacation", "26 Feb 2024 - 4:00 PM", "26 Feb 2024 - 1:00 AM", "8h", "Beach trip", "approved", "..."),
    createData(9, "Casual", "27 Feb 2024 - 5:00 PM", "27 Feb 2024 - 2:00 AM", "9h", "Dinner with friends", "rejected", "..."),
    createData(10, "Formal", "28 Feb 2024 - 6:00 PM", "28 Feb 2024 - 3:00 AM", "10h", "Client presentation", "pending", "..."),
    createData(11, "Sick", "1 Mar 2024 - 7:00 PM", "1 Mar 2024 - 4:00 AM", "11h", "Stomach ache", "approved", "..."),
    createData(12, "Vacation", "2 Mar 2024 - 8:00 PM", "2 Mar 2024 - 5:00 AM", "12h", "Mountain trekking", "rejected", "..."),
    createData(13, "Casual", "3 Mar 2024 - 9:00 PM", "3 Mar 2024 - 6:00 AM", "13h", "Movie night", "pending", "..."),
    createData(14, "Formal", "4 Mar 2024 - 10:00 PM", "4 Mar 2024 - 7:00 AM", "14h", "Board meeting", "approved", "..."),
    createData(15, "Sick", "5 Mar 2024 - 11:00 PM", "5 Mar 2024 - 8:00 AM", "15h", "Flu", "rejected", "...")
];


   
    return(
      <>
       

        <Box marginTop="15px">
        <Grid container spacing={3}>
      
        <Grid item xs={3}>
        <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
     
        <Grid container spacing={2}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ borderRadius: "15px", width: "60px", height: "60px", backgroundColor: "#eef1ff", display: "flex", alignItems: "center", justifyContent: "center" }}> 
                <Typography variant="p" sx={{ color: "#556ee6", fontWeight: "600", fontSize: "17px" }}>16</Typography>
            </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="p" sx={{ color: "#606060", fontWeight: "600", fontSize: "13px", marginLeft: "5px" }}>Available leaves</Typography>
            </Box>
        </Grid>
         </Grid>


        
        </Box>
        </Grid>

        <Grid item xs={3}>
        <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      
        <Grid container spacing={2}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ borderRadius: "15px", width: "60px", height: "60px", backgroundColor: "#eef1ff", display: "flex", alignItems: "center", justifyContent: "center" }}> 
                <Typography variant="p" sx={{ color: "#556ee6", fontWeight: "600", fontSize: "17px" }}>10</Typography>
            </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="p" sx={{ color: "#606060", fontWeight: "600", fontSize: "13px", marginLeft: "5px" }}>Previous unused leaves</Typography>
            </Box>
        </Grid>
         </Grid>
        

        </Box>
        </Grid>

        <Grid item xs={3}>
        <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
       
        <Grid container spacing={2}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ borderRadius: "15px", width: "60px", height: "60px", backgroundColor: "#ffe5c5", display: "flex", alignItems: "center", justifyContent: "center" }}> 
                <Typography variant="p" sx={{ color: "#ec8700", fontWeight: "600", fontSize: "17px" }}>02</Typography>
            </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="p" sx={{ color: "#606060", fontWeight: "600", fontSize: "13px", marginLeft: "5px" }}>Pending leave request</Typography>
            </Box>
        </Grid>
         </Grid>

        </Box>
        </Grid>

        <Grid item xs={3}>
        <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        
        <Grid container spacing={2}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ borderRadius: "15px", width: "60px", height: "60px", backgroundColor: "#fcd0ce", display: "flex", alignItems: "center", justifyContent: "center" }}> 
                <Typography variant="p" sx={{ color: "#d52702", fontWeight: "600", fontSize: "17px" }}>03</Typography>
            </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="p" sx={{ color: "#606060", fontWeight: "600", fontSize: "13px", marginLeft: "5px" }}>Rejected leaves</Typography>
            </Box>
        </Grid>
         </Grid>
        
        
        </Box>
        </Grid>

        </Grid>
        </Box>

<br />

        <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Grid container spacing={2}>
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>

            <Icon marginLeft="0 !important"><ErrorOutline color="error"/></Icon>
                
            <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
           You were absent on 13th April 2024.
                </Typography>
            </Grid>

            <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>

            <Button variant="text" 
            sx={{ textTransform:"none",
            fontSize:"13px",
            fontFamily:"Poppins,san-serif",
            color:"#556ee6"}}
            alignItems= "flex-start !important" >Apply leave</Button>

            <Button variant="outlined" 
            sx={{ textTransform:"none",
            fontSize:"13px",
            fontFamily:"Poppins,san-serif",
            color:"#556ee6",
            borderColor:"#a8acb8"}}
            alignItems= "flex-start !important" >Apply on duty</Button>
            </Grid>
            </Grid>
            </Box>


<br />

    <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
    <Grid container spacing={2}>
    <Grid item xs={9} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>            
    <Typography variant="p" sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}>
  Your compensatory off will expire on 31 Apr 2024
        </Typography>
    </Grid>

    <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>

    <Button variant="text" 
    sx={{ textTransform:"none",
    fontSize:"13px",
    fontFamily:"Poppins,san-serif",color:"#556ee6"}}
    alignItems= "flex-start !important" >Read leave policy</Button>

    <Button variant="outlined" 
    sx={{ textTransform:"none",
    fontSize:"13px",
    fontFamily:"Poppins,san-serif",color:"#556ee6", 
    borderColor:"#a8acb8"}}
    alignItems= "flex-start !important" >Apply leave</Button>
    </Grid>
    </Grid>
    </Box>

    <br />
    <Box sx={{bgcolor:"#fff",borderRadius:"15px",padding:"20px", marginTop:"25px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
           <Typography variant="h6" sx={{fontFamily:"inherit"}}>Leaves</Typography>
           <br/>

            <Grid container spacing={1}>
           <Grid item xs="2">
          <Dropdown>
            <MenuButton sx={{padding:"6px 30px", border:"1px solid #d4d4d4", color:"#a4a4a4", fontWeight:"600" ,fontSize:"15px", alignItems: "flex-start !important" }}>Last 6 months
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

          <Grid item xs="2">
          <Dropdown>
            <MenuButton sx={{padding:"6px 30px", border:"1px solid #d4d4d4", color:"#a4a4a4", fontWeight:"600" ,fontSize:"15px", alignItems: "flex-start !important" }}>Status  
            <IconButton sx={{ alignItems: "flex-start !important" , padding:"0px"}}>
                <KeyboardArrowDown sx={{color:"#898989",  alignItems: "flex-start !important"  }}/>
                </IconButton>
            </MenuButton>
            <Menu>
                <MenuItem>Pending</MenuItem>
                <MenuItem>Approved</MenuItem>
                <MenuItem>Rejected</MenuItem>
            </Menu>
        </Dropdown>
            </Grid>

            <Grid item xs="8" display="flex" justifyContent="flex-end">
            <Button variant="contained" 
            sx={{ textTransform:"none",
            fontSize:"13px",
            fontFamily:"Poppins,san-serif",
            backgroundColor:"#556ee6",
            color:"white"}}
            alignItems= "flex-start !important" >Apply Leave</Button>
            </Grid>
           </Grid>
           <br/>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow  sx={{bgcolor:"#ecececde", height:"40px",color:"#787a81"}}>
                    <TableCell sx={{ borderRadius: "10px" ,border:"5px solid white" }}>Srno</TableCell>
                    <TableCell align="left" sx={{ borderRadius: "15px" , border:"5px solid white" }}>Type</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"   }}>From</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>To</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>Days</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px", border:"5px solid white"  }}>Reason</TableCell>
                    <TableCell align="left"   sx={{ borderRadius: "15px", border:"5px solid white"  }}>Status</TableCell>
                    <TableCell align="left"  sx={{ borderRadius: "15px" , border:"5px solid white"  }}>Action</TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow
                    key={row.srno}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.srno}
                    </TableCell>
                   
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.from}</TableCell>
                    <TableCell align="left">{row.to}</TableCell>
                    <TableCell align="left">{row.days}</TableCell>
                    <TableCell align="left">{row.reason}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.action}</TableCell>
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
 
      </>
    )
}