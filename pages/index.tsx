import { NextPage } from "next"
import { Button } from "@mui/material"
<<<<<<< HEAD
import Home from "../components/Homepage/LoggedIn"
import GuestHome from "../components/Homepage/Guest"
//firebase
=======
import Guest from "./guest";
import Dashboard from "./home";
>>>>>>> f00d796c3bef48ce4d63395e2bd9f3b98d144dc2

const Homepage : NextPage = () => {

    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    var isRegistered : boolean = false;

    return(
<<<<<<< HEAD
        <>
            <GuestHome />
        </>
=======
        <div className="">
            <title>Vision</title>
            {isRegistered ? <Dashboard /> : <Guest />}
        </div>
>>>>>>> f00d796c3bef48ce4d63395e2bd9f3b98d144dc2
        
    )
}

export default Homepage;