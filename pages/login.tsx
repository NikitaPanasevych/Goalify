import { NextPage } from "next"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react';
//Components
import SignUp from "../components/loginComponents/SignUp";
import LogIn from "../components/loginComponents/LogIn";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
//firebase
import { app, database } from "./index";
import { collection, addDoc, getFirestore,doc, getDoc, getDocs, Timestamp } from 'firebase/firestore';
import { Opacity, Translate } from "@mui/icons-material";

export type IUs = {
  email: string,
  username: string,
  password: string,
};

const Login: NextPage = () => {

  // Variables and hooks
  const [mode, setMode] = useState("sign up");

  const [curUser, setCurUser] = useState<IUs>({
    email: '',
    username: '',
    password: '',
  });
  const handleUserInfo = (userName: string, userValue: string) => {
    setCurUser({...curUser, [userName]: [userValue]});
  }

  // Database Connection
  const userCollection = collection(database, 'users');
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
    }
  }, [])

  //Database interaction - Adding new users
  const handleSignUp = async () => { 
      const docRef = await addDoc(collection(database, 'users'), {
        curUser,
        created: Timestamp.now()
      })
      console.log(docRef);
  }


  // New branch login-test created

  return (

    <div className="flex login-page-Bg h-screen">
      <title>Login</title>
      <div className="login-page pt-5 bg-gradient-to-t from-white to-[#FFF89A] rounded-xl">
        <div className=" grid">
          <h1><a href='/guest'>Vision</a></h1>
          <ButtonGroup className=" m-auto" variant="text" aria-label="outlined button group">
            <Button type="submit" onClick={() => {setMode("sign up"); setCurUser({email: '', username: '', password: ''})}}>Sign up</Button>
            <Button onClick={() => {setMode("log in"); setCurUser({email: '', username: '', password: ''})}}>Log in</Button>
          </ButtonGroup>
        </div>
        {mode === "sign up" ? <SignUp handleUserChange={handleUserInfo} userInfo={curUser} handleClick={handleSignUp} /> : <LogIn handleUserChange={handleUserInfo} userInfo={curUser} />}
      </div>
    </div>
  )
}


export default Login;