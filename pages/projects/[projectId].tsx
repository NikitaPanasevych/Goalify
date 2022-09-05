import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc, doc, collection, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";

import Topbar from "../../components/Topbar";
import { auth, database,  } from '../../firebase_config';



const Project: NextPage = () => {

    const router = useRouter();
    const projectId = router.query.projectId;
    const [projectInfo,setProjectInfo] = useState<{title: string, description: string}>({
        title: '',
        description: '',
    })

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {console.log('loading');}
        if(user && typeof(projectId) === 'string') {
            const getData = async () => {
                const docSnap = await getDoc(doc(database, 'users', user?.uid, 'projects', projectId));
                docSnap.exists() ?
                    setProjectInfo({
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
            <title>Project - {projectInfo.title}</title>
        </Head>
        <Topbar />
        <div>
            <h1 className="block text-center m-4 text-2xl">Information about the {projectId}</h1>
            <h2 className="m-2 text-3xl font-bold">{projectInfo.title}</h2>
            <h5 className="m-2 text-1xl">{projectInfo.description}</h5>
        </div>
        </>
    );
}

export default Project;