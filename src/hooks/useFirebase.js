import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const createSingInWithEmail = (e) =>{
        console.log("hello dhukche")
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            setUser(res.user);
            // console.log("hello", res.user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        e.preventDefault();
    }
    const signInWithEmail = (e) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            setUser(res.user);
            console.log("hello", res.user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        e.preventDefault();
    }

    const logout = () =>{
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        });
    })

    return {
        user, 
        createSingInWithEmail, 
        setEmail,
        setPassword,
        signInWithEmail,
        logout
    };
}

export default useFirebase;