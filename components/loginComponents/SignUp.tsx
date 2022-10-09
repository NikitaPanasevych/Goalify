import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { motion } from "framer-motion";

import {handleSignUp, continueWithGithub, continueWithGoogle} from '../../firebase_config'


const SignUp: React.FC = () => {
   
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPass] = useState<string>('');
  const [userUserName, setUserName] = useState<string>('');

  //Handle global user hook for user log in data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "email" ? setUserEmail(e.target.value) :
    e.target.name === "password" ? setUserPass(e.target.value) : setUserName(e.target.value);
  }

  //Handle password visibility
  const [showPass, setPass] = useState(false);
  const showPassword = () => {
    setPass(!showPass);
    const password = document.getElementById('user-password');
    !showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.key === "Enter") handleSignUp(userEmail, userPassword, userUserName);
  }

  // ----------------------------------------------------------------------------------------------------------------------------------------
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
      <div className=" h-[15rem] grid align-middle justify-center text-center mt-5 " >
          <div className=" m-auto mb-3">
            <TextField className=" mt-2 mb-2 w-[15em]" name="username" label="Username" onChange={handleChange} value={userUserName} variant="outlined" onKeyDown={handleKeyDown}/>
          </div>
          <div className=" m-auto mb-3">
            <TextField className=" mt-2 mb-2 w-[15em]" name="email" label="Email" onChange={handleChange} value={userEmail} variant="outlined" onKeyDown={handleKeyDown}/>
          </div>
          <div className="mt-1 mb-1 w-[15em]">
          <TextField className="w-[15em]" type="password" id="user-password" name="password" onChange={handleChange} value={userPassword} label="Password" variant="outlined" onKeyDown={handleKeyDown}/>
          {!showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword} /> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword} />}
        </div>
        <div className=" m-auto mt-4">
          <Button className=" w-40  ml-10" variant="contained"  onClick={() => handleSignUp(userEmail, userPassword, userUserName)} >Sign Up</Button>
        </div>
        <hr className="text-black mt-8 mb-3" />
      </div>
    </motion.div>
  )
}

export default SignUp;