import React from 'react'
import NavBar from './navbar'
import Banner from './Banner'
import FilterBar from './FilterBar'
import VehicleBrands from './VehicleBrands'
import VehicleBodyType from './VehicleBodyType'
import Listings from './Listings'

function Home() {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
            <VehicleBrands />
            <VehicleBodyType />
            <Listings />
        </div>
    )
}

export default Home;