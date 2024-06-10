import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SidebarGuru from "./SidebarGuru"
import 'flowbite';

const LayoutGuru = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <SidebarGuru/>
            <Outlet/>
        </React.Fragment>
    )
}

export default LayoutGuru;