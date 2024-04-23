  import {React, useState} from "react";
  import {Box, List, ListItem, ListItemButton, ListItemIcon, Typography, Badge} from "@mui/material";
  import {ShowChartOutlined, GroupOutlined, AccessTimeOutlined, VolumeDownOutlined, CalendarTodayOutlined, SettingsOutlined, LogoutOutlined} from "@mui/icons-material"


  function Sidebar({ isOpen }) {
    const [selected, setSelected] = useState(null);
  
    return (
          // <Box  height={`${windowHeight}px`}  flex={0.1} bgcolor={"#fff"} borderRight={"2px solid #ede5e5"}  sx={{ display:{xs:"none", sm:"block  "}}}>
          <Box sx={{ display: isOpen ? "block" : "none" }}>

          {/* <Box position="fixed"> */}
      <List disableFocusOnHover	>
            <ListItem disablePadding > 
              <ListItemButton sx={{ justifyContent: "center", "&:hover":{bgcolor:'transparent'}}}>    
                <Typography variant="h4" fontWeight={"bold"} color={"#516ed9bf"} >hr</Typography><br /><br />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button1'}
                  onClick={() => setSelected('button1')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button1' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button1' ? '#fff':'#8c8c8cc2',
                }}>
                      <ShowChartOutlined />
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button2'}
                  onClick={() => setSelected('button2')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button2' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button2' ? '#fff':'#8c8c8cc2',
                }}>
                      <GroupOutlined />
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button3'}
                  onClick={() => setSelected('button3')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button3' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button3' ? '#fff':'#8c8c8cc2',
                }}>
                      <AccessTimeOutlined />
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button4'}
                  onClick={() => setSelected('button4')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button4' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button4' ? '#fff':'#8c8c8cc2',
                }}>
                  <Badge badgeContent={2} color="primary" >
                      <VolumeDownOutlined />
                      </Badge>
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button5'}
                  onClick={() => setSelected('button5')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button5' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button5' ? '#fff':'#8c8c8cc2',
                }}>
                      <CalendarTodayOutlined />
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button3'}
                  onClick={() => setSelected('button3')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button6' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button6' ? '#fff':'#8c8c8cc2',
                }}>
                      <SettingsOutlined />
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>

            </List>


            <Box position="absolute" bottom={0} left={0} right={0} textAlign="center">
            
            <ListItem disablePadding > 
              <ListItemButton component="a" href="#"
                  selected={selected === 'button7'}
                  onClick={() => setSelected('button7')}
                  sx={{ "&:hover": { bgcolor: 'transparent' },
                  "&.Mui-selected": {bgcolor:'transparent'}, 
                    "&.Mui-selected:hover": {bgcolor:'transparent'} }}>
                  <ListItemIcon sx={{ justifyContent: "center"  }}> 
                  <Box p={1} borderRadius={2} 
                sx={{
                  bgcolor: selected === 'button7' ? '#516ed9' : '#ebebeb70',
                  color: selected ==='button7' ? '#fff':'#8c8c8cc2',
                }}>
                      <LogoutOutlined sx={{color:selected=== 'button7' ? "#fff" : "red"}}/>
                      </Box>
                  </ListItemIcon>
              </ListItemButton>
            </ListItem>
            </Box>

      {/* </Box> */}
      </Box>
      )
  }

  export default Sidebar;