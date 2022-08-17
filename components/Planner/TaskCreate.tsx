import {SetStateAction, useState} from 'react';

//firebase import
import { app, database} from "../../firebase/clientAPP";
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const CreateTask : React.FC = () => {

    const [taskText, setTask] = useState<string>('');
    const [taskList, updateList] = useState<any[]>([]);

    const taskListCollection = collection(database, 'taskCollection');
    // console.log(taskListCollection);
    // const handleTaskChange = (event: { target: { value: SetStateAction<string>; }; }) => {
       
    //     // console.log(taskText);
    // }


    const handleNewTask = () => {
        //Update local list
        updateList(prevList => [...prevList, taskText]);
        //Update DB Collection list
        addDoc(taskListCollection, {name: taskText, 'taskCheck': false});

        setTask("");
        // console.log(taskList);
    }



    return (
         <div className="p-2" >
            <div id="sampleTask">
               <input className=" scale-200" type="checkbox" name="" id="" disabled />
               <input className=" p-2 m-4 w-5/6 bg-inherit" onChange={(e: React.FormEvent<HTMLInputElement>) =>  setTask(e.currentTarget.value)} value={taskText} type="text" name="" id="newTaskInput" placeholder="Add a new task"/>
               <button className=" py-2 px-4 hover:bg-zinc-300" type="button" onClick={handleNewTask}>Add</button>
            </div>
        </div>
    )
}

export default CreateTask;