import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import Button from '../Button/button-component';
import './product-card.styles.css'

const ProductCard = ({product}) =>{
const{addItemToCart}=useContext(CartContext);

const addCart = ()=>{
   addItemToCart(product)
}

const {name,price,imageUrl} = product;
   return(
       <div className='product-card-container'>
          <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
            </div>
            <Button onClick={addCart} buttonType='inverted'>Add to Cart</Button>
      </div>
   );
    
}

export default ProductCard;