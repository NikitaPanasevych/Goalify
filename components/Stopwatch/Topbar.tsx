import { useState } from 'react';
//Componetns


const Topbar : React.FC = () => {



    return(
        <div className=" absolute top-0 h-20 w-full grid ">
            <div  className=" text-6xl m-auto text-center p-2 text-white">
                <a href="/">Chrono</a>
            </div>
        </div>
        
    )
}

export default Topbar;