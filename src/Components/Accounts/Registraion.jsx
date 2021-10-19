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


const Registation = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const {setEmail, setPassword, createSingInWithEmail} = useFirebase();
    const [isLogin , setIsLogin] = useState(false);


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
            <Navigation />
            <div className="flex">
            <div className="w-2/4">
                <img src={reg} alt="" srcset="" className="w-5/6 h-screen" />
            </div>
            
                {isLogin? <Login handleSignIn={handleSignIn} /> :
                <div className="w-2/4">
                <h1>Registration</h1>
                <form onSubmit={(e)=>createSingInWithEmail(e)} className="flex flex-col justify-center">
                    <input type="email" required onChange={handleEmail} />
                    <input type="password" required onChange={handlePassword} />
                    <button type="submit" className="bg-green-300">Signup</button>
                </form>
                    <p>Already have an account? <button onClick={handleLogin}>Sign in</button></p>
                </div>}
            </div>
        </div>
        
     );
}
 
export default Registation;