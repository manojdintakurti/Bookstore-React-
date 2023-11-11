import {CartStore} from "../contexts/CartContext";
import {useContext} from "react";
import "../CSS/CheckoutCSS.css"

function Checkout(){
    const {cart} = useContext(CartStore);
    return (
        <div className={"checkout-main"}>
            <h1>Checkout Page</h1>
            <div className={"book-images-checkout"}>
                <div className={"checkout-items"}>
                    {cart.map((book)=>(
                        <div key={book.id}><img src={require("../images/"+book.item.imgu)} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
export default Checkout;