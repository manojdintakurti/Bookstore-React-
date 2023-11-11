import React, {Dispatch, useContext} from "react";
import {Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import {categories, ShoppingCartItem} from "../types";
import {cartReducer} from "../reducers/CartReducer";
import cartContext, {CartStore} from "../contexts/CartContext";

function AppHeader(){
    const { cart, dispatch } = useContext(CartStore);
    let noOfItems = 0
    let price = 0
    cart.forEach((element, index, array) => {
        price+=element.item.price*element.quantity
        noOfItems+=element.quantity
    });
    return(
        <div className="Header">
            <div className="header-logo">
                <div className="website-log">
                    <Link to="/">
                        <img
                            src={require('../images/logo.jpg')}
                            alt="Logo" width="281" height="40" />
                    </Link>
                </div>
                <div className="icons-tray pull-right">
                    <Link to="/"><i className="fas fa-light fa-house fa-lg hover-effect" ></i></Link>
                    <Link to="/wishlist"><i className="fas fa-regular fa-heart fa-lg hover-effect"></i></Link>
                    <Link to="/cart" className={"cart-icon"}><i className="fas fa-light fa-cart-shopping fa-lg hover-effect">
                        <div className=" cart-count">{noOfItems}</div></i>
                    </Link>

                </div>


            </div>
            <div className="header-options">
                    <NavigationBar />
            </div>
        </div>
    )
}
export default AppHeader;
