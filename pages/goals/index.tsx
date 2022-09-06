import { NextPage } from "next"
import Router from "next/router";
import GoalCard from "../../components/goals/goalCard";
import Topbar from "../../components/Topbar";
import { useEffect, useState } from "react";
import AddGoal from "../../components/goals/AddGoal";
import { motion } from "framer-motion";
//Firebase
import { auth } from "../../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import {database} from '../../firebase_config';
import {getDoc, doc, collection, DocumentData, DocumentSnapshot} from "firebase/firestore";


const Goals : NextPage = () => {

    const [createMode, setCreateMode] = useState(false);
    const [isAdded, setAdded] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [goalData, setGoalData] = useState([{}])

    useEffect(() => {
        if(loading) {console.log('loading');}
        if(!loading && !user) Router.push('/');
        if(!loading && user) getDoc(doc(database, "users", user.uid))
            .then((userData: DocumentSnapshot<DocumentData>) => {
                setGoalData(userData.data()?.goals);
                })
            .catch((error) => {
                console.log(error.code);
                alert('Error occured while fetching data... Thank you for your patience.');
            })
            setAdded(false);
            console.log(goalData);
            
    }, [user, loading, isAdded])

    return (
        <div className=" h-screen bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
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
                <AddGoal
                onClose = {() => setCreateMode(false)}
                onAdd = {() => setAdded(true)}
                />
            </motion.div>
            : 
            <></>}
            <Topbar />
            <div className="grid bg-gradient-to-tr from-[#354259] to-[#3F1C1C] pt-16 ">
            { goalData.map((data: any) => <GoalCard key={data?.goal_id} index={data?.goal_id} goalTitle={data?.goal_title} goalDescr={data?.goal_desc} /> )}
            </div>
            <div onClick={()=>setCreateMode(true)} className=" flex justify-center items-center cursor-pointer opacity-[25%] text-white top-32 absolute right-10 rounded-lg w-48">
                New Goal
            </div>
            
        </div>
    )
}


export default Goals;