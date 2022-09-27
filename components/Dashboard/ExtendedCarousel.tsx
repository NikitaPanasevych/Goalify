
interface ISingleCard{
    title?: string,
    text?: string,
    tasks?: Array<string>,

}


const Card : React.FC<ISingleCard> = (props) => {
    return (
        <div id="tasksCard" className="text-white" >
            <>
            <h1 className="p-2 pt-5 font-bold text-5xl">{props.title}</h1>
            <h1 className="p-2 text-2xl">{props.text}</h1>
            <hr />
            <h2 className="p-2">Tasks:</h2>
            <div className="">
                {props.tasks ? props.tasks.map((task) => {
                    return(
                    <p className="inline p-4">{task}</p>
                    )
            }) : null}
            </div>
            </>
        </div>
    )   
}

export default Card;