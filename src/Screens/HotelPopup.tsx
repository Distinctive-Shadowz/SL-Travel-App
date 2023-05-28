import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from '@mui/icons-material/Close';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating } from "@mui/material";



// import Image from "next/image";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}



export const HotelPopup:React.FC<{src:any}> =({src}) =>{
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<null| number>(2);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{gap:'10px', display:'flex'}}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          color: "Black",
          bgcolor: "#e6ea18",
          fontFamily: "Open Sans",
          width: "6.5rem",
          height: "25px",
          position: "relative",
          left: "0px",
          mt: "0.5rem",

          fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.7rem" },
        }}
      >
        View 
      </Button>
      <a href="Meal">
       <Button
        variant="outlined"
       
        sx={{
          color: "Black",
          bgcolor: "#e6ea18",
          fontFamily: "Open Sans",
          width: "6.5rem",
          height: "25px",
          position: "relative",
          left: "0px",
          mt: "0.5rem",

          fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.7rem" },
        }}
      >
      View Meal
      </Button>
      </a>
      </Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          // sx={{
          //   bgcolor: "#B1D4F4",
          //   fontSize: { md: "1.2rem", xs: "1rem", sm: "1rem" },
          // }}
        >
          The Lucky Elepahant Hotel in Hikkaduwa
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            <Typography
              sx={{
                color: "#1B0B7D",
                fontSize: { md: "1.2rem", xs: "1rem", sm: "1rem" },
              }}
            >
              Overview
            </Typography>
            <Rating
              sx={{
                fontSize: { md: "1rem", xs: "0.7rem", sm: "0.9rem" },
                py: { xs: 0.5, sm: 1, md: 1 },

                display: "flex",
                justifyContent: "flex-start",
              }}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>
          <Grid container>
            <Grid xs={12} sm={8} md={8}>
              <Typography
                gutterBottom
                variant="body2"
                sx={{
                  fontSize: { md: "0.8rem", xs: "0.7rem", sm: "0.8rem" },
                  // wordSpacing: "1px",
                }}
              >
                With a stay at this property, you can get your journey off to a
                terrific start. This hotel is conveniently located in the
                Maldives South Male Atoll, close to sights and fascinating
                dining alternatives.
              </Typography>
              <br />
              <Typography
                gutterBottom
                variant="body2"
                sx={{
                  fontSize: { md: "0.8rem", xs: "0.7rem", sm: "0.8rem" },
                  // wordSpacing: "1px",
                }}
              >
                Free Wi-Fi, flatscreen TVs, and minifridges are included in the
                relaxing rooms and villas, tea and coffeemakers, terraces, or
                balconies. This sprawling resort is just a 45-minute speedboat
                trip away, with some rooms being beachfront and others
                overwater. Without needing a seaplane, explore all three
                islands, or relax and unwind. Oceanfront dining and a bar with
                live music are among the five restaurants and 2 bars.
              </Typography>
            </Grid>
            <Grid xs={12} sm={4} md={4} spacing={2} container>
              <Grid item xs={12}>
                <img
                  className="img1"
                  src="/Images/hotel1.jpg"
                  alt="header"
                  height="105"
                  width="155"
                  style={{ borderRadius: "10px" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  className="img1"
                       src="/Images/hotel1.jpg"
                  alt="header"
                  height="105"
                  width="155"
                  style={{ borderRadius: "10px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={12} sm={4} md={4}>
              <img
                className="img1"
                     src="/Images/hotel1.jpg"
                alt="header"
                height="105"
                width="155"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <img
                className="img1"
                     src="/Images/hotel1.jpg"
                alt="header"
                height="105"
                width="155"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <img
                className="img1"
                      src="/Images/hotel1.jpg"
                alt="header"
                height="105"
                width="155"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} sm={6} md={6}>
              <Typography
                variant="body2"
                sx={{
                  py: 2,

                  fontSize: { md: "0.8rem", xs: "0.6rem", sm: "0.6rem" },
                  alignItems: "left",
                }}
              >
                <Typography
                  sx={{
                    color: "#1B0B7D",
                    fontSize: { md: "1.2rem", xs: "0.6rem", sm: "0.7rem" },
                  }}
                >
                  Hotel Amenities
                </Typography>
                <Box sx={{ ml: "-1.5rem" }}>
                  <ul>
                    <li>Wi-Fi</li>
                    <li>Hot bath </li>
                    <li>Fitness classes</li>
                    <li>Infinity pool</li>
                    <li>Diving</li>
                    <li>Spa</li>
                    <li>Dry cleaning</li>
                    <li>Workout Room</li>
                  </ul>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Typography
                variant="body2"
                sx={{
                  py: 2,

                  fontSize: { md: "0.8rem", xs: "0.6rem", sm: "0.6rem" },
                  alignItems: "left",
                }}
              >
                <Typography
                  sx={{
                    color: "#1B0B7D",
                    fontSize: { md: "1.2rem", xs: "0.6rem", sm: "0.7rem" },
                  }}
                >
                  Room Amenities
                </Typography>
                <Box sx={{ ml: "-1.5rem" }}>
                  <ul>
                    <li>Private beach </li>
                    <li>Additional bathroom </li>
                    <li>Minibar</li>
                    <li>Infinity pool</li>
                    <li>Refrigerator </li>
                    <li>Housekeeping</li>
                    <li>Minibar</li>
                    <li>Flatscreen TV</li>
                  </ul>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </DialogContent> */}
        
         { <iframe src={src}   width="600" height="450"  ></iframe>}
         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.193486390711!2d80.01890337468083!3d9.66450289042442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56a7c5e28b55%3A0x80efe7fa106b2411!2sValampuri%20Hotel!5e0!3m2!1sen!2slk!4v1685277180647!5m2!1sen!2slk" width="600" height="450" sx="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        
        </Dialog>
    </Box>
  );
}
