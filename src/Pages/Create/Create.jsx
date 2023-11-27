import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();


  return (
    <Box autoComplete="off" component="form" sx={{width: "380px"}}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
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
            setPrice(Number(e.target.value));
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
    fetch("https://mui-project-server.onrender.com/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, price})
    })
    .then(()=>{
      navigate("/");
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