
interface ICarouselCard {
    projectTitle : string;
}

const CarouselCard : React.FC<ICarouselCard> = (props) => {
    return(
            <div className="card">
                <h3 className="title">{props.projectTitle}</h3>
            </div>
    )
}

export default CarouselCard;