import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/signup-form/signup-form-component";





const SignIn = () =>{
    useEffect(() => {
        async function _getRedirectResult() {
          const response = await getRedirectResult(auth);
          if (response) {
            await createUserDocumentFromAuth(response.user);
          }
        }
        _getRedirectResult();
      }, []);

    const logGoogleUsingPopup =async()=>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    
    
    return(
        <div>
          <div>
          <h1>Sign in page</h1>
            <button onClick={logGoogleUsingPopup}>Sign in with Google popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in using redirect</button>

          </div>
          <div>
            <SignUp />
          </div>
        </div>

    );
}

export default SignIn;