import AppBarComponent from "components/AppBar/AppBarComponent";
import DrawerComponent from "components/Drawer/DrawerComponent";
import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
// Dark Mode
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getTheme from "styles/MyTheme";

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
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);


  const showDrawer = () => {
    setdrawerType("temporary");
    setNoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setNoneORblock("none");
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* 
        <DrawerComponent
          drawerWidth={drawerWidth}
          // @ts-ignore
          setMode={setMode}
          noneORblock={noneORblock}
          // @ts-ignore
          drawerType={drawerType} 
          hideDrawer={hideDrawer}            
        /> 
        يمكنك اختصار هذا الكود بالكود الموجود بالاسفل كالتالي 
        */}

        <DrawerComponent {...{drawerWidth, setMode, noneORblock, drawerType, hideDrawer}} />

        <AppBarComponent 
          drawerWidth={drawerWidth}
          showDrawer={showDrawer}          
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
