import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ButtonGroup } from "@mui/material";
//firebase
import { app, database} from "../../firebase/clientAPP"
import { collection, addDoc, getFirestore } from 'firebase/firestore'




const Timer : React.FC<{quote : string}> = ({quote}) => {

    //variables

    
    //hooks
    const [started, setStarted] = useState(false)
    const [paused, setPaused] = useState(true)
    const [time, setTime] = useState(0)
    const [taskInputContent, setTaskInputContent] = useState("")
    const [taskTitle, setTaskTitle] = useState("")

    useEffect(()=>{
    let interval : any = null;
    paused === false ? 
      interval = setInterval(() => {setTime((time) => time + 10)} ,10) 
      : clearInterval(interval);
    return () => clearInterval(interval);
    },[paused, started])

    //variables
    
    const stopwatchDatabase = collection(database, "addTask" )
    var stopwatch : string = 
    ("0" + Math.floor((time / 3600000) % 60)).slice(-2)
     + ":" +  ("0" + Math.floor((time / 60000) % 60)).slice(-2)
     + ":" + ("0" + Math.floor((time / 1000) % 60)).slice(-2);

    //functions
    const saveTask = () => {
        addDoc(stopwatchDatabase, {
            taskTime : stopwatch,
            taskTitle : taskTitle
        })
        setStarted(false)
        setTime(0)
        setPaused(true)
        setTaskTitle("")
    }

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
            setTaskInputContent(event.target.value)
    }

    const handleTaskCreation = () => {
        setTaskTitle(taskInputContent)
        setTaskInputContent("")
    }


    return(
        <div className=" w-full text-center m-auto ">
            <h1 className=" text-6xl text-white relative bottom-5">{taskTitle}</h1>
            <h2 className=" text-white text-9xl">
                {stopwatch}
            </h2>
            <div className=" grid">
            {!started ?
                <TextField  multiline color="primary" onChange={handleChange} value={taskInputContent} className=" text-white mt-4 w-96 m-auto" size="medium" id="filled-basic" label="What are you doing this time?" variant="filled" />
                :
                <></>
                }
              {
              started ?
              <ButtonGroup variant="outlined" className=" w-64 m-auto mt-4" aria-label="outlined button group">
                  <Button className=" w-96" variant="contained" onClick={() => {setStarted(false), setTime(0), setPaused(true), setTaskTitle("")}} color="error" >Delete</Button>
                  {
                  paused === false ?
                  <Button className=" w-96" variant="contained" onClick={() => setPaused(true)} color="error" >Pause</Button>
                  :
                  <Button className=" w-96" variant="contained" onClick={() => {setPaused(false)}} color="error" >Continue</Button>
                  }                
                  <Button className=" w-96" variant="contained" onClick={saveTask} color="error" >Save</Button>
              </ButtonGroup>
                :
                <Button variant="contained" onClick={() => {
                    handleTaskCreation()
                    if(taskInputContent !== "") 
                    {
                        setStarted(true)
                        setPaused(false)
                    }
                    else
                    {
                        alert("Set task name")
                    }
                    }
                }  className=" w-64 m-auto mt-4">Start
                </Button>
              }
            </div>
            <h3 className=" text-white mt-4 text-2xl">{quote}</h3>
            <Button variant="text" className="mt-10" href="./stopwatch/tasks">View report</Button>
        </div>
        
    )
}

export default Timer;