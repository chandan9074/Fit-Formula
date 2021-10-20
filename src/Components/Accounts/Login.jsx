// import pakages
import React from 'react';
import useAuth from '../../hooks/useAuth';
import google from './images/google.png';

// import files 
import './accounts.css';

const Login = (props) => {

    const {setEmail, setPassword, signInWithEmail, googleSignIn} = useAuth();

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleLogin = () =>{
        props.handleSignIn()

    }

    return ( 
        <div className="p-10 bg-gray-600 reg-right-part">
            <h1 className="text-gray-200">Log In</h1>
            <form onSubmit={(e)=>signInWithEmail(e)}  className="flex flex-col justify-center">
                <input type="email" required onChange={handleEmail} placeholder="Enter Email" className="inpt-f"/>
                    <input type="password" required onChange={handlePassword} placeholder="Enter Password" className="inpt-f" />
                    <button type="submit" className="visit-btn rounded-lg font-semibold mt-3">Login</button>
            </form>
            <p className="text-gray-300 font-semibold mt-2">Create a new account? <button onClick={handleLogin} className="sign">Registration</button></p>
            <p className="text-gray-300 text-md">-----or You can also use this------</p>
            <div className="flex justify-center">
                <button onClick={googleSignIn}><img src={google} alt="google" className="google-btn" /></button>
            </div>
        </div>
     );
}
 
export default Login;