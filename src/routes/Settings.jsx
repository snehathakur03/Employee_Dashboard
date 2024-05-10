import React, { useState, useEffect } from "react";
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography, Divider, Grid, Avatar, TextField, Button, MenuItem, Stack, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';

const AvatarListModal = styled(Avatar)(({ theme }) => ({
  width: "100px",
  height: "100px",
}));

export default function UserSetting() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const team = [
    {
      value: 'Developer',
      label: 'Developer',
    },
    {
      value: 'Tester',
      label: 'Tester',
    },
    {
      value: 'Sales',
      label: 'Sales',
    },
  ];

  const reporting = [
    {
      value: 'Colbey',
      label: 'Colbey',
    },
    {
      value: 'Clive',
      label: 'Clive',
    },
    {
      value: 'Dwen',
      label: 'Dwen',
    },
  ];

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleAvatarSelect = (avatarSrc) => {
    setSelectedAvatar(avatarSrc);
    localStorage.setItem('selectedAvatar', avatarSrc); 
    handleClose();
  };

  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
    }
  }, []); 

  const handleRemoveAvatar = () => {
    setSelectedAvatar(null);
    localStorage.removeItem('selectedAvatar');
  };


  return (
    <>
      <Box paddingLeft={4} paddingRight={4} height="100vh" flex={4} bgcolor={"#edecec57"}>
        <Box padding={"16px 0px"} width={"100%"}>
          <Typography fontWeight={700} fontSize={19} variant="p">
            Settings
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ bgcolor: "#fff", width: "75%", height: "auto", borderRadius: "15px", padding: "20px", marginTop: "15px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box display="flex" flexDirection="column" alignItems="center" >
                <Avatar src={selectedAvatar} sx={{ bgcolor: "transparent", width: "150px", height: "150px", backgroundColor: "#eef1ff" }}>
                  {selectedAvatar ? null : <PersonOutlineOutlined sx={{ fontSize: "4.5rem", color: "#556ee6" }} />}
                </Avatar>
                <Box sx={{ marginTop: "12px" }}>
                  <Button variant="text" onClick={handleClickOpen} sx={{ color: "#556ee6", textTransform: "capitalize", fontWeight: "550", width: "100px",'&:hover':{bgcolor:'transparent !important' }}}>Edit Avatar</Button>
                </Box>
                {selectedAvatar && (
                  <Button variant="text" onClick={handleRemoveAvatar} sx={{ color: "#de275c", textTransform: "capitalize", fontWeight: "550", width: "170px",'&:hover':{bgcolor:'transparent !important' } }}>Remove Avatar</Button>
                )}
              </Box>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Grid item justifyContent="center" xs={8}>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
  <TextField id="outlined-basic" size="small" label="First Name" variant="outlined" 
    sx={{
    '& label': {
      fontSize: '13px',
      color: '#5f5f5f',
      lineHeight: "1.8em",
    },
  }}/>

      <TextField id="outlined-basic" size="small" label="Last Name" variant="outlined" 
        sx={{
            '& label': {
              fontSize: '13px',
              color: '#5f5f5f',
              lineHeight: "1.8em",
            },
          }}/>

      <TextField id="outlined-basic" size="small" label="Email" variant="outlined" 
      sx={{
        '& label': {
          fontSize: '13px',
          color: '#5f5f5f',
          lineHeight: "1.8em",
        },
      }}/>

    <Button variant="outlined" size="small"
    sx={{
        textTransform:"capitalize",
        fontSize: '13px',
        color: '#556ee6',
        padding: "7.5px 14px",
        width:"80px !important",
        fontWeight:"600",
        borderColor:"#a8acb8"
    }}>Verify</Button>
    <br />

      <TextField id="outlined-basic" size="small" label="Designation" variant="outlined" 
        sx={{
            '& label': {
              fontSize: '13px',
              color: '#5f5f5f',
              lineHeight: "1.8em",
            },
          }}/>

    <TextField id="outlined-basic"  select size="small" label="Team" variant="outlined" 
        sx={{
            '& label': {
              fontSize: '13px',
              color: '#5f5f5f',
              lineHeight: "1.8em",
            },
          }}>
          {team.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="outlined-basic"  select size="small" label="Reporting Manager" variant="outlined" 
        sx={{
            '& label': {
              fontSize: '13px',
              color: '#5f5f5f',
              lineHeight: "1.8em",
            },
          }}>
          {reporting.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
                      </Box>

              <Stack direction="row" sx={{ marginLeft: '68%', marginTop: "70px" }}>
                <Button variant="text" sx={{ color: "#516ed9", textTransform: "capitalize", fontWeight: "600", width: "100px" ,'&:hover':{bgcolor:'transparent !important' }}}>Cancel</Button>
                <Button variant="contained" sx={{ backgroundColor: "#556ee6", boxShadow: "none", textTransform: "capitalize", fontWeight: "500", width: "100px" }}>Save</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}>
          {"Select Your Avatar"}
        </DialogTitle>
        <DialogContent sx={{ margin: '40px' }} >

          <Stack direction="row" spacing={6} >
            <AvatarListModal alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?semt=ais" onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?semt=ais")} />
            <AvatarListModal alt="Travis Howard" src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?semt=ais" onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?semt=ais")} />
            <AvatarListModal alt="Cindy Baker" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?t=st=1714978711~exp=1714982311~hmac=2a37e5b97534ee8c520474d55e6a9d2d6a8f5f74b06e2cad3515411347066bf7" onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?t=st=1714978711~exp=1714982311~hmac=2a37e5b97534ee8c520474d55e6a9d2d6a8f5f74b06e2cad3515411347066bf7")} />
          </Stack>

          <br />
          <Stack direction="row" spacing={6}>
        <AvatarListModal
          alt="Remy Sharp"
          src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?t=st=1714979330~exp=1714982930~hmac=d8522352b887190bb3b62380d563beaa3c40b921eae5915c76061a4cdf6c45e5"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?t=st=1714979330~exp=1714982930~hmac=d8522352b887190bb3b62380d563beaa3c40b921eae5915c76061a4cdf6c45e5")}
        />
        <AvatarListModal
          alt="Travis Howard"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671163.jpg?t=st=1714978991~exp=1714979591~hmac=121c616f8a4b00f13263c0a6d479b23127d2949bd2db8aa4c9b786ba2bc31e58"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671163.jpg?t=st=1714978991~exp=1714979591~hmac=121c616f8a4b00f13263c0a6d479b23127d2949bd2db8aa4c9b786ba2bc31e58")}
        />
        <AvatarListModal
          alt="Cindy Baker"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?t=st=1714979265~exp=1714982865~hmac=8ff57d556de571296838fdeddf999c705b850a4c5c1479a23eb4502c491459d2&w=360"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?t=st=1714979265~exp=1714982865~hmac=8ff57d556de571296838fdeddf999c705b850a4c5c1479a23eb4502c491459d2&w=360")}
        />
      </Stack>

      <br />

      <Stack direction="row" spacing={6}>
        <AvatarListModal
          alt="Remy Sharp"
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611740.jpg?t=st=1714979416~exp=1714983016~hmac=373c16db61b9b593db4be75aca523d27b64ef2a2e6c793357da4c2c31e36bf21"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611740.jpg?t=st=1714979416~exp=1714983016~hmac=373c16db61b9b593db4be75aca523d27b64ef2a2e6c793357da4c2c31e36bf21")}
        />
        <AvatarListModal
          alt="Travis Howard"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?t=st=1714979481~exp=1714980081~hmac=1c9b190c0f061b2c86a57f8bd096bc1492a7d3a2d44fc875572ed0a80c51b047"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?t=st=1714979481~exp=1714980081~hmac=1c9b190c0f061b2c86a57f8bd096bc1492a7d3a2d44fc875572ed0a80c51b047")}
        />
        <AvatarListModal
          alt="Cindy Baker"
          src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?t=st=1714979575~exp=1714980175~hmac=9ed6b9a64da65da4e2b8197e50224dc35c50d02302db3234f0073cdc7bd4d2f1"
          onClick={() => handleAvatarSelect("https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?t=st=1714979575~exp=1714980175~hmac=9ed6b9a64da65da4e2b8197e50224dc35c50d02302db3234f0073cdc7bd4d2f1")}
        />
      </Stack>


        </DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'center',paddingBottom:"15PX" }}>
          <Button sx={{ color: "#556ee6", textTransform: "capitalize", fontWeight: "600", width: "100px", fontSize: "15px" }} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          </Box>
        
      </Dialog>
    </>
  );
}
