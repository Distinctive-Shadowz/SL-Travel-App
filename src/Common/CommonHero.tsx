import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";


const Hero:React.FC<{src:string; title:string}> = ({src, title}) => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "300px", sm: "400px", md: "400px" },
        //   width: "100%",
          position: "relative",
          overflow: "hidden",
          objectFit:'fill',
          ".img":{
            objectFit:'cover',
            opacity:0.9
          }
        }}
      >
        <img
        className="img"
          src={src}
          // src={"/Images/hotel1.jpg"}
          alt="hotel"
          width="100%"
          height="100%"
          
          // style={{ position: "absolute", top: 0, left: 0, objectFit:'fill'}}
        />
        <Box sx={{position:'absolute', left:'50%', top:'50%', color:"#000",fontSize:{xs:'2rem', sm:'3.5rem',md:'4rem'}, fontWeight:800}} > {title}</Box>
      </Box>
     
    </>
  );
};

export default Hero;
