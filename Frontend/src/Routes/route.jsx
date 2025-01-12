import Add from "../pages/Add";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "add",
                element: <Add />,
            },
            {
                path: "favorite",
                element: <Favorites />,
            },
        ]
    }
]
export default ROUTES