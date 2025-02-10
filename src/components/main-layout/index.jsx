import React from "react"
import {Outlet} from "react-router-dom"

import Header from "../header"
import Footer from "../footer"

const MainLayout = () => {
    return (
        <>
            <Header />

            <main>
                <div className="container2">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default MainLayout
