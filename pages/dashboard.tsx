import { NextPage } from "next";
import Router from 'next/router';
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { IconButton } from "@mui/material";
//firebase
import { auth } from "../firebase_config";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { onSnapshot, doc} from "firebase/firestore";
import { database } from "../firebase_config";
import CarouselCard from "../components/dashboard/Carousel";

const Dashboard : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [DBdata, setDBdata] = useState<any>({})

    useEffect(()  => {
        if(loading) {
            console.log('Initializing user...');   
        }
        if(user) onSnapshot(doc(database, "users", user.uid), (doc:any) => setDBdata(doc.data()));

        if(!loading && !user) Router.push('/'); 

        if(error) alert('Error: ' + error);
    }, [loading, user, error])



    return(
        <div className=" w-screen h-screen Bg">
            <Topbar />
            <div className="">
                <h1 className=" text-white mt-2 text-4xl text-center">
                    { 
                        DBdata.goals ? DBdata.goals[0].goal_desc : null 
                    }
                    
                    <IconButton aria-label="delete" color="primary">
                        <ChangeCircleIcon />
                    </IconButton>
                    </h1>
                <div className="flex mt-2 overflow-x-hidden h-48 pt-4">
                    { 
                        DBdata.goals ? DBdata.goals[0].projects.map((data:any)=><CarouselCard key={data.project_id} projectTitle={data.project_desc}  />) : null
                    }
                </div>
                </div>
        </div>
    )
}

export default Dashboard;