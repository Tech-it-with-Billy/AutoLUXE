import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FilterBar from "./FilterBar";
import VehicleBrands from "./VehicleBrands";
import VehicleBodyType from "./VehicleBodyType";
import VehicleListings from "./VehicleListings";

function Home () {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
            <VehicleBrands />
            <VehicleBodyType />
            <VehicleListings />
        </div>
    )
}

export default Home;