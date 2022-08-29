import { NextPage } from "next"
import Guest from "./guest";
import Dashboard from "./home";
import {auth} from '../firebase_config';
import { onAuthStateChanged } from "firebase/auth";

const Homepage : NextPage = () => {

    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    let isRegistered : boolean = false;
    onAuthStateChanged(auth, (user) => {
        if(user) {
            const uid = user.uid;
            isRegistered = true;
        }
        else isRegistered = false;
    })

    return(

        <div className="">
            <title>Vision</title>
            {isRegistered ? <Dashboard /> : <Guest />}
        </div>

        
    )
}

export default Homepage;