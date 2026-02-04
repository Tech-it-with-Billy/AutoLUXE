import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className='flex m-5 text-white font-bold'>
            <div className='flex flex-col gap-5 '>
                <Link>DashBoard</Link>
                <Link>Fleet Manager</Link>
                <Link>Bookings</Link>
                <Link>Inventory</Link>
            </div>
        </div>
    )
}

export default SideBar;