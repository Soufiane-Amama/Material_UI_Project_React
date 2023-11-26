import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.soufiane.main,
  '&:hover': {
    // @ts-ignore
    backgroundColor: theme.palette.soufiane.dark,
  },
}));


const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);


  return (
    <Box component="form" sx={{width: "380px"}}>
        <TextField
          onChange={(e) => {
            settitle(e.target.value);
          }}
          fullWidth={true}
          label="Transaction Title"
          sx={{ mt: "22px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
        />

        <TextField
          onChange={(e) => {
            setprice(Number(e.target.value));
          }}
          fullWidth={true}
          label="Amount"
          sx={{ mt: "22px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />

<ColorButton 
  onClick={()=>{
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, price})
    })
  }} 
  sx={{mt: "22px"}} 
  variant="contained"
>
    Submit <ChevronRight /> 
</ColorButton>

    </Box>
  )
}

export default Create