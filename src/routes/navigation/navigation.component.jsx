import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDrop from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-context";
import './navigation.component.css';


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
         <div className="navigation">
          <Link className="logo-container" to={'/'}>
             <CrwnLogo  className="logo"/>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to={'/home'}>
                HOME
              </Link>
              <Link className="nav-link" to={'/shop'}>
                SHOP
              </Link>
              {currentUser ? (
                                <span className="nav-link" onClick={signOutHandler }>SIGN OUT</span>
                             ) : (
                                   <Link className="nav-link" to={'/auth'}>
                                    SIGNIN
                                   </Link>
                                 )
              
              }
              
              
              <span onClick={handleDropdownClick}>
                <CartIcon />
              </span>
              

              
          </div>
      
          {isCartOpen && <CartDrop />}
         </div>
         
         <Outlet />
        </Fragment>
    );
}

export default Navigation;