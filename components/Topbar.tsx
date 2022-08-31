import { logOut } from "../firebase_config"

const Topbar : React.FC = () => {

    return(
        <nav id="nav-1">
            <a className="link-1" href="/dashboard">Home</a>
            <a className="link-1" href="#">About</a>
            <a className="link-1" href="#">Contact</a>
            <a className="link-1" href="#">Shop</a>
            <a className="link-1 cursor-pointer" onClick={() => logOut()}>Log Out</a>
        </nav>
    )
}

export default Topbar