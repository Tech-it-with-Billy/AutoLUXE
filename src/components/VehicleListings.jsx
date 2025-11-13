import React from "react";
import "../index.css"
import VehicleCard from "./VehicleCard";
import { products } from "./products";
import { Link } from "react-router-dom";

function VehicleListings() {
    return (
        <div className="flex flex-col gap-10 p-6 justify-center items-center bg-gray-100">
            <div className="text-center">
                <h1 className="font-bold text-2xl">Our Impressive Collection of Cars</h1>
                <p>Ranging from elegant sedans to powerful sports cars, all carefully selected<br /> to provide our customers with the ultimate driving experience.</p>
            </div>
            <div className="flex gap-4">
                <Link to={'/listings'}><button className="justify-around bg-black text-white p-1 rounded-2xl w-40">Popular Cars</button></Link>
                <Link to={'/listings'}><button className="justify-around bg-black text-white p-1 rounded-2xl w-40">Luxury Cars</button></Link>
                <Link to={'/listings'}><button className="justify-around bg-black text-white p-1 rounded-2xl w-40">Vintage Cars</button></Link>
                <Link to={'/listings'}><button className="justify-around bg-black text-white p-1 rounded-2xl w-40">Family Cars</button></Link>
                <Link to={'/listings'}><button className="justify-around bg-black text-white p-1 rounded-2xl w-40">Off-road Cars</button></Link>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-10 m-1">
                    {products.map((product, index) => (
                        <VehicleCard 
                            key={index}
                            image={product.image}
                            name={product.name}
                            cost={product.cost}
                            engine={product.engine}
                            seats={product.seats}
                            transmission={product.transmission}
                            gasType={product.gasType}
                        />
                    ))}
                </div>
            </div>
            <Link to={'/listings'}>
                <button className=" justify-around bg-black text-white w-60 p-1 rounded-2xl w-40">See all Cars</button>
            </Link>
        </div>
    );
}

export default VehicleListings;