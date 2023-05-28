import React, { useState } from "react";
// import Image from "next/image";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import HotelPopup from "./HotelPopup.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
// import CommonHero from "../Common/CommonHero.tsx";
import hotel from "../Images/hotel1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
// import HotelPopup from "./HotelPopup";
import CommonHero from "../Common/CommonHero";

import Categories from "./Categories";
import { HotelPopup } from "./HotelPopup";

const Hotel = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem: any) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <CommonHero />
      <Container sx={{my:'1.5rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={2}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("kandy")}
              >
                {" "}
                kandy
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("jaffna")}
              >
                {" "}
                jaffna
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Galle")}
              >
                Galle
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Negombo")}
              >
                Negombo
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Nuwara Eliya")}
              >
                Nuwara Eliya
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Anuradhapura")}
              >
                Anuradhapura
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Anuradhapura")}
              >
                Anuradhapura
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => filterResult("Colombo")}
              >
                Colombo
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#e7af1c",
                  my: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setData(Categories)}
              >
                {" "}
                all
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <Box sx={{ display: "flex", flexDirection: "row" }}></Box>
            <Box sx={{ display: "flex", flexDirection: "row",flexWrap:'wrap' }}>
              {data.map((item) => {
                return <HotelCom src={item.src} HotelName={item.title} mapSrc={item.mapSrc} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hotel;

export const HotelCom: React.FC<{ src: string; HotelName: string ;mapSrc:string | null}> = ({
  src,
  HotelName,
  mapSrc
}) => {
  return (
    <>
      <Box sx={{ boxShadow: 5, borderRadius: 2, m: "1rem", width: {xs:"100%", sm:'200px', md:'200px' }}}>
        <CardMedia
          component="img"
          src={src}
          alt="header"
          height="215"
          width="200"
        />
        <CardContent sx={{ py: "0.5rem" }}>
          <Typography
            variant="body2"
            className="text"
            sx={{
              fontSize: {
              
                xs: "1rem",
                sm: "1rem",
                  md: "1rem",
              },
             fontWeight:"500px",
             textAlign:'center'
            }}
          >
            {/* The Lucky Elepahant Hotel in Hikkaduwa */}
            {HotelName}
          </Typography>
          <HotelPopup  src={mapSrc}/>
        </CardContent>
      </Box>
    </>
  );
};

// const DistrictName: React.FC<{ title: string;onClick:void() }> = ({ title,onClick }) => {
//   const [data, setData] = useState(Categories);
//   const filterResult = (catItem: any) => {
//     const result = Categories.filter((curData) => {
//       return curData.category === catItem;
//     });
//     setData(result);
//   };
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "50px",
//         bgcolor: "#e7af1c",
//         my: "10px",
//         borderRadius: "10px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       onClick={()=>onClick}
//       // onClick={() => filterResult({ title })}
//     >
//       {title}
//     </Box>
//   );
// };
