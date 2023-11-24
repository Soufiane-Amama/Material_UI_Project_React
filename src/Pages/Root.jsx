import Appbar from 'components/AppBar/Appbar';
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div>
      <Appbar />

      <Outlet />
    </div>
  )
}

export default Root