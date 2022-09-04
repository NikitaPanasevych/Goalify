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
            data.map((goal: any) => {
                // console.log(goal.goal_id)
            })
            })
        

        // updateUser();
    }, [user, loading]);

    //function to generate unique ids for projects
    //Specify 'ident' parameter: g - for goals, p - for project, t - tasks
    const generateUID = (ident?: string) => {
        const rndNum = Math.floor(Math.random()*(Math.random()*Date.now()));
        console.log(rndNum);
        console.log(ident + rndNum.toString(36));
    }
    generateUID('g');

    // Array type database
    const updateUser = () => {
        if(user) updateDoc(doc(database, 'users', user?.uid),{
            goals: [
                {   goal_id: 'asdfsd7f7asd7fasd6f',
                    goal_desc: 'Goal to test a new database',
                    projects: [ 
                        {   project_id: 'dfg6dfg5d5f6df6g',
                            project_desc: 'new project number 1',
                            project_tasks: [
                                {
                                    task_id: 'dfg7df7gd8fg8df8g',
                                    task_text: 'welcome to vision studio'
                                }
                            ]
                        },
                        {
                            project_id: 'sdfsd6fs5df6sdf',
                            project_desc: 'New project number 2'
                        }
                    ]
                },
                {   goal_id: 'asdasdjkaskjdasd',
                    goal_desc: 'Goal description',
                    projects: [
                        {   project_id: 'dfsd98fsg798s7dfsdf',
                            project_desc: 'new project number 2',
                            project_tasks: [
                                {
                                    task_id: 'sd4sd4fgh5f6dgh',
                                    task_text: 'welcome to vlad'
                                }
                            ]
                        },
                        {
                            project_id: 'dfgf98g90fghfg',
                            project_desc: 'New project number 5'
                        }
                    ]
                }
            ]
        });
        alert("user updated");
    };

    //Collection type database


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