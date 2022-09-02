import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
//firebase
import { auth, database} from "../../firebase_config"
import { collection, addDoc, CollectionReference, DocumentData } from 'firebase/firestore'
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


interface IGoals{
    onClose: () => void;
    onAdd: () => void;
}

interface IGoalData {
    title: string,
    description: string
}

const AddGoal : React.FC<IGoals> = (props) => {

    const [user, loading, error] = useAuthState(auth);
    const transition : any = user?.uid;
    const UID : string = transition
    const db : CollectionReference<DocumentData> = collection(database, "users", UID, "Goals" )
    const [goalData, setGoalData] = useState<IGoalData>({
        title: '',
        description: ''
    })

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGoalData({...goalData, [e.target.name]: e.target.value})
    }

    const saveGoal = async () => {
        await addDoc(db, goalData );
        alert("success");
    }

    return(
        <div className=" fixed left-0 w-screen h-screen">
            <div className=" w-[60%] h-[80%] text-center  bg-white m-auto rounded-lg">
                <h1 className=" text-4xl pt-3">Create New Goal</h1>
                <div className=" grid w-[50%] h-[50%] m-auto mt-5">
                <TextField className=" pt-5" id="outlined-basic" onChange={handleData} name="title" value={goalData.title} label="Project title" variant="outlined" />
                <TextField className=" pt-5" id="outlined-basic" onChange={handleData} name="description" value={goalData.description} label="Project description" variant="outlined" />
                <Button onClick={() => {saveGoal(),props.onClose();props.onAdd();}} variant="outlined">Save Project</Button>
                </div>
                <IconButton  size="large" onClick={props.onClose} className=" absolute translate-x-72 -translate-y-12">
                    <CloseIcon></CloseIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default AddGoal;