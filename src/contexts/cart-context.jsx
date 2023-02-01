import { createContext ,useState,useEffect} from "react";


const addCartItem=(cartItems,productToAdd)=>{
   
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem){
    return cartItems.map((cartItem)=>
      cartItem.id ===productToAdd.id ?
      {...cartItem, quantity:cartItem.quantity + 1}:cartItem
    )
  }

  return [...cartItems, {...productToAdd,quantity:1}];
  
}


//new
const removeCartItem=(cartItems,productToRemove)=>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if(existingCartItem.quantity ===1){
    return cartItems.filter((cartItem)=>cartItem.id !== productToRemove.id)
  }

  
    return cartItems.map((cartItem)=>
      cartItem.id ===productToRemove.id ?
      {...cartItem, quantity:cartItem.quantity - 1}:cartItem
    )
  
}

const clearCartItem = (cartItems,productToClear)=>cartItems.filter((cartItem)=>cartItem.id !== productToClear.id);



export const CartContext = createContext({
  isCartOpen : false,
  setisCartOpen:() => {}, 
  cartItems:[],
  addItemToCart: ()=>{},
  removeItemToCart: ()=>{},
  clearItemToCart:()=>{},
  cartCount:0,
});

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen]  = useState(false);
    const [cartItems, setCartItems]  = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
      const newCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
      setCartCount(newCount);
    },[cartItems]) 

    useEffect(()=>{
      const newCountTotal = cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0);
      setCartTotal(newCountTotal);
    },[cartItems]) 


    const addItemToCart = (productToAdd) =>{
      setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemToCart = (productToRemove) =>{
      setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const clearItemToCart=(productToClear)=>{
      setCartItems(clearCartItem(cartItems,productToClear));
    }

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemToCart,clearItemToCart,cartTotal};
    return(
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    ); 
     
}