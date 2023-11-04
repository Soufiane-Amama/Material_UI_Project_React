import Home from "Pages/Home/Home";
import Root from "./Pages/Root";
import Create from "Pages/Create/Create";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
