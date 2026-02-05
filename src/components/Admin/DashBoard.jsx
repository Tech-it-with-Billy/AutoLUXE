import React from 'react'
import '../../index.css'
import NavBar from './AdminNavBar';
import SideBar from './SideBar';

function DashBoard() {
    return (
        <div>
            <NavBar />
            <div className='flex h-screen bg-black overflow-hidden'>
                <SideBar />
                <div className='flex-1 bg-black border text-white'>
                    <div className=' flex flex-col m-20 gap-10'>
                        <div className='flex gap-10'>
                            <div className=' flex flex-col border w-50 h-40 items-center justify-center'>
                                <p>$</p>
                                <p>Total Revenue</p>
                            </div>
                            <div className=' flex flex-col border w-50 h-40 items-center justify-center'>
                                <p></p>
                                <p>Active Rentals</p>
                            </div>
                        </div>
                        <div className='border p-5'>
                            <p>Due back today</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;