import React from 'react'

function Procedure() {
    return (
        <div className="m-10 flex flex-col gap-10">
            <div className="text-center gap-10">
                <h1 className="font-bold text-2xl">How it works</h1>
                <p className="">Renting a luxury car has never been easier. Our streamlined process makes it simple for you<br /> to book and confirm your vehicle of choice online</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="relative flex flex-col mt-5 gap-5 lg:max-w-150">
                    <div className="relative flex flex-row gap-5 border-1 rounded-xl max-w-full bg-white p-5">
                        <div className="bg-gray-200 rounded max-w-25 h-20 flex items-center justify-center">
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
                <div className="relative mt-20 ">
                    <img src="/images/cars/jeep.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Procedure;