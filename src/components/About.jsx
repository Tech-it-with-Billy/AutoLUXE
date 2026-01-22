import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import Services from "./Services";
import Footer from "./Footer";

function About () {
    return (
        <div>
            <NavBar />
            <div className="flex bg-[url(/images/checkout.jpg)] h-25 bg-cover bg-center items-center justify-center"></div>
            <Services />
            <Footer />
        </div>
    )
}

export default About;