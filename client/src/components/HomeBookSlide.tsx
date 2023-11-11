import React from "react"
import StarRating from "./StartRating";
import {BookItem} from "../types";



function HomeBookSlide(props:BookItem){
    return (
        <div className="carousel-items" key={props.bookId}>
            <img className="book-image"
                 src={require("../images/"+props.imgu)}
                 alt="Book 1"
            />
            <div className="book-info">
                <h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.title}</h3>
                <p className="best-sellers-title-main">{props.author}</p>
                <StarRating />
                <p className="price">Price: ${props.price}</p>
            </div>
        </div>
    );
}
export default HomeBookSlide;

