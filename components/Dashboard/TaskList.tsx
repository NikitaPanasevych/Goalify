import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

interface ITaskList{
    taskName: string,
    id: string,
    onDelete(id: string): void
}

const Task: React.FC<ITaskList> = (props) => {

    const handleClick = () => {
        const docRef = document.getElementById(props.id);
        docRef?.classList.toggle('line-through');
        let timeoutID;
        if(docRef?.classList.contains('line-through')) {
            timeoutID = setTimeout(handleDelete, 5000);
        } else clearTimeout(timeoutID);
        
    }
    const handleDelete = (): void => {
        props.onDelete(props.id)
    }
    return (
        <>
        <div className="relative bg-sky-600 rounded-xl mb-1">
            <h1 title='Complete task' id={props.id} className="inline  px-2 hover:cursor-pointer" onClick={handleClick}>{props.taskName}</h1>
            <EditIcon titleAccess='Edit task' className="inline absolute right-2 hover:cursor-pointer p-1 hover:bg-slate-300/20 hover:rounded-xl" />
        </div>
        </>
    );
}

export default Task;