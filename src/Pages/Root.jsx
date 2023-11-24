import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div>
      {/* <Appbar /> */}

      <Outlet />
    </div>
  )
}

export default Root