import Card, { ITaskData } from './ExtendedCarousel';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';


interface ICarouselCard {
    projectTitle : string;
    id : string;
    onDelete(id:string):void;
    closeAll?: void;
    addNewTask(taskData: ITaskData): void;
}

const CarouselCard:React.FC<ICarouselCard> = (props) => {

    const [visibility, setVisibility] = useState(false);

    const handleExpand = () => {
        // setVisibility(!visibility);
        const docRef = document.getElementById(props.id)?.classList;
        docRef?.toggle('invisible');
        // Add an animation for new 
    }

    let projectTitleLength: number = 15;

    return(
        <>
            <div className="card p-2" >
                    <h1 className=" text-center h-[20px]">
                        {props.projectTitle?.length > projectTitleLength ? props.projectTitle.substring(0,projectTitleLength-3)+'...' : props.projectTitle}
                        </h1>
                        <IconButton aria-label="expand" onClick={handleExpand} className=" translate-x-[-0.55rem] translate-y-[-1em]">
                            <InfoIcon />
                        </IconButton>
                        <IconButton aria-label="delete" className=' translate-x-[3.5em] translate-y-[-1em]' onClick={()=>props.onDelete(props.id)}>
                            <CloseIcon />
                        </IconButton>
                        <h2 className=' translate-y-[-1.75em] text-black'>
                            <input className=' h-[75%] w-[70%]' />
                            <span className="absolute top-0 right-0 translate-x-[-0.2em] translate-y-[0.08em] grid w-10 place-content-center">
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
            </div>
            <div id={props.id} className="divCard invisible">
                <Card addNewTask={props.addNewTask} title={props.projectTitle} />
            </div>

                {/* {visibility ? <Card title={props.projectTitle} /> : null} */}
        </>
    )
}

export default CarouselCard;