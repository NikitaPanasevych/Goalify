import { NextPage } from "next"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Router from 'next/router';
import Head from 'next/head';
//Components
import ProjectCard from "../../components/projects/ProjectCard";
import Topbar from "../../components/Topbar";
import AddProject from "../../components/projects/AddProject";
//MUI
import AddIcon from '@mui/icons-material/Add';
//Firebase
import { auth } from "../../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import {database} from '../../firebase_config';
import {DocumentSnapshot, DocumentData, getDoc, doc} from "firebase/firestore";

const Projects : NextPage = () => {

    const [createMode, setCreateMode] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [projectData, setProjectData] = useState<{
        goal_id: string,
        project_id: string,
        project_desc?: string,
        project_title: string,
    }>()
    const [isAdded, setAdded] = useState(false);
    let projectsData: any

    useEffect(() => {
        if(loading) {console.log('loading');}
        if(!loading && !user) Router.push('/');
        if(!loading && user) getDoc(doc(database, "users", user.uid))
            .then((userData: DocumentSnapshot<DocumentData>) => {
                userData.data()?.goals.map((goalData: any) => {
                    let curGoal: {
                        goal_id: string,
                        project_id: string,
                        project_desc?: string,
                        project_title: string,
                    };
                    goalData.projects.map((prjData: any) => {
                        curGoal = {
                            goal_id: goalData.goal_id,
                            project_id: prjData.project_id,
                            project_desc: prjData?.project_desc,
                            project_title: prjData?.project_title
                        }
                        setProjectData({...projectData, curGoal})
                    })
                    
                })
            })
            .catch((error) => {
                console.log(error.code);
                alert('Error occured while fetching data... Thank you for your patience.');
            })
            setAdded(false);
    }, [user, loading, isAdded])

    //Initial commit for dynamic project routes
    return (
        <>
        <Head>
            <title>Projects</title>
        </Head>
        <Topbar />
        <div className="  h-screen Bg">
            <div className=" absolute  flex flex-wrap pt-28  pl-32 ">
                
                <h1 className=" absolute -translate-y-16 text-4xl text-white">Projects</h1>
                <>
                 { projectData.map((data:any) => <ProjectCard key={data.id} index={data.id} projectTitle={data.title} projectDesc={data.description} /> )}
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
                onClose = {() => setCreateMode(false)}
                onAdd = {() => setAdded(true)}
                />
            </motion.div>
            : 
            null}
        </div>
        </>
    )
}


export default Projects;