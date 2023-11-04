import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'


const Root = () => {
  return (
    <div>
      <Typography 
        className='title' 
        sx={{padding: "10px", textAlign: "center"}} 
        border="4px solid green" mt="20px" // mt={5}
        color="primary.main"  // dynamic color with light mode - dark mode 
        variant="h4"
      > Soufiane Amama </Typography>

      <Outlet />
    </div>
  )
}

export default Root