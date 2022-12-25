import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.component.css';

const Navigation= () =>{
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
              <Link className="nav-link" to={'/auth'}>
                AUTH
              </Link>
          </div>
          
         </div>
         <Outlet />
        </Fragment>
    );
}

export default Navigation;