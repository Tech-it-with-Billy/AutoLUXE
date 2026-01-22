import React from 'react'
import NavBar from './navbar';
import Listings from './Listings';
import Footer from './Footer';

function VehiclesListing() {
    return (
        <div>
            <NavBar />
            <Listings />
            <Footer />
        </div>
    )
}

export default VehiclesListing;