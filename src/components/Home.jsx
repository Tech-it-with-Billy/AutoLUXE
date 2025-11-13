import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FilterBar from "./FilterBar";

function Home () {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
        </div>
    )
}

export default Home;