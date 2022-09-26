
interface ICarouselCard {
    projectTitle : string;
    projectDescr : string;
}

const CarouselCard : React.FC<ICarouselCard> = (props) => {
    return(
            <div className="card p-2">
                <h1 className=" ">{props.projectTitle}</h1>
                <h2 className="">{props.projectDescr}</h2>
                <h3>SubTasks 10/10 </h3>
            </div>
    )
}

export default CarouselCard;