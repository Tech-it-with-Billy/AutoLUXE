import React from 'react'
import NavBar from './navbar'
import Banner from './Banner'
import FilterBar from './FilterBar'
import VehicleBrands from './VehicleBrands'
import VehicleBodyType from './VehicleBodyType'
import Listings from './Listings'
import Procedure from './Procedure'
import Services from './Services'
import Reviews from './Reviews'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <NavBar />
            <Banner />
            <FilterBar />
            <VehicleBrands />
            <VehicleBodyType />
            <Listings />
            <Procedure />
            <Services />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home;