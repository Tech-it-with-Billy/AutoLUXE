import React from 'react';
import '../index.css';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <div className='flex justify-between items-center bg-black h-25 px-5 lg:px-15 py-2 text-white'>
            <Link to={'/'}>
                <img className='w-40 h-20 md:w-80 object-cover' src="/images/logo.png" alt="logo" />
            </Link>
            <HamburgerMenu />
        </div>
    )
}
export default NavBar;