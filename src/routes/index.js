import { createBrowserRouter } from "react-router-dom";

// pages
import Initial from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Initial />,
    },
]);

export default router;