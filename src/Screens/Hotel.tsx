import React from "react";
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
import HotelPopup from "./HotelPopup";
import CommonHero from "../Common/CommonHero";

const Hotel = () => {
  return (
    <>
      <CommonHero />
      <Container>
        <Grid item md={12} xs={12} sm={12}>
          <Swiper
            // slidesPerView={4}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
            
              600: {
                width: 640,
                slidesPerView: 1,
              },
             
              900: {
                width: 768,
                slidesPerView: 3,
              },
              1200: {
                
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <HotelCom
                src={"/Images/hotel1.jpg"}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={"/Images/hotel1.jpg"}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={"/Images/hotel1.jpg"}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={"/Images/hotel1.jpg"}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            
          </Swiper>
        </Grid>
         {/* <Grid item md={12} xs={12} sm={12}>
          <Swiper
            // slidesPerView={4}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
            
              600: {
                width: 640,
                slidesPerView: 1,
              },
             
              900: {
                width: 768,
                slidesPerView: 3,
              },
              1200: {
                
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <HotelCom
                src={hotel}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={hotel}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={hotel}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HotelCom
                src={hotel}
                HotelName={"The Lucky Elepahant Hotel in Hikkaduwa"}
              />
            </SwiperSlide>
            
          </Swiper>
        </Grid> */}
      </Container>
    </>
  );
};

export default Hotel;

export const HotelCom: React.FC<{ src: string; HotelName: string }> = ({
  src,
  HotelName,
}) => {
  return (
    <>
      <Box sx={{ boxShadow: 5, borderRadius: 2, m: "1rem", width: "250px" }}>
        <CardMedia
          component="img"
          src={src}
          alt="header"
          height="215"
          width="335"
        />
        <CardContent sx={{ py: "0.5rem" }}>
          <Typography
            variant="body2"
            className="text"
            sx={{
              fontSize: {
                md: "0.7rem",
                xs: "0.6rem",
                sm: "0.6rem",
              },
              fontWeight: "bold",
            }}
          >
            {/* The Lucky Elepahant Hotel in Hikkaduwa */}
            {HotelName}
          </Typography>
          <HotelPopup />
        </CardContent>
      </Box>
    </>
  );
};
