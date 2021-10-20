// import pakages
import React, { useState } from 'react';

// import files
import reg from './images/reg.jpg';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../shared/Navbar/Navbar';
import Login from './Login';
import useAuth from '../../hooks/useAuth';
import homebg from '../Homepage/images/hm-bg.png';
import google from './images/google.png';
import './accounts.css';


const Registation = () => {

    const {setEmail, setPassword, createSingInWithEmail, googleSignIn, error, setError} = useAuth();
    const [isLogin , setIsLogin] = useState(true);

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    // handle toggle by those function 
    const handleLogin = () =>{
        setIsLogin(true);
        setError("");
    }
    const handleSignIn = () =>{
        setIsLogin(false);
        setError("");
    }

    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            <div className="flex  reg-card justify-center mt-20">
                <div className="reg-card hidden md:block">
                    <img src={reg} alt="" className=" reg-img" />
                </div>       
                {/* handle login and registration toggle  */}
                {isLogin? <Login handleSignIn={handleSignIn} /> :
                <div className="p-10 bg-gray-600 reg-right-part">
                <h1 className="text-gray-200">Registration</h1>
                <form onSubmit={(e)=>createSingInWithEmail(e)} className="flex flex-col justify-center">
                    <input type="email" required onChange={handleEmail} placeholder="Enter Email" className="inpt-f"/>
                    <input type="password" required onChange={handlePassword} placeholder="Enter Password" className="inpt-f" />
                    {error ? <p className="p-2 bg-yellow-300 rounded-lg mt-3 w-80">{error}</p>:null}
                    <button type="submit" className="visit-btn rounded-lg font-semibold mt-3">Register</button>
                </form>
                    <p className="text-gray-300 font-semibold mt-2">Already have an account? <button onClick={handleLogin} className="sign">Log in</button></p>
                    <p className="text-gray-300 text-md">-----or You can also use this------</p>
                    <div className="flex justify-center">
                        <button onClick={googleSignIn}><img src={google} alt="google" className="google-btn" /></button>
                    </div>
                </div>}
            </div>
        </div>
        
     );
}
 
export default Registation;