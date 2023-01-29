
import { useState } from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup,signInWithAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import './sign-in.component.css'
import Button from '../Button/button-component';


const defaultFromFields = { 
    email:'',
    password:'',
}




const SignIn = ()=>{
    const [formFields, setformFields] = useState(defaultFromFields);
    const {email,password} = formFields;

    
   
   
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setformFields({...formFields,[name]:value});
        
    }

    const resetformfeilds = ()=>{
        setformFields(defaultFromFields);
    }
    
   
    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        try {
            const {user} = await signInWithAuthUserWithEmailAndPassword(email,password);
            
            resetformfeilds();
        }catch (error) {
            alert(error);
        }
    }


    const logGoogleUsingPopup = async()=>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
   
        resetformfeilds();
    }


    return(
        <div className='container-sign'>
           <h2>Alreaady have an account?</h2> 
            <span>Sign up form</span>
            <form onSubmit={handleSubmit}>

            <FormInput 
            className="form-input"
            label="Enter email"
            required
            onChange={handleChange}
            type='text' 
            name="email"
            value={email}
            />

            <FormInput 
            className="form-input"
            label="Enter Password"
            required
            onChange={handleChange}
            type='password' 
            name="password"
            value={password}
            />
            <div className='buttons-container'>
             <Button type='submit' onclick={handleSubmit}>Sign in</Button>
             <Button type='button' buttonType='google' onClick={logGoogleUsingPopup} >Google sign in</Button>
            </div>
            </form>
            
        </div>
    );
}

export default SignIn;