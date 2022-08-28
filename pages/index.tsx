import { NextPage } from "next"
import Guest from "./guest";
import Dashboard from "./home";

const Homepage : NextPage = () => {

    // Boolean variable to check if user cookies are registered in order to display Dashboard or Guest page 
    var isRegistered : boolean = true;

    return(

        <div className="">
            <title>Vision</title>
            {isRegistered ? <Dashboard /> : <Guest />}
        </div>

        
    )
}

export default Homepage;