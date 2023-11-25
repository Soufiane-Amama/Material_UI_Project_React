import {
  AppBar,
  Toolbar,
  Avatar,
  Link,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import myPhoto from "../../images/photo.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarComponent = ({ drawerWidth, showDrawer }) => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
        // @ts-ignore
        background: `${theme.palette.soufiane.main}`,
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          sx={{ mr: "9px", display: { sm: "none" } }}
          color="inherit"
          onClick={() => {
            showDrawer();
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
        >
          My Expenses
        </Link>

        <Typography variant="body1" color="inherit" mr={"10px"}>
          Soufiane Amama
        </Typography>

        <Avatar
          alt="Soufiqne Amama"
          src={myPhoto}
          sx={{ width: 45, height: 45 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
