import Nav from "./LoggedInComponents/Nav";

const Home : React.FC = () => {
    return(
        <div className="  bg-[#6B7AA1] text-[#E7E0C9] w-screen h-screen flex">
            <div className=" w-[15%]">
                <h1 className=" text-center text-6xl mt-2 cursor-pointer">Vision</h1>
                <div className=" bg-[#C1CFC0] w-64 ml-4 mt-5 text-xl rounded-lg  font-bold text-black absolute top-20">
                    <Nav />
                </div>
                <hr className=""></hr>
            </div>
            <div className=" h-screen w-[85%] fixed right-0 bg-[#11324D] rounded-l-lg ">
                
            
                
            </div>
        </div>
    )
}

export default Home;