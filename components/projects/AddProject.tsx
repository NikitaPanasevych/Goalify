import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
//firebase
import { app, database} from "../../firebase_config"
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useState } from "react";



const AddProject : React.FC<any> = (props) => {

    const [projectData, setProjectData] = useState({})

    const handleClose = () => {
        props.onClose()
    }

    const saveProject = async () => {
        await addDoc(collection(database, "projects" ), {projectName: "Initial2"} )
        alert("AAAAA")
    }

    return(
        <div className=" fixed left-0 w-screen h-screen">
            <div className=" w-[60%] h-[80%] text-center  bg-white m-auto rounded-lg">
                <h1 className=" text-4xl pt-3">Create New Project</h1>
                <div className=" grid w-[50%] h-[50%] m-auto mt-5">
                <TextField className=" pt-5" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className=" pt-5" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className=" pt-5" id="outlined-basic" label="Outlined" variant="outlined" />
                <Button onClick={saveProject} variant="outlined">Outlined</Button>
                </div>
                <IconButton  size="large" onClick={handleClose} className=" absolute translate-x-72 -translate-y-12">
                    <CloseIcon></CloseIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default AddProject;