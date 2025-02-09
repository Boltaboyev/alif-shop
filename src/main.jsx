import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router-dom"

import {router} from "./router"
import {ShopContextProvider} from "./context/shop-context"

import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ShopContextProvider>
            <RouterProvider router={router}></RouterProvider>
        </ShopContextProvider>
    </StrictMode>
)
