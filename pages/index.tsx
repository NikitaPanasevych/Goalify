import { NextPage } from "next"
import { Button } from "@mui/material"
import Guest from "./guest";
import Dashboard from "./home";

const Homepage : NextPage = () => {

    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    var isRegistered : boolean = false;

    return(
        <div className="">
            <title>Vision</title>
            {isRegistered ? <Dashboard /> : <Guest />}
        </div>
        
    )
}

export default Homepage;