import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SidebarWali from "./SidebarWali"
import 'flowbite';

const LayoutWali = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <SidebarWali/>
            <Outlet/>
        </React.Fragment>
    )
}

export default LayoutWali;