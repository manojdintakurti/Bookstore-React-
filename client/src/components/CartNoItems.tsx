import {Link} from "react-router-dom";
import React from "react";

function CartNoItems(){
    return (
        <div className={"cart-no-items"}>
            <Link to="/categories">
                <img src={require("../images/Cartempty.png")} alt={"empty cart"} />

            </Link>
        </div>
    )
}
export default CartNoItems;