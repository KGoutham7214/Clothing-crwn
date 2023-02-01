import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDrop from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-context";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.component.styles.jsx';


const Navigation= () =>{

    const {currentUser} = useContext(UserContext);
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    
    
    // console.log(currentUser);

    const handleDropdownClick = () => {
      setIsCartOpen(!isCartOpen);
    };

    const signOutHandler =async()=>{
      await signOutUser();
    
    }
    return(
        <Fragment>
         <NavigationContainer>
          <LogoContainer to={'/'}>
             <CrwnLogo  className="logo"/>
          </LogoContainer>
          <NavLinks>
              <NavLink to={'/home'}>
                HOME
              </NavLink>
              <NavLink to={'/shop'}>
                SHOP
              </NavLink>
              {currentUser ? (
                                <NavLink as='span' onClick={signOutHandler }>SIGN OUT</NavLink>
                             ) : (
                                   <NavLink to={'/auth'}>
                                    SIGNIN
                                   </NavLink>
                                 )
              
              }
              
              
              <NavLink as='span' onClick={handleDropdownClick}>
                <CartIcon />
              </NavLink>
              

              
          </NavLinks>
      
          {isCartOpen && <CartDrop />}
         </NavigationContainer>
         
         <Outlet />
        </Fragment>
    );
}

export default Navigation;