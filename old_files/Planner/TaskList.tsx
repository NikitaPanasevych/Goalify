import { useEffect, useState } from "react";
import { app, database} from "../../firebase/clientAPP";
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';


const TaskList : React.FC<{id: string, name: string, checked: boolean}> = ({id, name, checked}) => {
    
    useEffect(() => {
        setState(checked);
    }, [])

    const [curState, setState] = useState<boolean>();

    const handleCheckedTask = () => {
        const updateState = () => {
            const curTask = doc(database, 'taskCollection', id);
            updateDoc(curTask, {taskCheck: !curState});
        }
        updateState();
        curState ? setState(false) : setState(true);
    }

    

    return (
        <div className="bg-white rounded p-2 customGrid">
            <input className=" scale-50 align-start" type="checkbox" value="" onClick={handleCheckedTask} name="" id="" checked={curState} />
            <div className="pl-1 pb-2">
                <h3 className="text-xl font-bold">{id}</h3>
                <p>{name}</p>
            </div>
            
        </div>
    )
}

export default TaskList;