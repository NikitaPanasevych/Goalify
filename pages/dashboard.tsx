import { NextPage } from "next";
import Router from 'next/router';
import { useEffect } from "react";
import Topbar from "../components/Topbar";

import { auth } from "../firebase_config";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { database } from "../firebase_config";

const Dashboard: NextPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const fetchUserData = async () => {
        try {
            const q = query(collection(database, 'users'), where('userID', '==', user?.uid))
        } catch(err) {
            console.error(err);
            alert("error occured while fetching data")
        }
    }

    useEffect(() => {
        if(loading) return;
        if(!user) Router.push('/');
        if(user) Router.push('/dashboard');
        fetchUserData();
    }, [loading, user])

    return(
        <div className=" w-screen h-screen bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
            <Topbar />
            <div>
                <h1>Welcome, {user?.displayName}</h1>
            </div>
        </div>
    )
}

export default Dashboard;