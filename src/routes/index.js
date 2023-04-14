import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../components/templates/home";
import Initial from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Initial />,
    },
]);

export default router;