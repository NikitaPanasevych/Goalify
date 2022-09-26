import { Reorder, motion } from "framer-motion";
import { useState } from "react";
import Loading from "../components/Loading";

const Test = () => {
    const [items, setItems] = useState([0, 1, 2, 3])

    return (
      <div className=" grid h-screen">
         <Loading />
      </div>
    )
}

export default Test;