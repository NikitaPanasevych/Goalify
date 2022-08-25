import { NextPage } from "next"
//Components
import ProjectCard from "../components/ProjectCard";
import Topbar from "../components/Topbar";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
//Firebase

const Projects : NextPage = () => {
    return (
        <div className="  h-screen bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
            <div className=" absolute  flex flex-wrap pt-48  pl-32  bg-gradient-to-tr from-[#354259] to-[#3F1C1C]">
                <h1 className=" absolute -translate-y-16 text-4xl text-white">Projects</h1>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className=" flex justify-center items-center cursor-pointer opacity-[25%] text-white top-32 absolute right-10 rounded-lg w-48">
                New Project
            </div>
            <Topbar />
        </div>
    )
}


export default Projects;