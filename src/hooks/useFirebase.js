import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.form || '/';

    const googleprovider = new GoogleAuthProvider();

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
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user);
            history.push(redirectUrl)})
        .finally(() => setLoading(false))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        e.preventDefault();
    }

    const googleSignIn = () => {
    setLoading(true);

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        setUser(result.user);
        history.push(redirectUrl);
      })
      .finally(() => setLoading(false));
  };

  // this is a auth observer with observe all changes for the user

    const logout = () =>{
        signOut(auth).then(() => {
            setUser({});
        })
        .finally(() => setLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        setLoading(false)
        });
    },[])

    return {
        user,
        createSingInWithEmail,
        setEmail,
        setPassword,
        signInWithEmail,
        logout,
        loading,
        googleSignIn
    };
}

export default useFirebase;