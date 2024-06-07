import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import 'flowbite';

const Layout = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </React.Fragment>
    )
}

export default Layout;