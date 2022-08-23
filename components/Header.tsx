import Logo from "../public/logo";

const Header : React.FC = () => {
    return(
            <section className="header flex my-2 mx-28" >
                    <h2 className=" text-6xl p-5"><a href='/'>Vision</a></h2>
                
                <div className="flex ml-auto mr-32 items-center">
                    <p className="text-2xl p-5"><a href='/about'>About</a></p>
                    <p className="text-2xl p-5"><a href='/contact'>Contact Us</a></p>
                </div>
                <div className="flex items-center">
                <p className="text-2xl p-5"><a href='/login'>Login</a></p>
                <p className="text-2xl p-5"><a href='/signup'>Sign Up</a></p>
                </div>
                
            </section>
    )
}

export default Header;