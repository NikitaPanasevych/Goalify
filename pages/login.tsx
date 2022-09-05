/* Suggestions for future:
 - Add an error message alert and css to show that input is wrong
*/


import { NextPage } from "next"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Head from "next/head";


//Components
import SignUp from "../components/loginComponents/SignUp";
import LogIn from "../components/loginComponents/LogIn";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

//firebase
import { Opacity, Translate } from "@mui/icons-material";

export let userID: string = '';


const Login: NextPage = () => {

  // Variables and hooks
  const [mode, setMode] = useState<string>("signup");

  // New branch login-test created

  return (

    <div className="flex login-page-Bg h-screen">
      <Head>
            <title>Login</title>
        </Head>
      <div className="login-page pt-5 bg-gradient-to-t from-white to-[#FFF89A] rounded-xl">
        <div className="huyi grid">
          <h1><a href='/guest'>Vision</a></h1>
          <ButtonGroup className=" m-auto" variant="text" aria-label="outlined button group">
            {mode === 'signup' ?  <Button disabled>Sign up</Button> : <Button name="signup" onClick={() => {setMode("signup")}}>Sign up</Button>}
            {mode === "login" ? <Button disabled>Log In</Button> : <Button name="login" onClick={() => {setMode("login")}}>Log in</Button>}
          </ButtonGroup>
        </div>
        {mode === "signup" ? <SignUp /> : <LogIn />}
      </div>
    </div>
  )
}


export default Login;
