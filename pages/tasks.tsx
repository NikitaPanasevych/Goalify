import { NextPage } from "next"

import {auth, database} from '../firebase_config'
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

const Tasks : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        loading ? console.log('Loading page') :
        user ? () => {
            const result = getDocs(collection(database, 'users', user?.uid, 'goals'));
        } : console.log('No user found');
    }, [user, loading])

    //Starting the creation of tasks page
    return (
        <div>
            <h1>This is a Tasks page.</h1>
        </div>
    )
}

export default Tasks;