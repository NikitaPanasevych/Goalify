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
import {database, app} from '../firebase_config';
import {getDocs, collection} from "firebase/firestore";

const Projects : NextPage = () => {

    const [createMode, setCreateMode] = useState(false);
    const [projectVisibility, setProjectVisiblity] = useState(false);
    const [loadState, setLoad] = useState(false);
    let projectsData: {
        id: string,
        title: string,
        description: string,
        progress: number
    }[] = [{id: 'asdsdfsdfsdf', title: 'text test', description:'new test', progress: 5}];

    const getProjectsData = async () => {
        const querySnapshot = await getDocs(collection(database, 'projects'));
        querySnapshot.forEach((doc) => {
            projectsData.push({
                id: doc.id,
                title: doc.data().title[0],
                description: doc.data().description[0],
                progress: +(doc.data().progress[0]),
           })
        })
        setLoad(true);
    };
    getProjectsData();

    console.log("refreshed");
    return (
        <>
        <Topbar />
        <div className="  h-screen bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
            <div className=" absolute  flex flex-wrap pt-28  pl-32  bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
                <>
                <h1 className=" absolute -translate-y-16 text-4xl text-white">Projects</h1>
                {/* {loadState ? console.log(projectsData) : null} */}

                {/* projectsData.forEach does not display every document tho it is already in the array and should be visible */}
                {loadState ? projectsData.forEach(doc => {
                    <ProjectCard projectTitle={doc.title} projectDesc={doc.description} projectProgress={doc.progress} />
                }) : <h1>Loading projects</h1>}
                <ProjectCard projectTitle="Project #1" projectDesc="Project description" projectProgress='5' />
               </>
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