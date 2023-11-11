import React, {useContext} from "react"
import "../CSS/BookItemCarousel.css"
import {BookItem} from "../types";
import {CartStore} from "../contexts/CartContext";
import {CartTypes} from "../reducers/CartReducer";

function BookItemCarousel(props: BookItem){
    const  {dispatch} = useContext(CartStore);
    const addBookToCart = () => {
        dispatch({ type: CartTypes.ADD, item:props, id: props.bookId });
    };
    const deleteBook = () => {
        dispatch({ type: CartTypes.DELETE, item:props, id: props.bookId });
    };
    return (
        <div className="book-item" key={props.bookId}>
            <div className="image-container">
                <img src={require("../images/"+props.imgu)} width="150" height="200" alt={props.title} title={props.title}/>
                {props.isPublic &&
                    <button className="read-now-button"><i className="fa-solid fa-book-open"></i></button>
                }
            </div>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="book-title">{props.title}</span>
            <span className="book-author">{props.author}</span>
            <div className="price-container">
                <span>Price</span>
                <span className="money">${props.price}</span>
                <button className="buy-now-button" onClick={addBookToCart}>Add to Cart</button>
            </div>
        </div>
    );
}
export default BookItemCarousel;