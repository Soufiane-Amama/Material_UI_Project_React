import Home from "Pages/Home/Home";
import Root from "./Pages/Root";
import Create from "Pages/Create/Create";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Dark Mode
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);

// Dark Mode
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
