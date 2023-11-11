import React, {useContext} from "react";
import {CartStore} from "../contexts/CartContext";
import CartItem from "./CartItem";
import "../CSS/CartItem.css"
import CartNoItems from "./CartNoItems";
import {CartTypes} from "../reducers/CartReducer";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import "../CSS/CartTable.css"

function CartComponent() {
    const { cart, dispatch } = useContext(CartStore);
    const clearCart = () => {
        dispatch({ type: CartTypes.CLEAR });
    };
    let noOfItems = 0
    let price = 0
    cart.forEach((element, index, array) => {
        price+=element.item.price*element.quantity
        noOfItems+=element.quantity
    });
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return(
        <div>
            <h1>Items in your cart</h1>
            <div className={"cart-page"}>
                {cart.length>0 &&
                    <div className={"cart-items"}>
                        <div className="cart-table">
                            <table className = "cart2">
                                <thead>
                                    <tr className="table-heading" key={"heading-cart"}>
                                        <td className="heading-book" colSpan={2} key={"heading-cart2"}>Book</td>
                                        <td className="heading-price" key={"heading-cart3"}>Price</td>
                                        <td className={"heading-quanity"} key={"heading-cart4"}>Quantity</td>
                                        <td className="heading-subtotal" key={"heading-cart5"}>Amount</td>
                                        <td className={"heading-delete"} key={"heading-cart6"}>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart.map((item)=>(
                                    <CartItem key={item.id} shoppingCartItem={item}/>
                                ))
                                }
                                </tbody>
                            </table>
                            </div>
                        <a href="#" onClick={clearCart} className={"clear-cart-button"}>Clear</a>
                    </div>
                }
                {
                    cart.length===0 && <CartNoItems />
                    }



                <div className={"cart-summary"}>
                    <div className={"cart-summary-table"}>
                    <h1>Cart Summary</h1>
                    <table >
                        <tbody>
                        <tr>
                            <td>Books</td>
                            <td>{noOfItems}</td>
                        </tr>
                        {price>0&&
                            <tr>
                                <td>Subtotal (without tax)</td>
                                <td>${price}</td>
                            </tr>}
                        {price>0&&
                            <tr>
                                <td>Tax</td>
                                <td>${(price/100*18).toFixed(2)}</td>
                            </tr>
                        }
                        {price > 0 &&
                            <tr>
                                <td className={"bold-text"}>Total</td>
                                <td className={"price"}>${(price + price/100*18).toFixed(2)}</td>
                            </tr>
                        }

                        </tbody>
                    </table>
                    </div>
                    {cart.length>0 &&
                    <div className={"primary-button"}><Link to={"/checkout"} className={"link-text"}>Proceed to Checkout</Link></div>
                    }
                    <div className={"secondary-button"}><a href="#" onClick={goBack} className={"link-text2"}>Continue Shopping</a></div>
                </div>

            </div>
        </div>

    )
}
export default CartComponent;