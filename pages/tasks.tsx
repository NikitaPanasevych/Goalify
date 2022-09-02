import { NextPage } from "next"
import Head from "next/head";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Topbar from "../components/Topbar";
import { auth } from "../firebase_config";

const Tasks : NextPage = () => {

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if(loading) {console.log('loading'); return;}
        else if(user) console.log('finished page load');
    }, [loading, user])

    return (
        <div>
            <Head>
                <title>Tasks - {user?.displayName}</title>
            </Head>
            <Topbar />
            <h1>This is a Tasks page.</h1>
        </div>
    )
}

export default Tasks;