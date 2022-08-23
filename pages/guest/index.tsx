import { NextPage } from "next"


// Import components and svg's
import Logo from "../../components/Homepage/GuestComponents/logo"


const Guest : NextPage = () => {

    return(
        <div className=" Bg h-screen grid">
            <div className=" bg-[#E7F6F2] w-[95%] mb-0 mt-5 m-auto">
                <div className=" h-20 flex items-center pt-2 justify-center">
                    <a className=" m-auto text-7xl cursor-pointer">Vision</a>
                    <a className=" text-3xl m-10 cursor-pointer">About</a>
                    <a className=" text-3xl m-10 cursor-pointer">our Vision</a>
                    <a className=" text-3xl m-10 cursor-pointer">Support</a>
                    <a className=" text-3xl m-10 mr-[20%] cursor-pointer">Contact us</a>
                </div>
                <div className="flex justify-center items-center h-[50rem]">
                    <div className=" mr-64  h-[80%]">
                        <h1 className=" text-center text-7xl">Let's start something <strong>Big</strong></h1>
                        <h2 className=" text-7xl">with <strong>Us</strong></h2>
                        <Logo />
                    </div>
                    <div className=" bg-[#332F2F] w-[35rem] h-[45rem] rounded-3xl">

                    </div>         
                </div>
            </div>
        </div>
        
    )
}

export default Guest;