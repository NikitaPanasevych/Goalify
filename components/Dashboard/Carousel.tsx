import Card from './Card';
import {useState} from 'react';


interface ICarouselCard {
    projectTitle : string;
    projectDescr : string;
}

const CarouselCard : React.FC<ICarouselCard> = (props) => {

    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility(!visibility);
    }
    return(
        <>
            <div className="card p-2" onClick={handleClick}>
                    <h1 className=" ">{props.projectTitle}</h1>
                    <h2 className="">{props.projectDescr}</h2>
                    <h3>SubTasks 10/10 </h3>
            </div>
            {visibility ? <Card /> : null}
        </>
    )
}

export default CarouselCard;