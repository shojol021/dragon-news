import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useState } from "react";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

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

    const authInfo = {
        user,
        setUser,
        createUser,
        verifyEmail,
        userLogin,
        googleLogin
    }

    return (  
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;