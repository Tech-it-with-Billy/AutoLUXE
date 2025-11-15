import React from "react";
import "../index.css"

function Type ({ image}) {
    return (
        <div>
            <img className="w-15 h-15 md:h-20 md:w-20 lg:w-30 xl:w-45 xl:h-30 rounded-md object-cover" src={image} alt="" />
        </div>
    )
} 

export default Type;