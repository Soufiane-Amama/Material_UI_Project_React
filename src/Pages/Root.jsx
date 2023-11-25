import AppBarComponent from "components/AppBar/AppBarComponent";
import DrawerComponent from "components/Drawer/DrawerComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";
// Dark Mode
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "dark"
      ? "dark"
      : "light"
  );

  // Dark Mode
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
      // @ts-ignore
      soufiane: {
        light: blue[300], 
        main: blue[500],
        dark: blue[700],
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <DrawerComponent
          drawerWidth={drawerWidth}
          // @ts-ignore
          setMode={setMode}
        />
        <AppBarComponent drawerWidth={drawerWidth} />

        <CssBaseline />
        <Box
          component="main"
          sx={{
            ml: `${drawerWidth}px`,
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
