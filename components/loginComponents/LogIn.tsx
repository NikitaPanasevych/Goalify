import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { motion } from "framer-motion";
import {IUs} from '../../pages/login';

interface ILogin {
  handleUserChange(userName: string, userValue: string): void;
  userInfo: IUs;
}

const LogIn: React.FC<ILogin> = (props) => {

  //Handle the visibility of password
  const [showPass, setPass] = useState(false);
  const showPassword = () => {
    setPass(!showPass);
    const password = document.getElementById('user-password');
    !showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
  }

  //Handle global user hook for user log in data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleUserChange(e.target.name, e.target.value);
  }

  const handleLogIn = () => {

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
        <TextField className="w-[15em]" id="outlined-basic" name="username" label="Username" onChange={handleChange} value={props.userInfo.username} variant="outlined" />
        <div className="w-[15em]">
          <TextField type="password" className="w-[15em]" name="password" id="user-password" label="Password" onChange={handleChange} value={props.userInfo.password} variant="outlined" />
          {!showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword} /> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword} />}
        </div>
        <div className=" grid">
          <Button className=" w-40 m-auto mt-5" variant="outlined" onClick={handleLogIn}>Log In</Button>
        </div>
        <a href="" className=" mt-5">Forgot your password?</a>
        <hr className="text-black" />
      </div>
    </motion.div>
  )
}

export default LogIn;