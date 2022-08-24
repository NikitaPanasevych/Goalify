import { NextPage } from "next"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {useState} from 'react';

const Login : NextPage = () => {

    const [user, setUser] = useState({
      username: '',
      password: ''
    });

    const [showPass, setPass] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({...user, [e.target.name]: [e.target.value]});
    }

    const showPassword = () => {
      setPass(!showPass);
      const password = document.getElementById('user-password');
      showPass ? password?.setAttribute('type', 'text') : password?.setAttribute('type', 'password');
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
                    {showPass ? <VisibilityIcon className="visibilityOn" onClick={showPassword} /> : <VisibilityOffIcon className="visibilityOff" onClick={showPassword} />}
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