import {createBrowserRouter} from "react-router-dom"

import MainLayout from "../components/main-layout"
import Home from "../pages/home"
import Shop from "../pages/shop"
import LikePage from "../pages/like"

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
            {
                path: "/like",
                element: <LikePage />,
            },
        ],
    },
])
