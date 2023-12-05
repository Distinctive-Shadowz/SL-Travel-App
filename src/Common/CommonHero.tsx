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
        <Box sx={{position:'absolute', left:'45%', top:'30%', color:"#fff",fontSize:{xs:'2rem', sm:'3.5rem',md:'5rem'}, fontWeight:400, fontFamily: 'Broadway Regular',  textShadow: '3px 2px 2px #000'}} > {title}</Box>
      </Box>
     
    </>
  );
};

export default Hero;
