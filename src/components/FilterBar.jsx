import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function FilterBar () {
    return (
        <div className="flex justify-center items-center">
            <form action="submit" className="flex justify-around bg-gray-200 p-5 rounded-lg -m-10 items-center gap-3 w-300 text-black text-sm">
                <div className="flex flex-col">
                    <label htmlFor="location">Pick-up Location</label>
                    <input className="justify-around bg-white p-1 rounded-xl w-40" type="text" id="location" name="location" value="Search a location" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date">Pick-up Date</label>
                    <input className="justify-around bg-white p-1 rounded-xl w-40" type="date" id="date" name="date" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="location">Drop-off Location</label>
                    <input className="justify-around bg-white p-1 rounded-xl w-40" type="text" id="location" name="location" value="Search a location" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date">Drop-off Date</label>
                    <input className="justify-around bg-white p-1 rounded-xl w-40" type="date" id="date" name="date" />
                </div>
                <Link to={'/listings'}>
                    <button className="justify-around bg-black hover:border-3 border-purple-500 text-white p-1 rounded-2xl w-40" type="submit">Find your ride </button>
                </Link>
            </form>
        </div>
    )
}

export default FilterBar;