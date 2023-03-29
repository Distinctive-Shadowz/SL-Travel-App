/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TextField from "@mui/material/TextField";





const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#000000",
    },
  },
});

class Nathi extends React.Component {

    // get to current dtae 
   state = {
    date: "",
    curTime: ""
  };
 
  componentDidMount() {
    this.getDate();
    this.getTime();
  }
 
  getDate = () => {
    var today = new Date(),
 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 
    this.setState({ date });
  };

    //get to current time 

   
    getTime = () => {
      var today = new Date(),
   
      curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   
   
      this.setState({ curTime });
    };

    
  render(){

  return (
                                                                                                                          //this box represent entire box   
    <Box sx={{ display: "flex" }} >    

      <Box                                                                                                          //this box represent the all left side (search bar , filter ,route)box 
        sx={{
          background: "#E5E7E9",
          width: 700,
        }}
      >
        <Box                                                                                                           //this box represent the left side search bar and filter  box 
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box                                                                                              //this box represent the left side search bar  box 
            sx={{
              "& > :not(style)": {
                m: 1,
                ml: 2,
                width: 300,
                height: 40,
              },
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius: "12px",
                width: 400,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </Box>

          <Box                                                                                                      //this box represent the left side filter  box 
            sx={{
              "& > :not(style)": {
                m: 1,
                width: 80,
                height: 40,
                display: "flex",
                borderRadius: "12px",
                alignItems: "center",
                backgroundColor:"white",
              },
            }}
          >
         
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  startIcon={<FilterAltIcon />}
                  sx={{
                    borderRadius: "12px",
                    fontSize: "13px",
                    width: 80,
                    height: 40,
                  }}
                >
                  Filters
                </Button>
              </ThemeProvider>
            
          </Box>
  
        </Box>

               
        <Box>                                                                                                                //this box represent the R01,R02,R03 box
                    
          <Box                                                                                                         //this box represent the full R01
            sx={{
              "& > :not(style)": {
                m: 1,
                ml:2,
                width: 400,
                height: 110,
                borderRadius: "21px",
                backgroundColor:"white",
                display: "inline",
              },
            }}
          >
          
      
              <Button
              sx={{
                borderRadius: "21px",
                width: 400,
                height: 110,
                display: "flex",
              }}
            >

           
                <Box                                                                                        //this box represent the R01 text and Econo text
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                             //this Typography represent the R01 text 
                    sx={{
                      mt:1,
                      ml:2
                    }}
                  >
                    R01
                  </Typography>

                  <Typography                                                                                //this Typography represent the Econo button 
                    sx={{
                      ml: 32,
                     mt:1
                    }}
                  >
                    <Button                                    
                      variant="contained"
                      color="success"
                      sx={{
                        maxWidth: "10px",
                        maxHeight: "14px",
                        fontSize: "10px",
                        backgroundColor: "#ffc107",
                      }}
                    >
                      Econo
                    </Button>
                  </Typography>
                </Box>

                <Box                                                                                           //this box represent the R01 starting date , address text 
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                                  //this Typography represent the R01 starting date
                    sx={{
                      mt: 0.1,
                      width: 50,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    29 Sep
                  </Typography>
                  <Typography                                                                                //this Typography represent the R01 starting address dots
                    sx={{
                      mt: 0.9,
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>

                  <TextField value=" 60/1, PARK STREET Colombo" disabled={true} inputProps={{ disableUnderline: true,}} variant='standard'  sx={{
                      mt: 0.9,
                      ml: 2,
                     
                      fontSize: "10px",
                      input: {
                        border: "none",
                      },
                    }}>

                    </TextField>
                 
                </Box>

                <Box                                                                                            //this box represent the R01 destination date , address text 
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                                       //this Typography represent the R1 destination date
                    sx={{
                      width: 50,
                      mt: 0.7,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    30 Sep
                  </Typography>
                  <Typography                                                                                           //this Typography represent the R01 destination address dots
                    sx={{
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>
                  <Typography                                                                                                //this Typography represent the R01 destination address                                   
                    sx={{
                      ml: 2,
                      fontSize: "12px",
                    }}
                  >
                    193, KIRULA ROAD Kandy
                  </Typography>
                </Box>

                </Button>
              
            
          </Box>
                    
          <Box                                                                                                        //this box represent the full R02  box
            sx={{
              "& > :not(style)": {
                m: 1,
                ml:2,
                width: 400,
                height: 110,
                borderRadius: "21px",
                backgroundColor:"white",
                display: "inline"
              },
            }}
          >
            <Button
              sx={{
                borderRadius: "21px",
                width: 400,
                height: 110,
                display: "flex",
              }}
            >
              
                <Box                                                                                                      //this box represent the R02 text 
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                                               //this Typography represent the R02 text 
                    sx={{
                      mt: 2,
                      ml: 2,
                    }}
                  >
                    R02
                  </Typography>

                  <Typography                                                                                                //this Typography represent the Cheaper button 
                    sx={{
                      ml: 32,
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        maxWidth: "10px",
                        maxHeight: "14px",
                        fontSize: "10px",
                        backgroundColor: "#76ff03",
                      }}
                    >
                      Cheaper
                    </Button>
                  </Typography>
                </Box>

                <Box                                                                                                             //this box represent the R02 date , address text 
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                                               //this Typography represent the R02 starting date
                    sx={{
                      mt: 0.1,
                      width: 50,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    29 Sep
                  </Typography>
                  <Typography                                                                                                   //this Typography represent the R02 starting address dots
                    sx={{
                      mt: 0.9,
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>
                  <Typography                                                                                                   //this Typography represent the R02 starting address
                    sx={{
                      mt: 0.9,
                      ml: 2,
                      fontSize: "12px",
                    }}
                  >
                    60/1, PARK STREET Colombo
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography                                                                                                         //this Typography represent the R02 destination date
                    sx={{
                      width: 50,
                      mt: 0.7,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    30 Sep
                  </Typography>
                  <Typography                                                                                                              //this Typography represent the R02 destination address dots
                    sx={{
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>                                                                                                   
                  <Typography                                                                                                              //this Typography represent the R02 destination address
                    sx={{
                      ml: 2,
                      fontSize: "12px",
                    }}
                  >
                    193, KIRULA ROAD Kandy
                  </Typography>
                </Box>
  
            </Button>
          </Box>
                        
          <Box                                                                                                          //this box represent the full R03 box  
            sx={{
              "& > :not(style)": {
                m: 1,
                ml:2,
                width: 400,
                height: 110,
                borderRadius: "21px",
                backgroundColor:"white",
                display: "inline"
              },
            }}
          >
            <Button
              sx={{
                borderRadius: "21px",
                width: 400,
                height: 110,
                display: "flex",
              }}
            >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      mt: 2,
                      ml: 2,
                    }}
                  >
                    R03
                  </Typography>

                  <Typography
                    sx={{
                      ml: 32,
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        maxWidth: "10px",
                        maxHeight: "14px",
                        fontSize: "10px",
                        backgroundColor: "#000000",
                      }}
                    >
                      costly
                    </Button>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      mt: 0.1,
                      width: 50,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    29 Sep
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.9,
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.9,
                      ml: 2,
                      fontSize: "12px",
                    }}
                  >
                    60/1, PARK STREET Colombo
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 50,
                      mt: 0.7,
                      ml: 3,
                      fontSize: "12px",
                    }}
                  >
                    30 Sep
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: "12px",
                    }}
                  >
                    193, KIRULA ROAD Kandy
                  </Typography>
                </Box>
            </Button>
          </Box>


        </Box>


      </Box>








      <Box              //this box represent the all rigth side( google map api)box   
        sx={{
          background: "#6495ED",
          width: 850,
        }}
      >
        <Box>google map api</Box>

        <Box>
          navigate
          <Box
            sx={{
              "& > :not(style)": {
                m: 1,
                ml:20,
                mt:15,
                width: 420,
                height: 230,
              },
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                alignItems: "center",
                borderRadius: "21px",
                width: 450,
                height: 100,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    m: 2,
                  }}
                >
                 <div className="App">
                       <p>{this.state.date}</p>
                    </div>
                
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    m: 2,
                    ml: 23,
                  }}
                >
                   <div className="App">
        <p>{this.state.curTime}</p>
      </div>
                </Typography>
              </Box>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    mb: 1,
                    ml: 12,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  sx={{
                    size: "small",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Destination"
                  variant="outlined"
                  sx={{
                    size: "small",
                    }}
                />

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      ml: 6,
                      backgroundColor: "#ffc107",
                    }}
                  >
                    navigate
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>


    </Box>
  );
}

}

 
export default Nathi;
