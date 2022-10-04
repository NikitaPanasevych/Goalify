import Logo from "./logoLoading";
import { motion } from "framer-motion";

const Load : React.FC = () => {
    return(
        <>
        <title>GOALIFY</title>
            <motion.div
             className="Bg grid h-screen w-screen"
             >
                <div className="flex text-5xl m-auto">L <Logo /> a d i n g</div>
            </motion.div>
        </>
    )
}

export default Load;