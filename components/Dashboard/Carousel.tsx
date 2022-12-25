import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import ExpandIcon from '@mui/icons-material/Expand';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_config';
import { collection, deleteDoc, doc, QuerySnapshot, QueryDocumentSnapshot, onSnapshot, CollectionReference, DocumentData, addDoc, orderBy, updateDoc, Timestamp, query } from "firebase/firestore";
import { database } from '../../firebase_config';
import Task from './TaskList';

export interface ITaskData {
    task_name: string,
}

interface ICarouselCard {
    projectTitle: string;
    id: string;
}

const CarouselCard: React.FC<ICarouselCard> = (props) => {

    const [user, loading, error] = useAuthState(auth);
    const [DBTasks, setDBTasks] = useState<any>([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [taskData, setTask] = useState<ITaskData>({
        task_name: ''
    });
    const [anyCompleted, setAnyCompleted] = useState<boolean>(false);

    useEffect(() => {
        if (!loading && user) {
            const db: CollectionReference<DocumentData> = collection(database, 'users', user.uid, 'Projects', props.id, 'Tasks');
            const q = query(db, orderBy('timestamp', 'desc'));
            onSnapshot(q, (data: QuerySnapshot) => {
                setDBTasks(data.docs.map((item: QueryDocumentSnapshot) => {
                    return { ...item.data(), id: item.id }
                }));
            });
        }
    }, [user, loading, error, isUpdated])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...taskData, [e.target.name]: [e.target.value] });
    }

    const handleAddNewTask = () => {
        user && addDoc(collection(database, 'users', user.uid, 'Projects', props.id, 'Tasks'), {
            task_name: String(taskData.task_name),
            completed: false,
            timestamp: Timestamp.now(),
        });
        setTask({ ...taskData, task_name: '' });
        setIsUpdated(!isUpdated);
    }

    const handleDeleteTask = async (id: string) => {
        await (user && deleteDoc(doc(database, 'users', user.uid, 'Projects', props.id, 'Tasks', id)));
    }

    const deleteProject = async (id: string) => {
        confirm('Are you sure you want to delete ' + props.projectTitle + ' project?') && (
            await (user &&
                    DBTasks.map((element:any) => {
                        handleDeleteTask(element.id)
                    })))
           user ? deleteDoc(doc(database, "users", user.uid, "Projects", id)) : null  
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') handleAddNewTask();
    }

    const handleTaskUpdate = (id: string, newTaskName: string) => {
        user ? updateDoc(doc(database, 'users', user.uid, 'Projects', props.id, 'Tasks', id), {
            task_name: newTaskName,
        }) : null
    }

    const handleTaskCompleted = (id: string, state: boolean) => {
        user ? updateDoc(doc(database, 'users', user.uid, 'Projects', props.id, 'Tasks', id), {
            completed: state,
        }) : null
    }

    const handleClearCompleted = (): void => {
        DBTasks.map((item: any) => {
            item.completed ? handleDeleteTask(item.id) : null;
        })
    }

    const handleExpand = (): void => {
        setAnyCompleted(!anyCompleted);
        document.getElementById('mainDiv'+props.id)?.classList.toggle('mainContainer');
    }
    

    return (
        <motion.div
        initial={{scale:0.5, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{duration:0.1, ease:"easeIn"}}
         id={"mainDiv"+props.id} className="card p-2 " >
            <>
                <div className=" m-auto text-center break-words w-[7em]">
                    {props.projectTitle}
                </div>
                <IconButton  onClick={handleExpand}  aria-label="expand" className=" translate-x-[-0.55rem] translate-y-[-1.25em]">
                    <ExpandIcon sx={{color: 'white'}} />
                </IconButton>
                {
                !anyCompleted?
                    <IconButton id={'closeIcon'+props.id} aria-label="delete" className=' translate-x-[3.5em] translate-y-[-1.25em]' onClick={() => deleteProject(props.id)}>
                            <CloseIcon sx={{color: "white"}} />
                    </IconButton>
                :null
                }
                <h2 className=' translate-y-[-1.75em] text-black'>
                    <input className=' h-[75%] w-[70%]' type="text" placeholder="new task" name="task_name" value={taskData.task_name} onChange={handleChange} onKeyDown={handleKeyDown}/>
                    <span onClick={handleAddNewTask} className="absolute top-0 right-0 translate-x-[-0.2em] translate-y-[0.08em] grid w-10 place-content-center">
                        <motion.button
                            whileHover={{ scale: [null, 1.3, 1.1] }}
                            transition={{ duration: 0.3 }}
                            type="button"
                            className="text-white bg-[#7f5af0] p-0.5 rounded-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-9 h-4"
                            >
                                <path
                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                />
                            </svg>
                        </motion.button>
                    </span>
                </h2>
                <div className="-translate-y-[1em] overflow-auto max-h-[30em]">
                    {user ? DBTasks.map((item: any) => {
                        return (<Task key={item.id} id={item.id} taskName={item?.task_name} completed={item?.completed} onDelete={handleDeleteTask} onSave={handleTaskUpdate} onCompleted={handleTaskCompleted} infoButton={anyCompleted} />)
                    }) : null}
                    { anyCompleted ? <button type='button' onClick={handleClearCompleted} className='relative text-center w-[100%] mt-4 mb-0 bg-red-600/50 rounded-lg'>Clear completed</button> : null}
                </div>
            </>
        </motion.div>
    )
}

export default CarouselCard;