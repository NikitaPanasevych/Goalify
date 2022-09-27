import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, duration } from '@mui/material';
import { pink } from '@mui/material/colors';
import { auth, database} from "../../firebase_config"
import { collection, addDoc, CollectionReference, DocumentData } from 'firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth";



const AddNewTask:React.FC = () => {

    const [clicked, setClicked] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const transition : any = user?.uid;
    const UID : string = transition
    const db : CollectionReference<DocumentData> = collection(database, "users", UID, "Tasks" )
    const [projectData, setProjectData] = useState({title: ''})

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectData({...projectData, [e.target.name]: e.target.value})
    }

    const saveProject = async () => {
        await addDoc(db, projectData );
        alert("success");
    }

    return(
        <>
        {clicked &&
        (<AnimatePresence>
            <motion.div
                initial={{opacity:0, scale:1.2}}
                animate={{opacity:1, scale:1}}
                transition={{ duration:0.3}}
                exit={{opacity:0}}
                className=" h-[100px] w-[200px]"
            >
                <div 
                className=' 
                h-[102px]
                w-[202px]
                bg-[#D61C4E]
                ml-[25px]
                mr-[25px]
                rounded-[10px]
                grid 
                '>
                    <div className='h-[40%] w-[100%] text-center'>
                        <Button sx={{ color: pink[50]}} onClick={()=>setClicked(false)}>
                            Close <CloseIcon />
                        </Button>
                    </div>
                    <div className="relative w-[80%] m-auto mt-0">
                        <label className="sr-only"> Email </label>
                        <input
                        onChange={handleData}
                        name="title"
                        value={projectData.title}
                        type="email"
                        id="UserEmail"
                        placeholder=" Task name"
                        className="w-full py-2.5 pr-10 border-gray-200 hover:bg-slate-100 rounded-md shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                        <motion.button
                        whileHover={{scale:[null, 1.3, 1.1]}}
                        transition={{duration: 0.3}}
                        onClick={()=>{saveProject(), setClicked(false)}}
                            type="button"
                            className="text-white bg-rose-600 p-0.5 rounded-full"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                            >
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                            />
                            </svg>
                        </motion.button>
                        </span>
                    </div>
                </div>
                
            </motion.div>
        </AnimatePresence>)}

        
        {!clicked &&
        (<AnimatePresence>
            <motion.div 
                whileHover={{ scale: [null, 1.2, 1.1] }}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{ duration: 0.3 }}
                className=" h-[100px] w-[200px]"
            >
                <div onClick={()=>setClicked(true)}
                className=" 
                w-[200px]
                text-white
                rounded-[10px] 
                mr-[25px] 
                border-[2px]
                text-xl 
                cursor-pointer 
                border-white 
                ml-[25px]
                h-[100px] 
                hover:border-[#D61C4E]
                hover:text-[#D61C4E] 
                transition ease-in-out delay-[30] ">
                    <h1 className=" h-[28px] text-center mt-3 mb-0">Add New Task</h1>
                    <h2 className=' text-center  text-5xl'>+</h2>
                </div>
            </motion.div>
        </AnimatePresence>)}
        </>
    )
}

export default AddNewTask;