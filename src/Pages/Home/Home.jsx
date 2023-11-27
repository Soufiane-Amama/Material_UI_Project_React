import { Close } from "@mui/icons-material";
import "./Home.css";
import { Box, Paper, Typography, IconButton, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetch("https://mui-project-server.onrender.com/myData")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);

  const handleDelete = (item) => {
    fetch(`https://mui-project-server.onrender.com/myData/${item.id}`, {
      method: "DELETE",
    });

    const newArr = myData.filter((myObject) => {
      return myObject.id !== item.id;
    });

    setMyData(newArr);
  };

  let totalPrice = 0;

  return (
    <Box>
      {myData.length === 0 ? (
        <div className="loader">
          <Box
            component={"span"}
            // @ts-ignore
            bgcolor={theme.palette.loader.main}
            className="bar"
          ></Box>
          <Box
            component={"span"}
            // @ts-ignore
            bgcolor={theme.palette.loader.main}
            className="bar"
          ></Box>
          <Box
            component={"span"}
            // @ts-ignore
            bgcolor={theme.palette.loader.main}
            className="bar"
          ></Box>
        </div>
      ) 
      : 
      (
        myData.map((item) => {
          totalPrice += item.price;
          return (
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
                  handleDelete(item);
                }}
                sx={{ position: "absolute", top: "0", right: "0" }}
              >
                <Close sx={{ fontSize: "20px" }} />
              </IconButton>
            </Paper>
          );
        })
      )}

      {myData.length > 0 && (
        <Typography mt="55px" textAlign="center" variant="h6">
          👉 You Spend ${totalPrice}
        </Typography>
      )}
    </Box>
  );
};

export default Home;
