import { NextPage } from "next"
import {useState, useEffect} from 'react';
import Router from 'next/router';
import Dashboard from "./dashboard";
import Homepage from "../components/Homepage";
import {auth} from '../firebase_config';
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {userID} from './login';
import Logo from "../components/logoLoading"
import { Button } from "@mui/material"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import IconButton from "@mui/material/IconButton";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import Loading from "../components/Loading";



const Home : NextPage = () => {

    const [load, setLoad] = useState(true)
    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    const [user, loading, error] = useAuthState(auth);
    //Attaching the observer for authentication

    // const [isRegistered, setRegistration] = useState<boolean>(false);
    // onAuthStateChanged(auth, (user) => {
    //     if(user) setRegistration(true);
    //     else setRegistration(false);
    // })

    useEffect(() => {

        if(loading) {console.log('loading');}
        if(!loading && !user) Router.push('/');
        if(!loading && user) Router.push('/dashboard');
        if(error) console.log(error.message);
        
    }, [user, loading, error]);

    return(
        <>
        {loading ? <Loading />
         : 
         <Homepage />}

        </>
       
        
    )
}

export default Home;