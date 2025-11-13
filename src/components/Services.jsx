import React from "react";
import "../index.css";

function Services () {
    return (
        <div className="flex flex-col bg-black text-white items-center text-center">
            <div className="flex flex-col mt-20 gap-4">
                <h1 className="text-2xl font-bold">Our services & Benefits</h1>
                <p>Experience the best car rental services with AutoLUXE. We offer a wide range of luxury vehicles, <br />competitive pricing, and exceptional customer service to ensure your satisfaction.</p>
            </div>
            <div className="flex flex-row m-20 gap-20 justify-between">
                <div className="flex flex-col w-90 items-center gap-2">
                    <img className="w-10" src="/images/featured.png" alt="" />
                    <h2>Quality Choice</h2>
                    <p>We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</p>
                </div>
                <div className="flex flex-col w-90 items-center gap-2">
                    <img className="w-10" src="/images/featured2.png" alt="" />
                    <h2>Affordable Prices</h2>
                    <p>Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.</p>
                </div>
                <div className="flex flex-col w-90 items-center gap-2">
                    <img className="w-10" src="/images/featured3.png" alt="" />
                    <h2>Convenient Online Booking</h2>
                    <p>With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;