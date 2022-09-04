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
import CarouselCard from "../components/Dashboard/Carousel";

const Dashboard : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [DBdata, setDBdata] = useState<any>({})

    useEffect(()  => {
        if(loading) return;
        if(!user) Router.push('/');
        if(user) Router.push('/dashboard');
        if (user || !loading) {
            onSnapshot(doc(database, "users", "CoW7s3hApYcLnl6H5BqZgHvQ56d2"/*user?.uid  треба шоб не було undefined*/), (doc:any) => {
                    setDBdata(doc.data())})}
        console.log(DBdata);
    }, [loading, user])



    return(
        <div className=" w-screen h-screen Bg">
            <Topbar />
            <div className="">
                <h1 className=" text-white mt-2 text-4xl text-center">
                    {/*DBdata.goals[0].goal_desc*/}
                    <IconButton aria-label="delete" color="primary">
                        <ChangeCircleIcon />
                    </IconButton>
                    </h1>
                <div className="flex mt-2 overflow-x-hidden h-48 pt-4">
                    {/*DBdata.goals[0].projects.map((data:any)=><CarouselCard projectTitle={data.project_desc} key={data.id} />)*/}
                </div>
                </div>
        </div>
    )
}

export default Dashboard;