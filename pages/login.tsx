import { NextPage } from "next"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {useEffect, useState} from 'react';

import { app, database} from "./index";
import { collection, addDoc, getFirestore , getDocs} from 'firebase/firestore';

const Login : NextPage = () => {


  // Variables and hooks
    const [user, setUser] = useState({
      username: '',
      password: ''
    });

    const [showPass, setPass] = useState(true);

    const userCollection = collection(database, 'users');
    console.log(userCollection);

    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(userCollection);
        
      }
    }, [])

    //Functions

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({...user, [e.target.name]: [e.target.value]});
    }

    const showPassword = () => {
      setPass(!showPass);
      const password = document.getElementById('user-password');
      showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
    }

    const showText = () => {

    }

    return (
        <div className="flex">
            <title>Login</title>
            <div className="login-page">
                    <h1><a href='/'>Vision</a></h1>
                    <p>Sign In</p>
                <div className="form" >
                  <input type="text" id="user-username" name="username" placeholder="Username or email" value={user.username} onChange={handleChange}/>
                  <div className="">
                    <input type="password" id="user-password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                    {showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword}/> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword}/>}
                  </div>
                  
                  <button type="button">Login</button>
                  <a href="">Forgot your password?</a>
                  <hr className="text-black" />

                </div>
            </div>
            
        </div>
    )
}


export default Login;