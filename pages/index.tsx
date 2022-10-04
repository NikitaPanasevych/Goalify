import { NextPage } from "next"
import { useEffect} from 'react';
import Router from 'next/router';
import Homepage from "../components/Homepage";
import {auth} from '../firebase_config';
import { useAuthState } from "react-firebase-hooks/auth";
import Load from "../components/Loading";



const Home : NextPage = () => {

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
        <title>GOALIFY</title>
        {loading ? 
        <Load /> :
         <Homepage />}
        </>
       
        
    )
}

export default Home;