import AppBarComponent from 'components/AppBar/AppBarComponent';
import DrawerComponent from 'components/Drawer/DrawerComponent';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const drawerWidth = 240;

const Root = () => {
  return (
    <div>
      <DrawerComponent drawerWidth={drawerWidth} />
      <AppBarComponent drawerWidth={drawerWidth}  />

      <Box sx={{ ml: `${drawerWidth}px`, display: "flex", justifyContent: "center", mt: "66px" }} >
        <Outlet />
      </Box>
    </div>
  )
}

export default Root