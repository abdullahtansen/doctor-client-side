import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [authError,setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password,name,navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email,displayName: name};
        setUser(newUser);
        // save user to the database
        saveUser(email,name,'POST');
         // send name to firebase after creation
         updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          
        }).catch((error) => {
          
        });
        navigate('/');
      })
      .catch((error) => {
      
        setAuthError(error.message);
        // ..
      })
      .finally(()=>setIsLoading(false))
  };

  const loginUser = (email,password)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('')
  })
  .catch((error) => {
    
    setAuthError(error.message);
  }).finally(()=>setIsLoading(false))
  }

  const signInWithGoogle =(navigate) =>{
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email,user.displayName, 'PUT');
    setAuthError('');
    navigate('/')
  }).catch((error) => {
   setAuthError(error.message);
    // ...
  }).finally(()=>setIsLoading(false));
  }

  // Observer user state
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unSubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false))
  };

    const saveUser = (email,displayName,method)=>{
      const user = {email,displayName};
      fetch('http://localhost:5000/users',{
        method: method,
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
  };
};
export default useFirebase;
