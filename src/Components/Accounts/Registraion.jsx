// import pakages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase.init'
// import files
import reg from './images/reg.jpg';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../shared/Navbar/Navbar';
import Login from './Login';
// import useServices from '../../hooks/useServices';
import useAuth from '../../hooks/useAuth';
import homebg from '../Homepage/images/hm-bg.png';
import google from './images/google.png';
import './accounts.css';


const Registation = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const {setEmail, setPassword, createSingInWithEmail, googleSignIn} = useAuth();
    const [isLogin , setIsLogin] = useState(true);
    


    // const auth = getAuth();

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleLogin = () =>{
        setIsLogin(true);
    }
    const handleSignIn = () =>{
        setIsLogin(false);
    }

    // const handleSubmitForm = (e) =>{
    //     console.log(email, password)
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user)
    //     // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //     });

    //     e.preventDefault();
    // }
    

    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            <div className="flex  reg-card justify-center mt-20">
                <div className="reg-card hidden md:block">
                    <img src={reg} alt="" className=" reg-img" />
                </div>
            
                {isLogin? <Login handleSignIn={handleSignIn} /> :
                <div className="p-10 bg-gray-600 reg-right-part">
                <h1 className="text-gray-200">Registration</h1>
                <form onSubmit={(e)=>createSingInWithEmail(e)} className="flex flex-col justify-center">
                    <input type="email" required onChange={handleEmail} placeholder="Enter Email" className="inpt-f"/>
                    <input type="password" required onChange={handlePassword} placeholder="Enter Password" className="inpt-f" />
                    <button type="submit" className="visit-btn rounded-lg font-semibold mt-3">Signup</button>
                </form>
                    <p className="text-gray-300 font-semibold mt-2">Already have an account? <button onClick={handleLogin} className="sign">Sign in</button></p>
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