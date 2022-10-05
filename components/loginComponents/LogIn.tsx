/* Notes for future development
 - Add a loading circle when login button pressed to avoid long wait times with no changes, and to account for time needed to reroute
*/

import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { motion } from "framer-motion";

import { signInWithEmail } from "../../firebase_config";
import { eventNames } from "process";

interface KeyboardEvent {
  key: string
}

const LogIn: React.FC = () => {

  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPass] = useState<string>('');
  const [loading, setLoading] = useState(false);

  //Handle global user hook for user log in data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "email" ? setUserEmail(e.target.value) : setUserPass(e.target.value);
  }
  //Password visiblity function
  const [showPass, setPass] = useState(false);
  const showPassword = () => {
    setPass(!showPass);
    const password = document.getElementById('user-password');
    !showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
  }

  const handleSignIn = () => {
    signInWithEmail(userEmail, userPassword);
    setLoading(true);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleSignIn();
  }
return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -50 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <div className=" h-[15rem] grid align-middle justify-center text-center mt-5" >
        <TextField className="w-[15em]" id="userEmail" name="email" label="Email" onChange={handleChange} value={userEmail} variant="outlined" onKeyDown={handleKeyDown} />
        <div className="w-[15em]">
          <TextField type="password" className="w-[15em]" name="password" id="user-password" label="Password" onChange={handleChange} value={userPassword} variant="outlined" onKeyDown={handleKeyDown} />
          {!showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword} /> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword} />}
        </div>
        <div className=" grid">
          <Button className=" w-40 m-auto mt-5" variant="outlined" onClick={handleSignIn}>Log In</Button>
        </div>
        <a href="" className=" mt-5">Forgot your password?</a>
        <hr className="text-black" />
      </div>
    </motion.div>
  )
}

export default LogIn;