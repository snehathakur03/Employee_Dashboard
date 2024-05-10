import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Typography,List } from '@mui/material';
import {CakeOutlined, WorkHistoryOutlined} from '@mui/icons-material';

const ListItemName = styled(ListItemText) (({theme}) => ({
  '.MuiListItemText-primary': {
    fontSize: '13px', 
    fontWeight: '600', 
    color:'#151724'
  },

  '.MuiListItemText-secondary': {
    fontSize: '12px', 
    color: '#787a81'
  },
}))

export default function Calender() {

  
  return (
  <>
   <Box paddingLeft={4} paddingRight={4} flex={4} bgcolor={"#edecec57"}>
      <Box padding={"16px 0px"} width={"100%"}>
      <Typography  fontWeight={700} fontSize={19} variant="p">
          Calender
      </Typography>        
        </Box>
        <Divider />

    <Box sx={{bgcolor:"#fff", height:"90vh", borderRadius:"15px",padding:"20px", marginTop:"15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
    <Grid container spacing={2}>
    <Grid item xs={9}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar className="custom-calendar" />
    </LocalizationProvider>
  </Grid>
  <Grid item xs={3}>
    <Box>
    <Typography variant="p" fontSize={17} fontWeight={600} >Events</Typography>
    </Box>

    <Box>

    <List>
    <ListItem  sx={{paddingLeft:"0px !important"}}>
      <ListItemAvatar>
          <CakeOutlined sx={{fontSize:"1.8rem", color:"#556ee6"}}/>
      </ListItemAvatar>
      <ListItemName primary="Krystal's birthday" secondary="13 Jan, 2024" />
      </ListItem>

      <Divider />

      <ListItem  sx={{paddingLeft:"0px !important"}}>
      <ListItemAvatar>
          <CakeOutlined  sx={{fontSize:"1.8rem", color:"#556ee6"}}/>
      </ListItemAvatar>
      <ListItemName primary="Clive's birthday" secondary="28 Nov, 2024" />
      </ListItem>

      <Divider />

      <ListItem  sx={{paddingLeft:"0px !important"}}>
      <ListItemAvatar>
          <WorkHistoryOutlined  sx={{fontSize:"1.8rem", color:"#556ee6"}}/>
      </ListItemAvatar>
      <ListItemName primary="Dwen's work anniversary" secondary="10 Dec, 2024" />
      </ListItem>

    </List>
    </Box>

  </Grid>
  </Grid>
  </Box>

  
    </Box>
    </>
  );
}
