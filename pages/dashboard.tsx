import { NextPage } from "next";
import Router from 'next/router';
import { useEffect, useState } from "react";

//firebase
import { auth } from "../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, deleteDoc, doc, QuerySnapshot, QueryDocumentSnapshot, onSnapshot, CollectionReference, DocumentData, addDoc } from "firebase/firestore";
import { database } from "../firebase_config";

//custom templates
import Topbar from "../components/Topbar";
import CarouselCard from "../components/Dashboard/Carousel";
import Loading from "../components/Loading";
import AddNewProject from "../components/Dashboard/AddNewProject";
import { IProject } from "../components/Dashboard/AddNewProject";
import { ITaskData } from "../components/Dashboard/ExtendedCarousel";

const Dashboard: NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [DBdata, setDBdata] = useState<any>([]);
    const [isUpdated, setUpdate] = useState(false);
    let db: CollectionReference<DocumentData>;

    useEffect(() => {
        if (loading) { console.log('loading'); }
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

    //Project database functions
    const deleteProject = async (id: string) => {
        await (user ? deleteDoc(doc(database, "users", user.uid, "Projects", id)) : null);
    }

    const addProject = (projectData: IProject) => {
        user ? addDoc(collection(database, 'users', user.uid, 'Projects'), projectData) : null;
        setUpdate(!isUpdated);
    }

    const closeAllProjects = () => {
        // DBdata.map((item) => )
    }

    //Task database functions
    const addNewTask = (taskData: ITaskData) => {
        //Update the task information in the database
        user ? addDoc(collection(database, 'users', user.uid, 'Projects', project_id, 'Tasks'), {taskData}) : null;

    }

    return (
        <>
            <title>Dashboard</title>
            <div className=" w-screen h-screen Bg">
                <Topbar />
                {loading && !user ?
                    <div className=" grid h-[80%]">
                        <Loading />
                    </div>
                    :

                    <div className="grid grid-flow-col mt-2 h-[94%] overflow-scroll p-4 pr-10">
                        {DBdata.map((data: { id: string, project_title: string }) => <CarouselCard addNewTask={addNewTask} onDelete={deleteProject} id={data.id} projectTitle={data.project_title} />)}
                        <AddNewProject onSave={addProject} />
                    </div>
                }
            </div>
        </>
    )
}

export default Dashboard;