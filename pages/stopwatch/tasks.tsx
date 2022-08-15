import { NextPage } from "next";
import { useEffect, useState } from "react";
//firebase
import { app, database} from "../../firebase/clientAPP"
import { collection, addDoc, getDocs } from 'firebase/firestore';
//components 
import Card from "../../components/Stopwatch/Card";
import { TextField } from "@mui/material";



const TasksReport : NextPage = () =>{

    const db = collection(database, "addTask" )

    const [taskData, setTaskData] = useState([{}])

    useEffect(() => {
        getDocs(db)
            .then((data) => {
                setTaskData(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }, [])
    

    return(
        <div className=" bg-[#293462] min-h-screen relative grid">
            <div className=" h-36 bg-[#D61C4E] flex items-center justify-center">
                <a className=" absolute left-10 text-5xl" href="../">Chrono</a>
                <TextField className=" w-[40%] text-white" id="outlined-basic" label="Search..." variant="outlined" />
            </div>
            <h1 className=" flex items-center justify-center text-4xl hover:cursor-pointer">Projects: { taskData.length }</h1>
            <div className=" flex flex-wrap m-auto mb-80 w-[85%]">
                
               {taskData.map((data : any) =>
                <Card
                taskTime={data.taskTime}
                taskTitle={data.taskTitle}
                />
               )}
            </div> 
            
        </div>
    )
}

export default TasksReport;