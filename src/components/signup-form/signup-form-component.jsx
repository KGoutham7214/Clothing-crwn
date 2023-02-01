
import { useState,useContext } from 'react';
import { createAuthUserWithEmailAndPassword,
        createUserDocumentFromAuth } 
    from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.css'
import Button from '../Button/button-component';
import { UserContext } from '../../contexts/user.context';

const defaultFromFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}




const SignUp = ()=>{
    const {setCurrentUser} = useContext(UserContext)
    const [formFields, setformFields] = useState(defaultFromFields);
    const {displayName,email,password,confirmPassword} = formFields;

    
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setformFields({...formFields,[name]:value});
        
    }

    const resetformfeilds = ()=>{
        setformFields(defaultFromFields);
    }
    
    
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Password do not match')
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user,{displayName});
            resetformfeilds();
        }
        
        catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use');
            }else{
            alert(error);
            }
        }
        
    }



    return(
        <div className='container-sign'>
           <h2>Not yet registered?</h2> 
            <span>Sign up form</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
                className="form-input"
                label="Enter name"
                required
                onChange={handleChange}
                type='text' 
                name="displayName"
                value={displayName}
            />

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

            <FormInput 
            className="form-input"
            label="Confirm password"
            required
            onChange={handleChange}
            type='password' 
            name="confirmPassword"
            value={confirmPassword}
            />

            <Button type='submit' >Sign up</Button>
            </form>
            
        </div>
    );
}

export default SignUp;