// import pakages
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

// import files 

const Login = (props) => {

    // const {handleSignIn} = props;

    const {setEmail, setPassword, signInWithEmail} = useFirebase();

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleLogin = () =>{
        // setIsLogin(true);
        props.handleSignIn()

    }

    return ( 
        <div>
            <h1>Log In</h1>
            <form onSubmit={(e)=>signInWithEmail(e)} className="flex flex-col justify-center">
                <input type="email" required onChange={handleEmail} />
                <input type="password" required onChange={handlePassword} />
                <button type="submit" className="bg-green-300">Login</button>
            </form>
                <p>Already have an account? <button onClick={handleLogin}>Registration</button></p>
        </div>
     );
}
 
export default Login;