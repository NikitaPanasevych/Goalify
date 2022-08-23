import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { app, database} from "../../../firebase/clientAPP";
import { collection, addDoc, getFirestore , getDocs} from 'firebase/firestore';


//components
import CreateTask from '../../Planner/TaskCreate';
import TaskList from '../../Planner/TaskList';

const Planner : NextPage = () => {

    // Set up a database fetch data for usernames
// Just adding a comment to check a new comit from a branch
    const username = 'Vlad';

    const [tasks, setTasks] = useState<any[]>([]);

    const taskListCollection = collection(database, 'taskCollection');

    useEffect(()=> {
        const getTasks = async () => {
            const data = await getDocs(taskListCollection);
            setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getTasks();
    }, [tasks])

    return (
        <div>
            <title>Task Planner</title>
            <div id='page' className='p-16 h-screen bg-zinc-200'>
                <header className=''>
                    <div className='flex'>
                        <h1 className='text-5xl'>Welcome back, {username ? username : "Anonymous"}</h1>
                        <a href='/' className=' ml-auto my-auto text-2xl'><p>Home</p></a>
                        <a href="/" className=' ml-3 my-auto mr-3 text-2xl'><p>About</p></a>
                    </div>
                    
                    {/* Edit for tasks number to be applied from database as unfinished */}
                    <p className='my-2'>You have 7 unfinished tasks.</p>
                </header>
                <main>
                    <CreateTask />
                    {tasks.map((task)=>{
                       return <TaskList key={task.id} id={task.id} name={task.name} checked={task.taskCheck} />
                    })}
                </main>
                <footer>

                </footer>
            </div>
        </div>
    )
};


export default Planner;