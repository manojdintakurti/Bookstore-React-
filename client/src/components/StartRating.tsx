import React from "react"
import "../CSS/StarRating.css"

function StarRating(){
    return (
        <span>
            <span className="fa-solid fa-star" key={1}></span>
            <span className="fa-solid fa-star" key={2}></span>
            <span className="fa-solid fa-star" key={3}></span>
            <span className="fa-solid fa-star" key={14}></span>
            <span className="fa-solid fa-star" key={134}></span>
        </span>
    );

}
export default StarRating;