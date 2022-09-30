import Card from './ExtendedCarousel';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface ICarouselCard {
    projectTitle : string;
    id : string;
    onDelete(id:string):void;
}

const CarouselCard:React.FC<ICarouselCard> = (props) => {

    const [visibility, setVisibility] = useState(false);

    const handleExpand = () => {
        setVisibility(!visibility)
       }

    let projectTitleLength: number = 17;

    return(
        <>
            <div className="card p-2" >
                    <h1 className=" text-center h-[20px]">
                        {props.projectTitle.length > projectTitleLength ? props.projectTitle.substring(0,projectTitleLength) : props.projectTitle}
                        <IconButton aria-label="delete" onClick={()=>props.onDelete(props.id)}>
                            <DeleteIcon />
                        </IconButton>
                        </h1>
                        <IconButton aria-label="delete" onClick={handleExpand}>
                            <ExpandMoreIcon />
                        </IconButton>        
            </div>
            {visibility ? <Card title={props.projectTitle} tasks={['Task 1', 'Task 2']} /> : null}
        </>
    )
}

export default CarouselCard;