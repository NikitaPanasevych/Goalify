import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_config';
import { collection, deleteDoc, doc, QuerySnapshot, QueryDocumentSnapshot, onSnapshot, CollectionReference, DocumentData, addDoc, getDocs, DocumentSnapshot } from "firebase/firestore";
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

    useEffect(() => {
        if (!loading && user) {
            const db: CollectionReference<DocumentData> = collection(database, 'users', user.uid, 'Projects', props.id, 'Tasks')
            onSnapshot(db, (data: QuerySnapshot) => {
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
        user ? addDoc(collection(database, 'users', user.uid, 'Projects', props.id, 'Tasks'), taskData) : null;
        setTask({ ...taskData, task_name: '' });
        setIsUpdated(!isUpdated);
    }

    const handleDeleteTask = async (id: string) => {
        await (user ? deleteDoc(doc(database, 'users', user.uid, 'Projects', props.id, 'Tasks', id)) : null);
    }

    const deleteProject = async (id: string) => {
        await (user ? deleteDoc(doc(database, "users", user.uid, "Projects", id)) : null);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') handleAddNewTask();
    }


    let projectTitleLength: number = 15;

    return (
        <div className="card p-2" >
            <>
                <h1 className=" text-center h-[20px]">
                    {props.projectTitle?.length > projectTitleLength ? props.projectTitle.substring(0, projectTitleLength - 3) + '...' : props.projectTitle}
                </h1>
                <IconButton aria-label="expand" className=" translate-x-[-0.55rem] translate-y-[-1em]">
                    <InfoIcon />
                </IconButton>
                <IconButton aria-label="delete" className=' translate-x-[3.5em] translate-y-[-1em]' onClick={() => deleteProject(props.id)}>
                    <CloseIcon />
                </IconButton>
                <h2 className=' translate-y-[-1.75em] text-black'>
                    <input className=' h-[75%] w-[70%]' type="text" placeholder="new task" name="task_name" value={taskData.task_name} onChange={handleChange} onKeyDown={handleKeyDown}/>
                    <span onClick={handleAddNewTask} className="absolute top-0 right-0 translate-x-[-0.2em] translate-y-[0.08em] grid w-10 place-content-center">
                        <motion.button
                            whileHover={{ scale: [null, 1.3, 1.1] }}
                            transition={{ duration: 0.3 }}
                            type="button"
                            className="text-white bg-blue-700 p-0.5 rounded-sm"
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
                <div className="-translate-y-[1em] overflow-auto max-h-[15em]">
                    {user ? DBTasks.map((item: any) => {
                        return (<Task taskName={item?.task_name[0]} key={item.id} id={item.id} onDelete={handleDeleteTask} />)
                    }) : null}
                </div>
            </>
        </div>
    )
}

export default CarouselCard;