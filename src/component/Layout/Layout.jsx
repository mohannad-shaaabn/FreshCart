import React from 'react'
import NAvbar from '../Navbar/NAvbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
        <NAvbar />
        <div className="flex-grow"> 
            <Outlet />
        </div>
        <Footer />
    </div>
    )
}
