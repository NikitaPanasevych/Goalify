import { NextPage } from "next";
//Firebase
import { auth } from "../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import {database} from '../firebase_config';
import {getDoc, collection, doc, onSnapshot, CollectionReference,  QuerySnapshot, QueryDocumentSnapshot, DocumentData, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";



const test = () => {
 

    const unsub = onSnapshot(doc(database, "users", "wGlHxp1UVcTAQWCTnMxH3t2mAxM2"), (doc) => {
        console.log(doc.data().goals);
    });
 
 
    return(
        <div className=" Bg w-screen h-screen">

        </div>
    )
}

export default test;