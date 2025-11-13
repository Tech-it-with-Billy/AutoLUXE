import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import VehicleListings from "./VehicleListings";
import Footer from "./Footer";

function Listings () {
    return (
        <div>
            <NavBar />
            <VehicleListings />
            <Footer />
        </div>
    )
}

export default Listings;