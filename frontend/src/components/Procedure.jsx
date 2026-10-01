import React from "react";
import "../index.css";
import bannerImage from "/images/cars/jeepbg.png";

const Procedure = () => {
    return (
        <div class="max-w-6xl mx-auto py-12 px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">How it works</h2>
                <p class="text-gray-600 max-w-xl mx-auto">Renting a luxury car has never been easier...</p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center">
                
                <div class="z-10 flex flex-col gap-6 md:-mr-24 w-full md:w-1/2">
                
                    <div className="relative flex flex-row gap-5 border-1 rounded-xl max-w-full bg-white p-5">
                        <div className="bg-gray-200 rounded w-15 h-20 flex items-center justify-center">
                            <img src="/images/search.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">Browse and select</h1>
                            <p>Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-row gap-5 border-1 rounded-xl max-w-full bg-white p-5">
                        <div className="bg-gray-200 rounded w-15 h-20 flex items-center justify-center">
                            <img src="/images/calendar.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">Book and confirm</h1>
                            <p>Book your desired car with just a few clicks and receive <br />an instant confirmation via email or SMS.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-row gap-5 border-1 rounded-xl max-w-full bg-white p-5">
                        <div className="bg-gray-200 rounded w-15 h-20 flex items-center justify-center">
                            <img src="/images/facehappy.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">Enjoy your ride</h1>
                            <p>Pick up your car at the designated location and enjoy your <br />premium driving experience with our top-quality service.</p>
                        </div>
                    </div>
                </div>
                <div class="relative w-full md:w-3/5 mt-12 md:mt-0">
                    <div class="bg-gray-100 rounded-[40px] p-12 flex items-center justify-center min-h-[400px]">
                        <img 
                            src="/images/cars/jeep.png" 
                            alt="Jeep Wrangler" 
                            class="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Procedure;