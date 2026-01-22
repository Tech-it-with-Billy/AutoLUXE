import React, { useState } from 'react';
import '../index.css';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  

function HamburgerMenu() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='hover:border-2 border-white rounded-lg'>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'
            >
                {isOpen? <X color='white' /> : <Menu color='white'/>}
            </button>
            {isOpen && 
                <nav className='absolute flex flex-col right-0 m-3 w-20 md:w-30 bg-gray-900 text-white rounded-lg shadow-lg p-3 space-y-3'>
                    <Link to={'/'} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to={'/about'} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to={'/vehicles'} onClick={() => setIsOpen(false)}>Vehicles</Link>
                    <Link to={'/bookings'} onClick={() => setIsOpen(false)}>Booking</Link>
                    <Link to={'/contact'} onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to={'/login'} onClick={() => setIsOpen(false)}>Login</Link>
                </nav>
            }
        </div>
    )
}

export default HamburgerMenu