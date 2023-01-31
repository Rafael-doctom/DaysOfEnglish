import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export default router;