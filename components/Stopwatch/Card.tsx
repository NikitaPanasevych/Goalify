import MoreVertIcon from '@mui/icons-material/MoreVert';

const Card : React.FC<{taskTitle : string, taskTime : string}> = ({taskTitle, taskTime}) => {
    return(
        <div className=" text-white w-72 rounded-md h-72 ml-6 mb-6 bg-[#1363DF]">
            <h1 className=" font-bold text-3xl">Twitch {taskTitle}</h1>
            <h2 className=" font-semibold text-2xl">{taskTime}</h2>
            <button>
                <MoreVertIcon/>
            </button>
            
        </div>
    )
}

export default Card;