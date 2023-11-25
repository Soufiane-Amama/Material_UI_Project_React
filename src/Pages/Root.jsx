import AppBarComponent from "components/AppBar/AppBarComponent";
import DrawerComponent from "components/Drawer/DrawerComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";
// Dark Mode
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, grey, purple } from "@mui/material/colors";

const drawerWidth = 240;

const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "dark"
      ? "dark"
      : "light"
  );
  const [noneORblock, setNoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  // Dark Mode
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            soufiane: {
              main: blue[500],
              dark: blue[700],
            },
            favColor: {
              main: grey[300]
            },
          }
        : {
            // palette values for dark mode
            soufiane: {
              main: purple[500],
              dark: purple[700],
            },
            favColor: {
              main: grey[900]
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <DrawerComponent
          drawerWidth={drawerWidth}
          // @ts-ignore
          setMode={setMode}
          noneORblock={noneORblock}
          // @ts-ignore
          drawerType={drawerType}
          setNoneORblock={setNoneORblock} 
          setdrawerType={setdrawerType}        
        />

        <AppBarComponent 
          drawerWidth={drawerWidth} 
          // @ts-ignore
          setNoneORblock={setNoneORblock} 
          // @ts-ignore
          setdrawerType={setdrawerType}
          />

        <CssBaseline />
        <Box
          component="main"
          sx={{
            ml: {sm: `${drawerWidth}px`},
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
