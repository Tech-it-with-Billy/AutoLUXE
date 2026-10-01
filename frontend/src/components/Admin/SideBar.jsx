import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className='flex-shrink-0 w-55 overflow-y-auto text-white font-bold bg-black'>
            <div className='flex flex-col gap-5 p-10 border h-screen'>
                <Link to={'/admin-dashboard'}>DashBoard</Link>
                <Link to={'/admin-fleet-manager'}>Fleet Manager</Link>
                <Link>Bookings</Link>
                <Link>Inventory</Link>
            </div>
        </div>
    )
}

export default SideBar;