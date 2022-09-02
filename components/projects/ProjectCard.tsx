import { motion } from "framer-motion";
import Link from 'next/link';
import Router from "next/router";
import {useEffect} from 'react';

import { getDocs, collection, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import {auth} from "../../firebase_config";


interface IProjectCard{
    projectTitle?: string,
    projectDesc?: string,
    index: string,
}

const ProjectCard : React.FC<IProjectCard> = (props) => {

    const urlRoute = '/projects/' + props.index;

    return(
        <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <Link href={urlRoute}>
        <div className=" cursor-pointer mr-8 mb-8 w-64 h-32 rounded-lg bg-[#171010] text-white pt-3 pl-3" onClick={() => console.log('reroute me', "==>",props.index)}>
            <div className=" absolute translate-x-44 w-14 h-14 bg-red-600 rounded-md"></div>
            <h1 className=" text-xl">{props.projectTitle}</h1>
            <div className=" text-[#B4A5A5] w-40  break-words">{props.projectDesc}</div>
            <progress className=" mt-2" value="10" max="20"></progress>
            <h3 className=" text-white">10/20 Tasks</h3> 
        </div>
        </Link>
        </motion.div>
    )
}

export default ProjectCard;