import React from "react";
import "../index.css";

function Footer () {
    return (
        <div className="flex flex-row bg-black h-30 items-center justify-between px-20" >
            <div className="relative width-50 h-30 w-50 flex items-center pl-20">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="flex flex-row items-center justify-center w-60 gap-4 font-l text-white">
                <p>Rent</p>
                <p>Share</p>
                <p>About us</p>
                <p>Contact</p>
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