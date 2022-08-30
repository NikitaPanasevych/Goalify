import { motion } from "framer-motion";

const ProjectCard : React.FC = () => {
    return(
        <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <div className=" cursor-pointer mr-8 mb-8 w-64 h-32 rounded-lg bg-[#171010] text-white pt-3 pl-3">
            <div className=" absolute translate-x-44 w-14 h-14 bg-red-600 rounded-md"></div>
            <h1 className=" text-xl">projectName</h1>
            <div className=" text-[#B4A5A5] w-40  break-words">projectDescr</div>
            <progress className=" mt-2" value="11" max="20"></progress>
            <h3 className=" text-white">10/20 Tasks</h3> 
        </div>
        </motion.div>
    )
}

export default ProjectCard;