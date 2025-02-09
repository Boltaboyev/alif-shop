import React from "react"
import {Outlet} from "react-router-dom"

import Header from "../header"

const MainLayout = () => {
    return (
        <>
            <Header />

            <main>
                <div className="container2">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default MainLayout
