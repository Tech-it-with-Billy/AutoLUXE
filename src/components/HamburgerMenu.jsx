import React, { useState } from 'react';
import '../index.css';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  

function HamburgerMenu() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'
            >
                {isOpen? <X color='black' /> : <Menu color='black'/>}
            </button>
            {isOpen && 
                <nav className='flex flex-col gap-2 w-20 bg-gray-900 text-white p-3 rounded-md'>
                    <Link to={'/'} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to={'/about'} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to={'/bookings'} onClick={() => setIsOpen(false)}>Booking</Link>
                    <Link to={'/contact'} onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to={'/login'} onClick={() => setIsOpen(false)}>Login</Link>
                </nav>
            }
        </div>
    )
}

export default HamburgerMenu