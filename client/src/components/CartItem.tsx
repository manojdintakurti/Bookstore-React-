import {ShoppingCartItem} from "../types";
import React, {useContext} from "react";
import "../CSS/CartItem.css"
import {CartTypes} from "../reducers/CartReducer";
import {CartStore} from "../contexts/CartContext";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface CartItemProps {
    shoppingCartItem: ShoppingCartItem
}
function CartItem(prop:CartItemProps){
    const  {dispatch} = useContext(CartStore);
    const deleteBook = () => {
        dispatch({ type: CartTypes.DELETE, item:prop, id: prop.shoppingCartItem.id });
    };
    const increaseBookQuantity = () => {
        dispatch({ type: CartTypes.INCREASE, item:prop, id: prop.shoppingCartItem.id });
    };
    const decreaseBookQuantity = () => {
        dispatch({ type: CartTypes.DECREASE, item:prop, id: prop.shoppingCartItem.id });
    };
    return (
        <tr className={"cart-item-book"} key={prop.shoppingCartItem.id}>
            <td className="cart-book-image" key={1}>
                <img src={require("../images/"+prop.shoppingCartItem.item.imgu)} alt={prop.shoppingCartItem.item.title} title={prop.shoppingCartItem.item.title}/>
            </td>
            <td className="cart-book-title" key={2}>{prop.shoppingCartItem.item.title}</td>
            <td className="cart-book-price" key={3}>${prop.shoppingCartItem.item.price}</td>
            <td className="cart-book-quantity" key={4}>
                <button
                    className="icon-button inc-button"
                    onClick={increaseBookQuantity}
                >
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </button>
                <span className="quantity">{prop.shoppingCartItem.quantity} </span>
                <button
                    className="icon-button dec-button"
                    onClick={decreaseBookQuantity}
                >
                    <FontAwesomeIcon icon={faMinusCircle}/>
                </button>
            </td>
            <td className="cart-book-subtotal" key={5}>
                ${(prop.shoppingCartItem.item.price * prop.shoppingCartItem.quantity).toFixed(2)}
            </td>
            <td key={6}>
                <i className="fa-regular fa-circle-xmark" onClick={deleteBook}></i>
            </td>
        </tr>
    )
}


export default CartItem;



