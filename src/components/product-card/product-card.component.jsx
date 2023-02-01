import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import Button,{BUTTON_TYPE} from '../Button/button-component';
import './product-card.component.styles.css'

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
            <Button onClick={addCart} buttonType={BUTTON_TYPE.inverted}><span>Add to Cart</span></Button>
      </div>
   );
    
}

export default ProductCard;