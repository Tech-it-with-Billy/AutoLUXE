import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="flex flex-row bg-black h-30 items-center justify-between px-20" >
            <div className="relative width-50 h-30 w-50 flex items-center pl-20">
                <Link to={'/'}><img src="/images/logo.png" alt="" /></Link>
            </div>
            <div className="flex flex-row items-center justify-center w-60 gap-4 font-l text-white">
                <Link to={'/listings'}><p>Rent</p></Link>
                <Link to={'/about'}><p>About</p></Link>
                <Link to={'/contact'}><p>Contact</p></Link>
            </div>
            <div className="flex gap-4 w-50 items-center">
                <img src="/images/ig.png" alt="" />
                <img src="/images/web.png" alt="" />
                <img src="/images/x.png" alt="" />
                <img src="/images/youtube.png" alt="" />
            </div>
        </div>
    )
}

export default Footer;