import { NextPage } from "next"
import Home from "./home";
import Dashboard from "./Dashboard";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
});
export const database = getFirestore(app);

const Homepage : NextPage = () => {

    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    var isRegistered : boolean = true;

    return(

        <div className="">
            <title>Vision</title>
            {isRegistered ? <Dashboard /> : <Home />}
        </div>

        
    )
}

export default Homepage;