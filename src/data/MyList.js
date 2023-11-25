import { Create, Home, Logout, Person, Settings } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";

const list = [
    {
        id: 1,
        text: "Home",
        icon: <ListItemIcon> <Home /> </ListItemIcon>,
        path: "/"
    },
    {
        id: 2,
        text: "Create",
        icon: <ListItemIcon> <Create /> </ListItemIcon>,
        path: "/create"
    },
    {
        id: 3,
        text: "Profile",
        icon:  <ListItemIcon> <Person /> </ListItemIcon>,
        path: "/profile"
    },
    {
        id: 4,
        text: "Settings",
        icon:  <ListItemIcon> <Settings /> </ListItemIcon>,
        path: "/settings"
    },
    {
        id: 5,
        text: "Logout",
        icon:  <ListItemIcon> <Logout /> </ListItemIcon>,
        path: "/logout"
    },
];

export default list;