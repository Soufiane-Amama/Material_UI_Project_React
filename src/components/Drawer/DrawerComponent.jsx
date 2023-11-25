import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Create, Person, Settings, Logout } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
// Dark Mode
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DrawerComponent = ({ drawerWidth, setMode, noneORblock, setNoneORblock, drawerType, setdrawerType }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const select = useLocation();

  return (
    <Drawer
      sx={{
        display: {xs: noneORblock, sm: "block"},
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      open={true}
      onClose={()=>{ 
        setdrawerType("permanent") 
        setNoneORblock("none") 
      }}
      anchor="left"
    >
      <Toolbar sx={{display: "flex", justifyContent: "center"}}>
      <IconButton sx={{ ml: 1 }} 
        onClick={()=>{ 
          localStorage.setItem("currentMode", theme.palette.mode === "dark"? "light" : "dark");
          theme.palette.mode === "dark"? setMode("light") : setMode("dark");
          }} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{color: "orange"}} /> : <Brightness4Icon />}
      </IconButton>
      </Toolbar>

      <Divider />

      <List>
        <ListItem 
          // @ts-ignore
          sx={{bgcolor: select.pathname === "/"? theme.palette.favColor.main : null}} 
          disablePadding
        >
          <ListItemButton onClick={()=>{navigate("/")}}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem         
          // @ts-ignore
          sx={{bgcolor: select.pathname === "/create"? theme.palette.favColor.main : null}}  
          disablePadding
        >
          <ListItemButton onClick={()=>{navigate("/create")}}>
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem 
          // @ts-ignore
          sx={{bgcolor: select.pathname === "/profile"? theme.palette.favColor.main : null}} 
          disablePadding
        >
          <ListItemButton onClick={()=>{navigate("/profile")}}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem 
          // @ts-ignore
          sx={{bgcolor: select.pathname === "/settings"? theme.palette.favColor.main : null}} 
          disablePadding
        >
          <ListItemButton onClick={()=>{navigate("/settings")}}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem 
          // @ts-ignore
          sx={{bgcolor: select.pathname === "/logout"? theme.palette.favColor.main : null}} 
          disablePadding
        >
          <ListItemButton onClick={()=>{navigate("/logout")}}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
