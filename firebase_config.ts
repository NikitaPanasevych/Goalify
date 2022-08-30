// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, setDoc, Timestamp, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import Router from 'next/router'

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

const addUserToCollection = async (userID: string, userUserName: string, authProvided: string) => {
  await setDoc(doc(database,'users', userID), {
    username: userUserName,
    dateCreated: Timestamp.now(),
    authProvider: authProvided,
  });
}