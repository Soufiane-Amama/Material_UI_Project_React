import { Create, Home, Person, Settings } from "@mui/icons-material";

const list = [
    {
        id: 1,
        text: "Home",
        icon: <Home />,
        path: "/"
    },
    {
        id: 2,
        text: "Create",
        icon: <Create />,
        path: "/create"
    },
    {
        id: 3,
        text: "Profile",
        icon: <Person />,
        path: "/profile"
    },
    {
        id: 4,
        text: "Settings",
        icon: <Settings />,
        path: "/settings"
    },
];

export default list;