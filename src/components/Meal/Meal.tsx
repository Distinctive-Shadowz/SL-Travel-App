import React, { useState } from "react";

import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
// import CommonHero from "../Common/CommonHero.tsx";

// import Briyani from "../Images/briyani.jpg";
import Categories from "../Hotel/Categories";
import CommonHero from "../../Common/CommonHero";

const Meal = () => {
  const MealTypes = [
    {
      title: "Roasted Chicken Biriyani",
      src: "/Images/briyani.jpg",
      price: 1400,
    },
    {
      title: "Pasta",
      src: "/Images/Pasta.jpeg",
      price: 1020,
    },
    {
      title: "Salad",
      src: "/Images/salad.jpeg",
      price: 845,
    },
    {
      title: "Sandwich",
      src: "/Images/Sandwich.jpeg",
      price: 545,
    },
    {
      title: "Mutton Briyani",
      src: "/Images/Chicken Briyani.jpeg",
      price: 845,
    },
     {
      title: "Pasta",
      src: "/Images/Pasta.jpeg",
      price: 860,
    },
    {
      title: "Salad",
      src: "/Images/salad.jpeg",
      price: 745,
    },
    {
      title: "Sandwich",
      src: "/Images/Sandwich.jpeg",
      price: 545,
    },
   
    
  ];

  return (
    <>
      <CommonHero src={"/Images/salad.jpeg"} title={"Meals"} />
      <Container sx={{ mt: "1rem", mb: "2rem" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.5rem",
            },
            textAlign: "center",
            fontWeight: 600,
            mb: "1rem",
          }}
        >
          FEATURED FOODS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {MealTypes.map((item) => {
            return (
              <MealType
                src={item.src}
                FoodName={item.title}
                price={item.price}
              />
            );
          })}
        </Box>
       
      </Container>
    </>
  );
};


export default Meal;
export const Mealx:React.FC<{src:string}>= ({src}) => {
  return (
   <Box>{src}</Box>
  )
}


export const MealType: React.FC<{
  src: string;
  FoodName: string;
  price: number;
}> = ({ src, FoodName, price }) => {

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" ,width: {xs:"100%", sm:'200px', md:'250px' ,".img":{
            objectFit:'cover'
          }}}}>
        {/* <Box >
          <img src={src} alt="header" height="215" width="345" />
        </Box> */}
         <CardMedia
          component="img"
          className="img"
          src={src}
          alt="header"
          height="215"
          width="250"
        />
        <CardContent
          sx={{
            py: "0.5rem",
            pb: "7px !important",
            boxShadow: 5,
            borderRadius: "0% 0% 10px 10px",
          }}
        >
          <Typography
            className="text"
            sx={{
              fontSize: { md: "1.2rem", xs: "0.6rem", sm: "0.7rem" },
              // pb: { xs: 0.5, sm: 1, md: 1.5 },
              textAlign: "center",
              fontWeight: "bold",
              color: "#235b34",
            }}
          >
            {/* Roasted Chicken Biriyani */}
            {FoodName}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
              fontWeight: 700,
              textAlign: "center",
              color: "#d5790f",
            }}
          >
            {/* Rs. 845.00 */}
            Rs. {price}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};
