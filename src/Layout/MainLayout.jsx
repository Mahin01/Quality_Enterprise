import React from 'react'
import Footer from '../Pages/Shared/Footer/Footer'
import NavBar from '../Pages/Shared/Header/NavBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
