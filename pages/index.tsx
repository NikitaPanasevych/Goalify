import { NextPage } from "next"
import { Button } from "@mui/material"
import Home from "../components/Homepage/LoggedIn"
import GuestHome from "../components/Homepage/Guest"
//firebase



const Homepage : NextPage = () => {
    return(
        <>
            <GuestHome />
        </>
        
    )
}

export default Homepage