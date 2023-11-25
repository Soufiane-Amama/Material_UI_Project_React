import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
// Dark Mode
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import list from "data/MyList";

const DrawerComponent = ({ drawerWidth, setMode, noneORblock, drawerType, hideDrawer }) => {
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
        hideDrawer();
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
        {
          list.map(item => (
            <ListItem 
            // @ts-ignore
            sx={{bgcolor: select.pathname === item.path ? theme.palette.favColor.main : null}} 
            disablePadding
          >
            <ListItemButton onClick={()=>{navigate(item.path)}}>
              {item.icon}
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
