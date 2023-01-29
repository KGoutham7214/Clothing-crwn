import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import Button from "../Button/button-component";
import './cart-dropdown.styles.css'
import CartItem from "../cart-item/cart-item.component";

const CartDrop =() =>{
    const{cartItems}=useContext(CartContext); 
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item=><CartItem key={item.Id}  cartItem={item}/>)}
            </div>
            <Button>Checkout</Button>
        </div>
    );

}

export default CartDrop; 