import { NextPage } from "next"
import { Button } from "@mui/material"
//firebase



const Homepage : NextPage = () => {
    return(
        <div className=" Background text-6xl grid justify-center">
            <div className=" text-6xl grid justify-center">
                <a>Home</a>
            </div>
            <div className=" text-6xl grid text-center">
                <a href="./stopwatch">Stopwatch</a>
            </div>
            <div className=" text-6xl grid text-center">
                <a href="./planner">Planner</a>
            </div>
            <Button variant="text">Sign In</Button>
        </div>
        
    )
}

export default Homepage