import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FilterBar from "./FilterBar";
import VehicleBrands from "./VehicleBrands";
import VehicleBodyType from "./VehicleBodyType";

function Home () {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
            <VehicleBrands />
            <VehicleBodyType />
        </div>
    )
}

export default Home;