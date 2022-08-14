import { useState } from 'react';
//Componetns
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material'

const Topbar : React.FC = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className=" absolute top-0 h-20 w-full flex ">
            
            <h1 className=" text-6xl w-full text-center p-2 text-white">
                Chrono
            </h1>
            <IconButton className=' absolute right-2 top-3' onClick={() => setOpen(true)} size='large' color='primary' >
                <AccountCircleIcon fontSize="inherit" />
            </IconButton>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            Hui
            </Drawer>
        </div>
        
    )
}

export default Topbar;