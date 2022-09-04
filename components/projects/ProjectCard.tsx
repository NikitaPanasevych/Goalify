import { motion } from "framer-motion";

interface IProjectCard{
    projectTitle?: string,
    projectDesc?: string
    
}

const ProjectCard : React.FC<IProjectCard> = (props) => {
    return(
        <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <div className=" cursor-pointer mr-8 mb-8 w-64 h-32 rounded-lg bg-[#2E3542] text-black pt-3 pl-3">
            <div className=" absolute translate-x-44 w-14 h-14 bg-red-600 rounded-md"></div>
            <h1 className=" text-xl">{props.projectTitle}</h1>
            <div className=" text-[#B4A5A5] w-40  break-words">{props.projectDesc}</div>
            <progress className=" mt-2" value="10" max="20"></progress>
            <h3 className=" text-white">10/20 Tasks</h3> 
        </div>
        </motion.div>
    )
}

export default ProjectCard;