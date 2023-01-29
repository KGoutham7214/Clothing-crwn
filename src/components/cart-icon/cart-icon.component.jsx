import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import {ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.css'
const CartIcon = () =>{
    const {cartCount} = useContext(CartContext)
    return(
        <div className='cart-icon-container ' >
            <ShoppingCart  className='cart-icon'/>
            <span className='item-count'> {cartCount}</span>

        </div>
    );
}

export default CartIcon;