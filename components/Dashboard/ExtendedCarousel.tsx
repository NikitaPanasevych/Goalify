import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface ISingleCard{
    title: string,
    text?: string,
    tasks?: Array<string>,

}

const Card : React.FC<ISingleCard> = (props) => {

    const [newTask, setNewTask] = useState('');
    const addNewTask = (taskText: string) => {

    }

    const handleClick = () => {
        const ref = document.getElementById('newTaskBox');
        ref?.classList.remove('invisible');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // if(e.key === "Enter") //Add a props function which will lead to dashboard and add a new task
      }
  

    useEffect(() => {

    }, props.tasks)

    return (
        <div id="tasksCard" className="text-white" >
            <>
            <h1 className="p-2 pt-5 font-bold text-5xl">{props.title}</h1>
            <h1 className="p-2 text-2xl">{props.text}</h1>
            <hr />
            <div className="p-1">
                {props.tasks ? props.tasks.map((task) => {
                    return(
                    <p className="block rounded-3xl p-2 my-3 mx-[6em] text-2xl bg-[#B01030] hover:bg-[#A50F2D] hover:cursor-default">{task}</p>
                    )
            }) : null}
                <input onChange={handleChange} value={newTask} onKeyDown={handleKeyDown} id="newTaskBox" className="invisible block w-[74%] text-center rounded-3xl px-4 py-2 my-3 mx-[6em] text-2xl bg-[#B01030] hover:bg-[#A50F2D] hover:cursor-default" type="text" placeholder='New task'></input>
                <p className="block rounded-3xl p-2 my-[2em] mx-[6em] text-2xl bg-[#10B090] hover:bg-[#0D8D73] hover:cursor-pointer" onClick={handleClick}>
                    Add a new task
                </p>
                
            </div>
            </>
        </div>
    )   
}

export default Card;