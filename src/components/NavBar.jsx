import React from 'react';
import '../index.css';
import HamburgerMenu from './HamburgerMenu';

function NavBar () {
    return (
        <div className='flex justify-between items-center bg-black h-30 px-15 py-2 text-white'>
            <div>
                <img className='w-80 h-20 object-cover' src="/images/logo.png" alt="logo" />
            </div>
            <HamburgerMenu />
        </div>
    )
}
export default NavBar;