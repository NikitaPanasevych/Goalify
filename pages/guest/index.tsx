import { NextPage } from "next"


// Import components and svg's
import Logo from "../../public/logo";
import Header from "../../components/Header";

const Guest : NextPage = () => {

    return(
        <div className="page">
            <Header />
            <Logo />
        </div>
        
    )
}

export default Guest;