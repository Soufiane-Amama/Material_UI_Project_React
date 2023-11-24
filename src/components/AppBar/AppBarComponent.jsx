import { AppBar, Toolbar, Avatar, Link, Typography } from '@mui/material';
import myPhoto from "../../images/photo.jpg"


const AppBarComponent = ({ drawerWidth }) => {

  return ( 
    <AppBar  sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} position="static">
    <Toolbar>
      <Link href="/" color="inherit" underline='none' sx={{ flexGrow: 1, "&:hover": {fontSize: "16.5px"} }} >
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
  )
}

export default AppBarComponent