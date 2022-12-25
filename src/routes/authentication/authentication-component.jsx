
import SignUp from "../../components/signup-form/signup-form-component";
import SignIn from "../../components/sign-in-form/sign-in.component.jsx";
import './authentication.component.css'

const Auth = () =>{
    return(
        <div className="authentication-container">
            <SignIn />  
            <SignUp />
        </div>

    );
}

export default Auth;