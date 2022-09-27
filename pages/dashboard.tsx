import { NextPage } from "next";
import Router from 'next/router';
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
//firebase
import { auth } from "../firebase_config";
import {  useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, QuerySnapshot, QueryDocumentSnapshot} from "firebase/firestore";
import { database } from "../firebase_config";
import CarouselCard from "../components/Dashboard/Carousel";
import Loading from "../components/Loading";
import AddNewTask from "../components/Dashboard/AddNewTaskCard";

const Dashboard : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [DBdata, setDBdata] = useState<any>([]);

    useEffect(()  => {
        if(loading) {console.log('loading');}
        else if(!user) {return}  
        else if(!loading && user) getDocs(collection(database, "users", user?.uid, "Tasks" ))
            .then((data : QuerySnapshot) => {
                setDBdata(data.docs.map((item: QueryDocumentSnapshot) => {
                    return { ...item.data(), id: item.id }
                }));
            })
        
        if(!loading && !user) Router.push('/'); 
        if(error) alert('Error: ' + error);
    }, [loading, user, error])



    return(
       <>
        
        <div className=" w-screen h-screen Bg">
            <Topbar />
                { loading && !user ? 
                 <div className=" grid h-[80%]">
                    <Loading />
                 </div>
                :
                <div>
                    <div className="flex mt-2 overflow-x-hidden h-48 p-4">
                            {DBdata.map((data:any)=><CarouselCard key={data.id} projectTitle={data.TaskName} />)}
                            <AddNewTask />
                    </div>
                </div>
                }

    
        </div>
        
        </>
    )
}

export default Dashboard;