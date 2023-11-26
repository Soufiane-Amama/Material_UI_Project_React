import { Close } from "@mui/icons-material";
import "./Home.css";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, [mydata]);


  let totalPrice = 0;

  return (
    <Box>
      { 
        mydata.length ===  0 ? 
        <div className="loader">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> 
        :
        mydata.map(item => (
          <>
          {totalPrice += item.price}
          <Paper
          key={item.id}
          sx={{
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
            position: "relative",
        }}
      >

        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          {item.title}
        </Typography>

        <Typography
          sx={{
            mr: "33px",
            fontSize: "1.4em",
            fontWeight: 500,
            opacity: "0.8",
          }}
          variant="h6"
        >
          ${item.price}
        </Typography>

        <IconButton 
          onClick={() => {
            fetch(`http://localhost:3100/mydata/${item.id}`, { method: "DELETE" });
          }} 
          sx={{ position: "absolute", top: "0", right: "0" }}
        >
          <Close sx={{fontSize: "20px"}} />
        </IconButton>

          </Paper>
          </>
        ))
      }

      
      <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>

    </Box>
  );
};

export default Home;
