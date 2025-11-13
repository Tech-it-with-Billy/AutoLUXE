import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FilterBar from "./FilterBar";
import VehicleBrands from "./VehicleBrands";
import VehicleBodyType from "./VehicleBodyType";
import VehicleListings from "./VehicleListings";
import Procedure from "./Procedure";
import Services from "./Services";

function Home () {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
            <VehicleBrands />
            <VehicleBodyType />
            <VehicleListings />
            <Procedure />
            <Services />
        </div>
    )
}

export default Home;