import Typography from '@mui/material/Typography'
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
    const theme = useTheme();
    
  return (
    <Box>
        <Typography variant="h5" color={theme.palette.error.main} >Not Found!</Typography>
    </Box>
  )
}

export default NotFound