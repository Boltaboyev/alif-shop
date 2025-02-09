import {createBrowserRouter} from "react-router-dom"

import MainLayout from "../components/main-layout"
import Home from "../pages/home"
import Shop from "../pages/shop"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
        ],
    },
])
