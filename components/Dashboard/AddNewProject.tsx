import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, duration } from '@mui/material';
import { pink } from '@mui/material/colors';

export interface IProject {
    project_title: string,
}

interface IAddNewProject {
    onSave(projectData: IProject): void
}



const AddNewProject: React.FC<IAddNewProject> = (props) => {

    const [clicked, setClicked] = useState(false);
    const [projectData, setProjectData] = useState<IProject>({
        project_title: '',
    });

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectData({ ...projectData, [e.target.name]: [e.target.value] });
    }

    const onSaveProject = () => {
        setClicked(false);
        if (projectData.project_title !== "") {
            props.onSave(projectData)
            projectData.project_title = ''
        }
        else alert("Nameless project");
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') onSaveProject();
    }

    return (
        <>
            {clicked &&
                (<AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0 }}
                        className=" h-[75px] w-[200px]"
                    >
                        <div className='h-[77px] w-[202px] bg-[#D61C4E] ml-[25px] mr-[25px] rounded-[10px] grid'>
                            <div className='h-[40%] w-[100%] text-center'>
                                <Button sx={{ color: pink[50] }} onClick={() => setClicked(false)}>
                                    Close <CloseIcon />
                                </Button>
                            </div>
                            <div className="relative w-[80%] m-auto mt-0">
                                <input
                                    onChange={handleData}
                                    onKeyDown={handleKeyDown}
                                    name="project_title"
                                    value={projectData.project_title}
                                    className=" w-[95%] mb-1 rounded-md pl-2 py-[0.1em]"
                                />
                                <span className="absolute top-[0.1em] right-0 grid w-10 place-content-center">
                                    <motion.button
                                        whileHover={{ scale: [null, 1.3, 1.1] }}
                                        transition={{ duration: 0.3 }}
                                        onClick={onSaveProject}
                                        type="button"
                                        className="text-white bg-rose-600 p-0.5 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className=" h-[75px] w-[200px]"
                    >
                        <div onClick={() => setClicked(true)}
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
                h-[75px] 
                hover:border-[#D61C4E]
                hover:text-[#D61C4E] 
                transition ease-in-out delay-[30] ">
                            <h1 className=" h-[18px] text-center text-base mt-1 mb-0">Add New Project</h1>
                            <h2 className=' text-center  text-5xl'>+</h2>
                        </div>
                    </motion.div>
                </AnimatePresence>)}
        </>
    )
}

export default AddNewProject;