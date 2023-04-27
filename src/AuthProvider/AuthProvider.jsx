import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useState } from "react";

const auth = getAuth(app)
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

    const authInfo = {
        user,
        setUser,
        createUser,
        verifyEmail,
        userLogin
    }

    return (  
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;