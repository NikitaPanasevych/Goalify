import { NextPage } from "next";
import Router from 'next/router';
import { useEffect, useState } from "react";
import Head from "next/head";

//firebase
import { auth } from "../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, QuerySnapshot, QueryDocumentSnapshot, onSnapshot, CollectionReference, DocumentData, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase_config";

//custom templates
import Topbar from "../components/Topbar";
import CarouselCard from "../components/Dashboard/Carousel";
import Loading from "../components/Loading";
import AddNewProject from "../components/Dashboard/AddNewProject";
import { IProject } from "../components/Dashboard/AddNewProject";

const Dashboard: NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [DBdata, setDBdata] = useState<any>([]);
    const [isUpdated, setUpdate] = useState(false);
    let db: CollectionReference<DocumentData>;
    const [offlineDB, setOfflineDB] = useState<any>([]);

    useEffect(() => { 
        if (!loading && user) {
            db = collection(database, "users", user.uid, "Projects");
            onSnapshot(db, (data: QuerySnapshot) => {
                    setDBdata(data.docs.map((item: QueryDocumentSnapshot) => {
                        return { ...item.data(), id: item.id }
                    }));
            });
        }
        if (!loading && !user) Router.push('/');
        if (error) alert('Error: ' + error);
        console.log('new useEffect instance');
    }, [loading, user, error, isUpdated]);   

    const addProject = (projectData: IProject) => {
        user ? addDoc(collection(database, 'users', user.uid, 'Projects'), {
            project_title: String(projectData.project_title),
        }) : null;
        setUpdate(!isUpdated);
    }

    return (
        <>
        <Head>
            <title>Dashboard</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            
            <div className=" w-screen h-screen Bg">
                <Topbar />
                {loading && !user ?
                    <div className=" grid h-[80%]">
                        <Loading />
                    </div>
                    :
                    <div className="grid grid-flow-col overflow-x-auto mt-2 h-[94%] p-4 pr-10">
                        {DBdata.map((data: { id: string, project_title: string }, index:number) =>
                            <CarouselCard id={data.id} key={index} projectTitle={data.project_title} />
                        )}
                        <AddNewProject onSave={addProject} />
                    </div>
                }
            </div>
        </>
    )
}

export default Dashboard;