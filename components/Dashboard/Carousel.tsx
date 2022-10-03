import Card, { ITaskData } from './ExtendedCarousel';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
                            <input className=' h-[80%] w-[98%]' />
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