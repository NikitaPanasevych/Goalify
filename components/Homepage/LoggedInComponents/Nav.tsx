import { ListItemButton, ListItemText, List, ListItemIcon } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

const Nav : React.FC = () => {
    return(
                <>
                    <List>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <TaskOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Everyday Tasks" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountTreeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <GroupsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <OutlinedFlagTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Goals" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <SettingsSuggestOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </List>
            </>
                
    )
}

export default Nav