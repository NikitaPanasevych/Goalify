import { NextPage } from "next"
import Head from 'next/head';


import {auth, database} from '../firebase_config'
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react";
import { getDocs, collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

import Topbar from "../components/Topbar";

const Tasks : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        
        loading ? console.log('Loading page') : null;
        // user ? getDocs(collection(database, 'users', user.uid, 'Goals'))
        //         .then((result) => {
        //             result.docs.map((item) => {
        //                 getDocs(collection(database,'users', user.uid, 'Goals', item.id, 'Projects'))
        //                 .then((projectResult) => {
        //                     projectResult.docs.map((project) => {
        //                         getDocs(collection(database, 'users', user.uid, 'Goals', item.id, 'Projects', project.id, 'Tasks'))
        //                         .then((tasksResult) => {
        //                             // console.log(tasksResult.docs);
        //                         })
        //                     })
        //                 }) 
        //             })
        //         })
        //         .catch((error) => {
        //             console.log(error.code);
        //         })
        // : console.log('No user found');

        if(user) getDoc(doc(database, 'users', user.uid))
        .then((userData) => {
            const data = userData.data()?.goals;
            console.log(data);
            })

        // updateUser();
    }, [user, loading]);

    const updateUser = () => {
        if(user) updateDoc(doc(database, 'users', user?.uid),{
            goals: {
                asdfsd7f7asd7fasd6f: {
                    goal_id: 'asdfsd7f7asd7fasd6f',
                    goal_desc: 'Goal to test a new database',
                    goal_projects: {
                        dfg6dfg5d5f6df6g: {
                            project_id: 'dfg6dfg5d5f6df6g',
                            project_desc: 'new project number 1',
                            project_tasks: {
                                dfg7df7gd8fg8df8g: {
                                    task_id: 'dfg7df7gd8fg8df8g',
                                    task_text: 'welcome to vision studio'
                                }
                            }
                        },
                        sdfsd6fs5df6sdf: {
                            project_id: 'sdfsd6fs5df6sdf',
                            project_desc: 'New project number 2'
                        }
                    }
                }
            }
        });
        alert("user updated");
    };

    //Starting the creation of tasks page
    return (
        <>
        <Head>
            <title>Tasks - {user?.displayName}</title>
        </Head>
            <Topbar />
            <h1>This is a Tasks page.</h1>
        </>
    )
}

export default Tasks;