import Card from './ExtendedCarousel';
import {useState} from 'react';
import { LinearProgress } from "@mui/material";


interface ICarouselCard {
    projectTitle : string;
}

const CarouselCard : React.FC<ICarouselCard> = (props) => {

    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility(!visibility);
        
    }
    return(
        <>
            <div className="card p-2" onClick={handleClick}>
                    <h1 className=" text-center">{props.projectTitle}</h1>       
            </div>
            {visibility ? <Card title={props.projectTitle} tasks={['Task 1', 'Task 2']} /> : null}
        </>
    )
}

export default CarouselCard;