// @ts-nocheck
import AppBarComponent from 'components/AppBar/AppBarComponent';
import DrawerComponent from 'components/Drawer/DrawerComponent';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Root = () => {
  return (
    <div>
      <DrawerComponent drawerWidth={drawerWidth} />
      <AppBarComponent drawerWidth={drawerWidth}  />

      <Outlet />
    </div>
  )
}

export default Root