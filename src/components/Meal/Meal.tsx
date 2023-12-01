import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  Button,
  Dialog,DialogTitle
} from "@mui/material";
import Products from "./data";
import CommonHero from "../../Common/CommonHero";
import { useNavigate } from "react-router-dom";

const Meal:React.FC<{onAdd:any; cartItems:any; onRemove:any}> = ({onAdd, cartItems,onRemove }) => {


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
          
          {Products.products.map((item: { src: string; title: string; price: number; }) => {
            return (
              <MealType
                src={item.src}
                FoodName={item.title}
                price={item.price}
                onAdd={onAdd}
                product={item} cartItems={cartItems} onRemove={onRemove}               />
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
  onAdd:any;
  product:any;
 cartItems:any;
 onRemove:any
}> = ({ src, FoodName, price ,onAdd,product,cartItems,onRemove}) => {
 const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   
  const itemsPrice = cartItems.reduce((a: number, c: { qty: number; price: number; }) => a + c.qty * c.price, 0);
 
 const queryParams = new URLSearchParams(window.location.search);
  const from = queryParams?.get("from");
  const to= queryParams.get("to");
  const depdates = queryParams.get("depdates");
  const arrdates = queryParams.get("arrdates");
  const vehicle = queryParams.get("vehicle");
  const deptime = queryParams.get("deptime");
      const goMeal = () => {
    const params = new URLSearchParams();
    params.set("from", from  ?from:"");
    params.set("to", to ?to:"");
    params.set("depdates", depdates?depdates:"");
    params.set("arrdates", arrdates ?arrdates:"");
    params.set("vehicle", vehicle ?vehicle:"");
    params.set("deptime", deptime ?deptime:"");

    navigate(`/meals?${params.toString()}`);
  };

const handlePrint = () => {
  const printContents = `
    <h2>Trip Details:</h2>
    ${from ? `<p><strong>From:</strong> ${from}</p>` : ""}
    ${to ? `<p><strong>To:</strong> ${to}</p>` : ""}
    ${depdates ? `<p><strong>Departure Date:</strong> ${depdates}</p>` : ""}
    ${arrdates ? `<p><strong>Arrival Date:</strong> ${arrdates}</p>` : ""}
    ${vehicle ? `<p><strong>Vehicle:</strong> ${vehicle}</p>` : ""}
    ${deptime ? `<p><strong>Departure Time:</strong> ${deptime}</p>` : ""}
    ${itemsPrice.toFixed(2) ? `<p><strong>Total Price:</strong> ${itemsPrice.toFixed(2)}</p>` : ""}
  `;

  const printWindow = window.open("", "_blank");

  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>SL Travel - Trip Details</title>
          <style>
            body {
              padding: 20px;
              font-size: 16px;
              font-family: 'Cambria', 'Coquin', 'Georgia', 'Times', 'Times New Roman', serif;
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  } else {
    console.error("Failed to open the print window");
  }
};



  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" ,width: {xs:"100%", sm:'200px', md:'250px' ,".img":{
            objectFit:'cover'
          }}}}>
      
        
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
            display: "flex", flexDirection: "column" ,alignItems:"center"
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
          <Button onClick={() => { onAdd(product); handleClickOpen(); }}
            variant="contained" color="success" sx={{maxWidth:"fit-content", m:"12px 0px"}}>
           Add To Cart
          </Button>
        
        </CardContent>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         
      <Box sx={{p:"1rem", width:"70vh"}}>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>    <Typography   
          
            sx={{
              fontSize: { md: "1.8rem", xs: "0.6rem", sm: "0.7rem" },
              // pb: { xs: 0.5, sm: 1, md: 1.5 },
              textAlign: "center",
              fontWeight: "bold",
              color: "#235b34",
              mb:"15px"
            }}>
        Ordered Foods
      </Typography>
       <IconButton color="primary" aria-label="add to shopping cart"  className="add" sx={{bgcolor:"#000", "&:hover": {
    bgcolor: "#ccc",}, p:"5px",color:"#fff", borderRadius:"5px"}} onClick={() => { handleClose(); }}>
          <CloseIcon />
          </IconButton>
      </Box>
  
      
        {/* {cartItems.length === 0 && <div>Cart is empty</div>} */}
        {cartItems.map((item :any) => (
          <Grid
            key={item.title}
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"space-between", 
            }}
          >
            <Grid item lg={5} >
            <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
              fontWeight: 600,
              textAlign: "left",
              color: "#d5790f",
            }}
          >{item.title}</Typography>
          
          </Grid>
         
               <Grid item lg={3}> <Box sx={{display:"flex", alignItems:"center", gap:"10px", mb:"10px", mt:"10px"}}>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onRemove(item)} className="add" sx={{bgcolor:"darkgreen", "&:hover": {
    bgcolor: "green",}, p:"5px",color:"#fff", borderRadius:"5px"}}>
          <RemoveIcon />
           </IconButton>
            <Box sx={{color:"#000", fontWeight:900, fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },}}>
              {item.qty}
            </Box>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onAdd(item)} className="remove" sx={{bgcolor:"darkred", "&:hover": {
    bgcolor: "red",},color:"#fff",p:"5px", borderRadius:"5px"}}>
          <AddIcon />
          </IconButton>
             
            </Box>
            </Grid>
         
            <Grid item lg={4}> 
          <Box sx={{color:"#000", fontWeight:800, fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },ml:"10px"}}>
              {item.qty} x ${item.price.toFixed(2)}
            </Box></Grid>
          
          </Grid>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:"space-between",
                 bgcolor: "#decbcba3",
              color:"#8f1616",
              p:"10px", 
            
              }}
            >
              <Box 
              sx={{
              fontSize: { xs: "1rem", sm: "1rem", md: "1.6rem" },
              fontWeight: 500,
              textAlign: "center",
             
            }}>
              Total Price
              </Box>
              <Box   sx={{
              fontSize: { xs: "1rem", sm: "1rem", md: "1.6rem" },
              fontWeight: 900,
              textAlign: "center",
             
            }} >${itemsPrice.toFixed(2)}</Box>
            </Box>  

          
            <hr />
            <Button
                  variant="contained"
                  color="success"
                  onClick={handlePrint}
                  sx={{ height: "3.2rem", width: "120px" }}
                >
                  Print
                </Button>
          </>
        )}
      
    </Box>
    
    
        </Dialog>
      </Box>
    </>
  );
};
