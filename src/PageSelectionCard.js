import React, { useState } from "react";
import { Card, CardContent, CardActions, Button, Typography, FormGroup, FormControlLabel, Checkbox, Divider, Box,   } from "@mui/material";
import '@fontsource/montserrat';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


// This function  allows users to select pages.
const PageSelectionCard = () => {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // This function handles the selection of all pages.
  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
    setSelectedPages(event.target.checked ? pages : []);
  };

  // This function handles the selection of individual pages.
  const handlePageSelect = (event, page) => {
    if (event.target.checked) {
      const newSelected = [...selectedPages, page];
      setSelectedPages(newSelected);
      setSelectAll(newSelected.length === pages.length);
    } else {
      const newSelected = selectedPages.filter((p) => p !== page);
      setSelectedPages(newSelected);
      setSelectAll(false);
    }
  };

  return (
// This is the main card component that contains the checkboxes and the done button. 
    <Card 
      sx={{
        width: "370px",
        height: "330px",
        position: "relative",
        top: "85px",
        left: "104px",
        borderRadius: "6px",
        border: "1px solid #EEEEEE",
        boxShadow: "0px 8px 15px rgba(20, 20, 20, 0.12), 0px 0px 4px rgba(20, 20, 20, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "20px",
        boxShadow: "0px 8px 15px rgba(255, 255, 255, 0.12), 0px 0px 4px rgba(231, 231, 231, 0.1)",
      }}
    >

        //
      <CardContent>
        {/* All Pages Checkbox */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small"
                icon={<CheckBoxOutlineBlankIcon  sx={{
                    borderRadius: "2px", 
                    color: "#CDCDCD", 
                  }}/>}
                checkedIcon={<CheckBoxRoundedIcon sx={{
                    borderRadius: "2px", // Lighter border radius
                    color: "#2469F6", // Custom color for checked state
                  }}/>}
                checked={selectAll}
                onChange={handleSelectAll}
                sx={{ px: "23px",  borderRadius: "4px", py: "10px",  }}
              />}
            label={<Typography variant="body1" sx={{ display: "", justifyContent: "space-between", width: "100%" ,fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "130%",
                letterSpacing: "0.00em",
                color: "#1F2128",}}
            
            >All pages</Typography>} 
            labelPlacement="start"
            sx={{ display: "flex", justifyContent: "space-between", width: "100%",
                
            }}
            
          />        </FormGroup>


        <Divider sx={{ my: 2}} />

       
        {/* Individual Pages Checkbox */}
        <FormGroup>
          {pages.map((page) => (
            <FormControlLabel
            control={
              <Checkbox  
                size="small"
                icon={
                  <CheckBoxOutlineBlankIcon
                    sx={{
                      borderRadius: "2px", // Lighter border radius
                      color: "#CDCDCD", // Light color for unchecked state
                    }}
                  />
                }
                checkedIcon={
                  <CheckBoxRoundedIcon
                    sx={{
                      borderRadius: "2px", // Lighter border radius
                      color: "#2469F6", // Custom color for checked state
                    }}
                  />
                }
                checked={selectedPages.includes(page)}
                onChange={(e) => handlePageSelect(e, page)}
                sx={{
                  px: "23px",
                  py: "10px",
                  "& .MuiSvgIcon-root": {
                    fontSize: "20px", // Adjust size if needed
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "130%",
                  letterSpacing: "0.00em",
                  color: "#1F2128",
                }}
              >
                {page}
              </Typography>
            }
            labelPlacement="start"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          />
          ))}
        </FormGroup>
      </CardContent>
      

<Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
      <Divider  sx={{width:"90%"}} />
      </Box>


      {/* Done Button */}
      <CardActions sx={{ justifyContent: "center", paddingBottom: "10px", }}>
        <Button 
          
          variant="contained"
          sx={{
            width: "340px",
            height: "40px",
            borderRadius: "4px",
            backgroundColor: "#FFCE22",
            "&:hover": { backgroundColor: "#FFCE32" },
            "&:active": { backgroundColor: "#FFD84D" },
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "130%",
            letterSpacing: "0.00em",
            color: "#1F2128",
            textTransform: "none",

           

          }}
        >
          Done
        </Button>
      </CardActions>
    </Card>
  );
};

export default PageSelectionCard;
