import React, {useState} from "react";
import "../index.css";
import {Menu, X} from "lucide-react";
import {Link} from "react-router-dom";


function HamburgerMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className="Relative hover:border-2 border-white rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
                {isOpen ? <X color="white"/> : <Menu color="white"/>}
            </button>
            {isOpen && (
                <div className="absolute right-0 m-3 w-20 md:w-40 bg-gray-900 text-white rounded-lg shadow-lg p-3 space-y-3">
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Home</Link>
                    <Link to={"/about"} onClick={() => setIsOpen(false)} className="block hover:text-blue-400">About</Link>
                    <Link to={"/contact"} onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Contact</Link>
                    <Link to={"/checkout"} onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Bookings</Link>
                    <Link to={"/login"} onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Login</Link>
                </div>)}
        </div>
    )
}

export default HamburgerMenu;