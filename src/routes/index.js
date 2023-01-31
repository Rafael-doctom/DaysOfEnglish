import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../components/templates/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default router;