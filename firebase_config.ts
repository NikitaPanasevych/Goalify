// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, setDoc, Timestamp, doc, collection, where, query, getDocs, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import Router from 'next/router'
import { useReducer } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId
};

// Initialize Firebase

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const database = getFirestore(app);
export const auth = getAuth(app);

//Handle sign up with Email and Passowrd
export const handleSignUp = (userEmail: string, userPassword: string, userUserName: string) => {

  //Authentication of users with Email and Passoword
  createUserWithEmailAndPassword(auth, userEmail, userPassword )
  .then((UserCredential) => {
    console.log('Successfully added a new user');
    const user = UserCredential.user;
    updateProfile(user, {displayName: userUserName});
    addUserToCollection(user.uid, userUserName, 'local');
  })
  .catch((error) => {
    console.log(error.code);
  });
  Router.push('/dashboard');
}
const addUserToCollection = async (userID: string, userUserName: string | null, authProvided: string) => {
  await setDoc(doc(database,'users', userID), {
    username: userUserName,
    dateCreated: Timestamp.now(),
    authProvider: authProvided,
  });
}


//Handle sign in with Google
export const continueGoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const q = query(collection(database, 'users'), where('uid', '==', user.uid))
    const data = await getDocs(q);
    if(data.docs.length === 0) {
      addUserToCollection(user.uid, user.displayName, 'google');
    };
  } catch(error) {
    console.log(error);
  }
}

export const signInWithEmail = async (userEmail: string, userPassword: string) => {
  try{
    const result = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    const user = result.user;
    user ? Router.push('/dashboard') : null;
  } catch(error) {
    console.log(error);
  }
}

export const logOut = () => {
  signOut(auth);
  Router.push('/');
  console.log("Log out complete!");
}

