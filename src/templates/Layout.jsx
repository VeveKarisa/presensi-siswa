import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <Outlet/>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;