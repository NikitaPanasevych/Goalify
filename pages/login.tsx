import { NextPage } from "next"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from 'react';

//Components
import SignUp from "../components/loginComponents/SignUp";
import LogIn from "../components/loginComponents/LogIn";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

//firebase
import { app, database } from "../firebase_config";
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { Opacity, Translate } from "@mui/icons-material";

export type IUs = {
  email: string,
  username: string,
  password: string,
};

const Login: NextPage = () => {

  // Variables and hooks
  const [mode, setMode] = useState("signup");

  const [curUser, setCurUser] = useState<IUs>({
    email: '',
    username: '',
    password: '',
  });
  const handleUserInfo = (userName: string, userValue: string) => {
    setCurUser({...curUser, [userName]: [userValue]});
  }

  // Database Connection
  const userRef = collection(database, 'users');

  //Database interaction - Adding new users
  const handleSignUp = () => { 
      addDoc(userRef, curUser)
      .catch((err) => {
        console.error(err);
      })
  }

  const clearUser = () => {
    setCurUser({
      username: '',
      email: '',
      password: ''
    });
  }
  // New branch login-test created

  return (

    <div className="flex login-page-Bg h-screen">
      <title>Login</title>
      <div className="login-page pt-5 bg-gradient-to-t from-white to-[#FFF89A] rounded-xl">
        <div className=" grid">
          <h1><a href='/guest'>Vision</a></h1>
          <ButtonGroup className=" m-auto" variant="text" aria-label="outlined button group">
            {mode === 'signup' ?  <Button disabled>Sign up</Button> : <Button name="signup" onClick={() => {setMode("signup"); clearUser()}}>Sign up</Button>}
            {mode === "login" ? <Button disabled>Log In</Button> : <Button name="login" onClick={() => {setMode("login"); clearUser()}}>Log in</Button>}
          </ButtonGroup>
        </div>
        {mode === "signup" ? <SignUp handleUserChange={handleUserInfo} userInfo={curUser} handleClick={handleSignUp} /> : <LogIn handleUserChange={handleUserInfo} userInfo={curUser} />}
      </div>
    </div>
  )
}


export default Login;

function e(e: any) {
  throw new Error("Function not implemented.");
}
