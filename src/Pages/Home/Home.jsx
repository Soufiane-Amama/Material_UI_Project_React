import { Close } from "@mui/icons-material";
import "./Home.css";
import { Box, Paper, Typography, IconButton } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Paper
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
          GYM
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
          $100
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{fontSize: "20px"}} />
        </IconButton>

      </Paper>

    </Box>
  );
};

export default Home;
