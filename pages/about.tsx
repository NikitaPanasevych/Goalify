import { NextPage } from "next"
import Header from "../components/Header";

const About : NextPage = () => {
    return (
        <div className="">
            <title>About</title>
            <Header />
            <div>
                <h1>This is an About page.</h1>
            </div>
        </div>
    )
}


export default About;