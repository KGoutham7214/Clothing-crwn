import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';


import {CartIconCont,ShopingIcon,ItemCount} from './cart-icon.styles.jsx'
const CartIcon = () =>{
    const {cartCount} = useContext(CartContext)
    return(
        <CartIconCont >
            <ShopingIcon/>
            <ItemCount> {cartCount}</ItemCount>

        </CartIconCont>
    );
}

export default CartIcon;