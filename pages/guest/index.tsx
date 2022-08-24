import { NextPage } from "next"


//Components
import Logo from "../../components/Homepage/GuestComponents/logo"
import { Button } from "@mui/material"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import IconButton from "@mui/material/IconButton";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';



const Guest : NextPage = () => {

    return(
        <div className=" Bg h-screen grid">
            
            <div className=" bg-gradient-to-t  from-[#FFF89A] to-[#9ADCFF] rounded-lg m-4">
                <div className=" h-20 flex items-center pt-2 justify-center">
                    <a className=" m-auto text-7xl cursor-pointer">Vision</a>
                    <a className=" text-3xl m-10 cursor-pointer">Home</a>
                    <a className=" text-3xl m-10 cursor-pointer">About</a>
                    <a className=" text-3xl m-10 mr-[25%] cursor-pointer">Contact us</a>
                    <Button href="/login" className=" absolute right-10" variant="text">Let's begin<KeyboardArrowRightOutlinedIcon/></Button>
                </div>

                <div className="flex mt-16 ml-10">
                    <div className=" mr-64 ml-20 ">
                        <h1 className=" text-center text-7xl">Let's start something <strong>Big</strong></h1>
                        <h2 className=" text-7xl">with <strong>Us</strong></h2>
                        <Logo />

                    </div>
                    <div className=" bg-[#332F2F] w-[30rem] h-[38rem] rounded-3xl grid p-5">
                        <div className=" flex">
                            <IconButton color="error" aria-label="add to shopping cart">
                                <FlagOutlinedIcon sx={{ fontSize: 100 }} />
                            </IconButton>
                            <div className="flex flex-col ">
                                <div className=" text-white text-3xl pt-3">
                                Set ambitious <strong className=" text-red-600">Goals</strong>
                                </div>
                                <div className=" text-[#A4A4A4] mt-8"> 
                                    Develop the strength to do bold things, not the strength to suffer.
                                </div>
                            </div>
                        </div>
                        <div className=" flex">
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AccountTreeIcon sx={{ fontSize: 100 }} />
                            </IconButton>
                            <div className="flex flex-col ">
                                <div className=" text-white text-3xl">
                                Delegate to smaller pieces - <strong className=" text-blue-400">Projects</strong>
                                </div>
                                <div className=" text-[#A4A4A4] mt-4"> 
                                Rome wasn't built in a day.
                                </div>
                            </div>
                        </div>

                        <svg className="arrow absolute origin-center rotate-90 translate-x-3 translate-y-40" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 40 20"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
                        <svg className="arrow absolute origin-center rotate-90 translate-x-3 translate-y-[22rem]" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 40 20"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>

                        <div className=" flex">
                            <IconButton color="secondary" aria-label="add to shopping cart">
                                <TaskIcon sx={{ fontSize: 100 }} />
                            </IconButton>
                            <div className="flex flex-col ">
                                <div className=" text-white text-3xl">
                                Comlete <strong className=" text-purple-400">Tasks</strong>
                                </div>
                                <div className=" text-[#A4A4A4] mt-4"> 
                                With consistency and reps and routine you're going to achieve your goals.
                                </div>
                            </div>
                            
                        </div>
                    </div>         
                </div>
            </div>
        </div>
        
    )
}

export default Guest;