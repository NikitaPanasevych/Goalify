import { auth, logOut } from "../firebase_config"
import { Avatar, Menu, MenuItem, Tooltip, IconButton, Divider, ListItemIcon } from "@mui/material"
import { Logout, PersonAdd, Settings } from "@mui/icons-material"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { red } from "@mui/material/colors"
import { getDoc, doc } from "firebase/firestore"
import { database } from "../firebase_config";




const Topbar: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [user, loading, error] = useAuthState(auth);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    useEffect(()  => {
        if(loading) {console.log('loading');}
        else if(!user) {return}  
        else if(!loading && user)
            {
            getDoc(doc(database, "users", user.uid))
            console.log(user.providerData[0].displayName)
            }
    },[loading, user, error])

    return (
        <nav id="nav-1">
            <div className="absolute  hover:cursor-pointer flex top-2 left-1">
                <svg width="30" height="30" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M336.634 629.921L307.673 409.376C334.901 476.208 389.505 610.317 390.099 612.099C390.842 614.327 391.584 617.297 392.327 619.525C393.069 621.752 393.069 625.465 393.069 627.693C393.069 629.921 391.584 632.891 391.584 633.634C391.584 634.376 388.614 638.832 387.871 640.317C387.129 641.802 384.901 644.03 384.158 644.772C383.416 645.515 378.218 648.485 377.475 649.228C376.881 649.822 373.762 650.96 372.277 651.455L365.594 652.198L361.139 651.455L355.198 649.97L348.515 647L344.059 643.287L339.604 637.347L336.634 629.921Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M489.604 118.287L420.545 332.891L543.069 138.337V131.653L542.327 125.713L540.842 121.257L538.614 116.802L535.644 113.089L531.188 108.634L523.762 104.178L519.307 102.693L514.109 101.95L508.911 102.693L504.455 104.178L500 107.148L494.802 111.604L489.604 118.287Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M401.238 90.8119L410.149 309.871L458.416 91.5545V85.6139L457.673 81.1584L456.188 76.703L453.96 72.2475L450.248 67.7921L445.792 64.0792L441.337 61.1089L435.396 59.6238H425L420.545 61.1089L417.574 62.5941L414.604 64.0792L410.149 67.0495L405.693 71.505L402.723 77.4456L401.238 83.3862V90.8119Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M616.584 355.911L399.752 402.693L629.208 410.861L635.891 407.891L642.574 402.693L647.03 396.752L649.257 390.812L650 382.644L649.257 375.96L647.03 370.762L642.574 364.079L636.634 358.881L629.208 355.911H616.584Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M589.109 502.198L378.96 416.06C451.98 425.961 598.168 445.763 598.762 445.763C599.505 445.763 605.446 447.99 606.188 447.99C606.931 447.99 615.099 454.673 615.842 455.416C616.584 456.158 621.038 465.067 621.782 466.554L621.782 466.555C622.525 468.04 623.267 473.238 623.267 475.466C623.267 477.693 621.782 482.891 621.04 485.119C620.297 487.347 617.327 491.802 615.842 493.287C614.653 494.475 610.396 498.238 608.416 499.97L600.248 502.941H594.307L589.109 502.198Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M522.277 574.97L353.713 422L546.04 521.505L552.723 525.96L559.406 532.644L563.861 540.069L565.347 548.238V553.436L563.861 558.634L561.634 563.832L557.921 569.772L551.98 574.97L546.782 577.198L541.584 578.683H535.644L528.96 577.941L522.277 574.97Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M210.396 581.654L279.455 367.05L156.931 561.604L156.931 568.287L157.673 574.228L159.158 578.683L161.386 583.139L164.356 586.852L168.812 591.307L176.238 595.763L180.693 597.248L185.891 597.99L191.089 597.248L195.545 595.763L200 592.792L205.198 588.337L210.396 581.654Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M298.762 609.129L289.851 390.069L241.584 608.386L241.584 614.327L242.327 618.782L243.812 623.238L246.04 627.693L249.752 632.149L254.208 635.861L258.663 638.832L264.604 640.317L275 640.317L279.455 638.832L282.426 637.347L285.396 635.861L289.851 632.891L294.307 628.436L297.277 622.495L298.762 616.555L298.762 609.129Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M83.4159 344.03L300.248 297.247L70.7921 289.079L64.1089 292.049L57.4258 297.247L52.9703 303.188L50.7426 309.129L50 317.297L50.7426 323.98L52.9703 329.178L57.4258 335.861L63.3663 341.059L70.7921 344.03L83.4159 344.03Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M110.891 197.742L321.04 283.881C248.02 273.98 101.832 254.178 101.238 254.178C100.495 254.178 94.5545 251.95 93.8119 251.95C93.0693 251.95 84.901 245.267 84.1584 244.525C83.416 243.782 78.9618 234.874 78.2182 233.387L78.2178 233.386C77.4752 231.901 76.7327 226.703 76.7327 224.475C76.7327 222.247 78.2178 217.049 78.9604 214.822C79.703 212.594 82.6733 208.139 84.1584 206.653C85.3465 205.465 89.604 201.703 91.5842 199.97L99.7525 197L105.693 197L110.891 197.742Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M177.723 124.97L346.287 277.94L153.96 178.435L147.277 173.98L140.594 167.297L136.139 159.871L134.653 151.703L134.653 146.505L136.139 141.307L138.366 136.109L142.079 130.168L148.02 124.97L153.218 122.742L158.416 121.257L164.356 121.257L171.04 122L177.723 124.97Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M430.941 612.842L329.951 420.515L479.208 583.139C480.941 586.356 484.406 592.941 484.406 593.535C484.406 594.277 485.891 599.475 485.891 600.218V608.386C485.891 608.98 484.406 612.099 483.663 613.584L479.951 619.525L473.267 626.208L463.614 630.663H458.416H453.96L447.277 629.178L442.079 626.208L435.396 620.267L430.941 612.842Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M364.109 69.2772L393.069 289.822C365.842 222.99 311.238 88.8812 310.644 87.099C309.901 84.8713 309.158 81.901 308.416 79.6733C307.673 77.4455 307.673 73.7327 307.673 71.505C307.673 69.2772 309.158 66.3069 309.158 65.5644C309.158 64.8218 312.129 60.3663 312.871 58.8812C313.614 57.396 315.842 55.1683 316.584 54.4257C317.327 53.6832 322.525 50.7129 323.267 49.9703C323.861 49.3762 326.98 48.2376 328.465 47.7426L335.149 47L339.604 47.7426L345.545 49.2277L352.228 52.198L356.683 55.9109L361.139 61.8515L364.109 69.2772Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M269.802 86.3564L370.792 278.683L221.535 116.059C219.802 112.842 216.337 106.257 216.337 105.663C216.337 104.921 214.851 99.7227 214.851 98.9801L214.851 90.8118C214.851 90.2177 216.337 87.0989 217.079 85.6138L220.792 79.6732L227.475 72.99L237.129 68.5346L242.327 68.5346L246.782 68.5346L253.465 70.0197L258.663 72.99L265.347 78.9306L269.802 86.3564Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M99.0099 479.921L277.97 341.802L145.05 515.564L134.653 525.218L127.228 528.188H119.059L112.376 526.703L103.465 522.247L96.7822 515.564L93.0693 508.881L91.5842 498.485L93.0693 489.574L99.0099 479.921Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M601.733 218.535L422.772 356.653L555.693 182.891L566.089 173.237L573.515 170.267H581.683L588.366 171.752L597.277 176.208L603.96 182.891L607.673 189.574L609.158 199.97L607.673 208.881L601.733 218.535Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M96.7822 436.851L283.911 318.04L70.0495 386.356L61.8812 392.297L56.6832 399.723L54.4554 411.604L56.6832 422L61.8812 430.911L70.0495 436.851L80.4455 440.564H88.6139L96.7822 436.851Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M603.96 261.604L416.832 380.416L630.693 312.099L638.861 306.158L644.059 298.733L646.287 286.851L644.059 276.455L638.861 267.544L630.693 261.604L620.297 257.891H612.129L603.96 261.604Z" fill="#FF0000" stroke="#FF0000" />
                </svg>
                <a className=" pl-1 text-xl text-white">GOALIFY</a>

            </div>
            <div>

            </div>
            <div className=" absolute right-2 top-0">
                <Tooltip title="Account menu">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 35, height: 35, bgcolor: red[900] }} >{user && (user.displayName?.substring(0,1))}</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> {user ? user.displayName : 'Profile'}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Refer A Friend
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={() => logOut()}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>

        </nav>

    )
}

export default Topbar