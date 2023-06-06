import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config.js";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const  login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
        const googleSignIn = ()=>{
            setLoading(true)
           return signInWithPopup(auth, googleProvider )
        }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);

            // get and set token
         if(currentUser){
            axios.post(`http://localhost:5000/jwt`,{
                email: currentUser.email
              })
              .then(data =>{
                console.log(data.data.token);
                localStorage.setItem('access-token',data.data.token) 
            setLoading(false)

              })
         }
         else{
            localStorage.removeItem('access-token')
         }


        });
        return ()=>{
            return unsubscribe()
        }
    })
    const updateUseProfile = (name, photo)=>{
        
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const authInfo ={
        user,
        loading,
        createUser,
        logOut,
    login,
    updateUseProfile,
    googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;