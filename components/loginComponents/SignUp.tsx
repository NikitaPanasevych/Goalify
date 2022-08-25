import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { motion } from "framer-motion";
import IUser from '../../pages/login';

interface ISignup {
  handleUserData(newUser: typeof IUser): void;
}

const SignUp: React.FC<ISignup> = (props) => {
  
  //Handle user change and hook state
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  }


  //Handle password visibility
  const [showPass, setPass] = useState(false);
  const showPassword = () => {
    setPass(!showPass);
    const password = document.getElementById('user-password');
    !showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
  }


  const handleSignUp = () => {

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
      <div className=" h-[15rem] grid align-middle justify-center text-center mt-5" >
        <TextField className="m-1 w-[15em]" id="outlined-basic" name="username" label="Username" onChange={handleChange} value={user.username} variant="outlined" />
        <TextField className="m-1 w-[15em]" id="outlined-basic" name="email" label="Email" onChange={handleChange} value={user.email} variant="outlined" />
        <div className="m-1 w-[15em]">
          <TextField className="w-[15em]" type="password" name="password" id="user-password" onChange={handleChange} label="Password" variant="outlined" />
          {!showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword} /> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword} />}
        </div>
        <div className=" grid">
          <Button className=" w-40 m-auto mt-5" variant="outlined" onClick={handleSignUp}>Sign Up</Button>
        </div>
        <a href="" className=" mt-5">Forgot your password?</a>
        <hr className="text-black" />
      </div>
    </motion.div>
  )
}

export default SignUp;