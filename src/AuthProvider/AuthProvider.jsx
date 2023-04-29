import { createContext } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useState } from "react";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = (user) => {
        return sendEmailVerification(user)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        console.log(2)
        return signOut(auth)
    }

    onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser)
        setLoading(false)
    })

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        verifyEmail,
        userLogin,
        googleLogin,
        facebookLogin,
        githubLogin,
        logOut
    }

    return (  
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;