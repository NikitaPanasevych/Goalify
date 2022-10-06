import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./LogoHome";


const Homepage : React.FC = () => {

    const [clickLogo, setClickLogo] = useState(false);

    return(
      <div className=" h-screen w-screen bg-[#7f5af0]  grid ">
        <AnimatePresence>
          {!clickLogo &&
          <motion.div
          className=" m-auto h-[40em] w-[60em] grid translate-y-[-2em] rounded-lg border-[1px]"
          initial={{opacity:0, y:-40}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:40}}
          transition={{duration:1, ease:"easeInOut"}}>
          <div className=" m-auto"> 
              <h1><Logo /></h1>
              <h2 className=" text-center mt-3 text-white text-6xl">Goalify</h2>
              <h3 className=" text-center text-white mt-3">
                <Link href={"/login"}>
                <motion.button
                onClick={()=>setClickLogo(true)}
                whileHover={{scale:1.2}}
                className=" rounded-lg w-[10em] h-[4em] bg-[#16161a] transition ease-in-out hover:bg-[#7f5af0] hover:border-2 duration-200">
                  <a className=" text-3xl">Start</a>
                </motion.button>
                </Link>
              </h3></div>
          </motion.div>}
        </AnimatePresence>
      </div>
    )
}

export default Homepage;