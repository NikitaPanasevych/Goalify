import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Logo from "./LogoHome";


const Homepage : React.FC = () => {

    const [clickLogo, setClickLogo] = useState(false);

    return(
      <>
      <div className=" w-screen h-screen Bg flex">
        <AnimatePresence>
        {!clickLogo &&
        (<motion.div
        className=" m-auto pb-40 cursor-pointer"
        initial={{opacity:0, y: -25}}
        animate={{opacity:1, y: 0}}
        exit={{opacity:0, y:-25}}
        transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
        >
<Link href="/login">
            <motion.div
            onClick={()=>setClickLogo(true)}
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
            >
                <Logo />
            </motion.div>
</Link>
            <h1 className=" text-center text-9xl text-white">Goalify</h1>
        </motion.div>)}
        </AnimatePresence>
      </div>
    </>
    )
}

export default Homepage;