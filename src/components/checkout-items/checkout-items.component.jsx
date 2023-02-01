 import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context'; 
import './checkout-items.component.styles.css'

 const CheckOutItem = ({cartItem})=>{
    const {clearItemToCart,addItemToCart,removeItemToCart} = useContext(CartContext);
    const {name , imageUrl,price , quantity} = cartItem;
    // const removeItem = ()=>{
    //     cartItem.quantity = 1
    //     return removeItemToCart(cartItem)
    // }
    
    const leftArrow=()=>{
        removeItemToCart(cartItem);
    }
    const rightArrow=()=>{
        addItemToCart(cartItem);
    }

    const crossButton = ()=> {
        clearItemToCart(cartItem);
    }
    
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span onClick={leftArrow} className='arrow'>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span onClick={rightArrow} className='arrow'>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <div onClick={crossButton} className='remove-button'>&#10005;</div>

        </div>
    );
 }
 export default CheckOutItem