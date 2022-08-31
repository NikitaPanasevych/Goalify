import { NextPage } from "next"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
//Components
import ProjectCard from "../components/projects/ProjectCard";
import Topbar from "../components/Topbar";
import AddProject from "../components/projects/AddProject";
//MUI
import AddIcon from '@mui/icons-material/Add';
//Firebase
import { auth } from "../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import {database} from '../firebase_config';
import {getDocs, collection, CollectionReference,  QuerySnapshot, QueryDocumentSnapshot, DocumentData} from "firebase/firestore";

const Projects : NextPage = () => {

    const [createMode, setCreateMode] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const transition : any = user?.uid;
    const UID : string = transition
    const db : CollectionReference<DocumentData> = collection(database, "users", UID, "projects" )
    const [projectData, setProjectData] = useState([{}])

    useEffect(() => {
        getDocs(db)
            .then((data : QuerySnapshot) => {
                setProjectData(data.docs.map((item: QueryDocumentSnapshot) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }, [])
    

    return (
        <>
        <Topbar />
        <div className="  h-screen bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
            <div className=" absolute  flex flex-wrap pt-28  pl-32 ">
                
                <h1 className=" absolute -translate-y-16 text-4xl text-white">Projects</h1>
                 {projectData.map((data:any)=><ProjectCard projectTitle={data.title} projectDesc={data.description} />)}
                
            </div>
            <div onClick={()=>setCreateMode(true)} className=" flex justify-center items-center cursor-pointer opacity-[25%] text-white top-32 absolute right-10 rounded-lg w-48">
                New Project
            </div>
            
            {createMode ? 
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -50 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            >
                <AddProject
                onClose = {() =>setCreateMode(false)}
                />
            </motion.div>
            : 
            null}
        </div>
        </>
    )
}


export default Projects;