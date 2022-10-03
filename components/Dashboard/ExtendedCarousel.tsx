import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';


interface ISingleCard {
    title: string,
    text?: string,
    tasks?: Array<string>,
    addNewTask(taskData: ITaskData): void,
}

export interface ITaskData {
    text: string,
}

const Card: React.FC<ISingleCard> = (props) => {

    const [newTask, setNewTask] = useState('');
    const [taskData, setTaskData] = useState<ITaskData>({
        text: 'New task',
    })

    const handleClick = () => {
        const ref = document.getElementById('newTaskParagraph');
        props.addNewTask(taskData);
        // ref?.classList.remove('invisible');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskData({ ...taskData, [e.target.name]: [e.target.value] });
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // if(e.key === "Enter") //Add a props function which will lead to dashboard and add a new task
    }

    const [editVisibility, setEdit] = useState(true);
    const [saveVisibility, setSave] = useState(false);
    const handleEdit = () => {
        setEdit(!editVisibility);
        setSave(!saveVisibility);
    }

    const handleDelete = () => {
        alert('delete');
    }
    const handleSave = () => {
        setEdit(!editVisibility);
        setSave(!saveVisibility);
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
                        return (
                            <div id="individualTasksDiv" className="relative block rounded-3xl p-2 my-3 mx-[6em] text-2xl">
                                <>
                                    {editVisibility ? <>
                                        <p id="newTaskParagraph" className="absolute inline w-[100%] p-2 left-0 top-0 text-center rounded-3xl mx-0 text-2xl bg-[#B01030]">{taskData.text}</p>
                                        <EditIcon onClick={handleEdit} className="absolute right-[2.1em] top-[0.5em] hover:bg-slate-300/20 hover:rounded-xl hover:scale-150 hover:p-1" />
                                    </>
                                        : null}

                                    {saveVisibility ? <>
                                        <input id="newTaskInput" onChange={handleChange} name="text" value={taskData.text} onKeyDown={handleKeyDown} className="absolute inline w-[100%] p-2 left-0 top-0 text-center rounded-3xl mx-0 text-2xl bg-[#B01030]" type="text" placeholder='New task'></input>
                                        <AddCircleIcon onClick={handleSave} className="absolute right-[2.1em] top-[0.5em] hover:bg-slate-300/20 hover:rounded-xl hover:scale-150 hover:p-1" />
                                    </>
                                        : null}
                                    <DeleteIcon onClick={handleDelete} id="deleteIcon" className="absolute right-[0.6em] top-[0.5em] hover:bg-slate-300/20 hover:rounded-xl hover:scale-150 hover:p-1" />
                                </>
                            </div>
                        )
                    }) : null}
                    <p className="block rounded-3xl p-2 my-[4em] mx-[6em] text-2xl bg-[#10B090] hover:bg-[#0D8D73] hover:cursor-pointer" onClick={handleClick}>
                        Add a new task
                    </p>

                </div>
            </>
        </div>
    )
}

export default Card;