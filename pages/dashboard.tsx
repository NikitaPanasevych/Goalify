import { NextPage } from "next";
import Router from 'next/router';
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
//firebase
import { auth } from "../firebase_config";
import {  useAuthState } from "react-firebase-hooks/auth";
import { collection, deleteDoc, doc, QuerySnapshot, QueryDocumentSnapshot, onSnapshot} from "firebase/firestore";
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
            else if(!loading && user) onSnapshot( collection(database, "users", user?.uid, "Tasks"),
                (data : QuerySnapshot) => {
                setDBdata(data.docs.map((item: QueryDocumentSnapshot) => {
                    return { ...item.data(), id: item.id }
                }));
            })
        
        if(!loading && !user) Router.push('/'); 
        if(error) alert('Error: ' + error);
    }, [loading, user, error])

      const deleteTask = async (id:string) => {
        /*setDBdata(DBdata.filter((task:any)=>{
            return task.id !== id;
        }))*/
       await deleteDoc(doc(database, "users", user?.uid, "Tasks", id));
      }

    return(
       <>
        
        <div className=" w-screen h-screen Bg">
            <Topbar />
                { loading && !user ? 
                 <div className=" grid h-[80%]">
                    <Loading />
                 </div>
                :

                    <div className="grid grid-flow-col mt-2 h-[94%] overflow-scroll p-4 pr-10">
                            {DBdata.map((data:{id:string, TaskName:string})=><CarouselCard onDelete={deleteTask} id={data.id} projectTitle={data.TaskName} />)}
                            <AddNewTask />
                    </div>

                }

    
        </div>
        
        </>
    )
}

export default Dashboard;