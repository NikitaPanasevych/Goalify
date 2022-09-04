import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc, doc, collection, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";

import Topbar from "../../components/Topbar";
import { auth, database,  } from '../../firebase_config';
import ProgressCircle from "../../components/ProgressCircles";



const Project: NextPage = () => {

    const router = useRouter();
    const goalId = router.query.goalId;
    const [goalInfo ,setGoalInfo] = useState<{title: string, description: string}>({
        title: '',
        description: '',
    })

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {console.log('loading');}
        if(user && typeof(goalId) === 'string') {
            const getData = async () => {
                const docSnap = await getDoc(doc(database, 'users', user?.uid, 'Goals', goalId));
                docSnap.exists() ?
                    setGoalInfo({
                        title: docSnap.data().title,
                        description: docSnap.data().description
                    }) : console.log('No document found');
            } 
            getData();
        }
        }, [loading, user])

    return (
        <>
        <Head>
            <title>Project - {goalInfo.title}</title>
        </Head>
        <div className=" h-screen Bg">
            <Topbar />
            <div className=" bg-black text-white grid w-[75%] h-[70%] ">
                <div className="block text-center m-4 text-2xl">{goalInfo.title}</div>
                <div className="m-2 text-1xl">{goalInfo.description}</div>
                <ProgressCircle />
            </div>
        </div>
        </>
    );
}

export default Project;