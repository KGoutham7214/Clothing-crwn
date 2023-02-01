import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { useNavigate } from "react-router-dom";

import Button from "../Button/button-component";
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx'
import CartItem from "../cart-item/cart-item.component";

const CartDrop =() =>{
    const{cartItems}=useContext(CartContext); 
    const navigate=useNavigate();
    const checkOutClick=()=>{
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    (cartItems.map(item=><CartItem key={item.Id}  cartItem={item}/>))
                    :(<EmptyMessage as='span'>Your Cart is Empty</EmptyMessage>)
                }
                
            </CartItems>
            <Button onClick={checkOutClick}>Checkout</Button>
        </CartDropDownContainer>
    );

}

export default CartDrop; 