import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'


const Root = () => {
  return (
    <div>
      <Typography component="p" variant="h4" noWrap >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab ipsam. Eligendi velit alias quam incidunt recusandae molestias, odit cum aliquam sint sapiente consequatur id aliquid possimus quas! Modi, nobis!
      </Typography>

      <Typography variant="h5"> Test </Typography>

      <Outlet />
    </div>
  )
}

export default Root