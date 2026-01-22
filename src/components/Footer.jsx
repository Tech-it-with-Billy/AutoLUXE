import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="flex flex-row bg-black h-30 items-center justify-between max-w-screen" >
            <div className="relative h-30 w-30 flex items-center pl-5">
                <Link to={'/'}><img className="object-cover" src="/images/logo.png" alt="" /></Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 font-l text-white text-xs md:text-lg">
                <Link to={'/listings'}><p>Rent</p></Link>
                <Link to={'/about'}><p>About</p></Link>
                <Link to={'/contact'}><p>Contact</p></Link>
            </div>
            <div className="flex gap-2 m-5 items-center">
                <img src="/images/ig.png" alt="" />
                <img src="/images/web.png" alt="" />
                <img src="/images/x.png" alt="" />
                <img src="/images/youtube.png" alt="" />
            </div>
        </div>
    )
}

export default Footer;