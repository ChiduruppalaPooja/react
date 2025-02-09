import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { poppinsFont } from "../../theme/typography.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authSliceActions } from "../../"
import Cookies from "js-cookie";
export default function TopBar() {

    const profilePicLink = useSelector((state) => state.dashboard.profile.profilePic);
    const name = useSelector((state) => state.dashboard.profile.name);
    const email = useSelector((state) => state.dashboard.profile.email);
    const [profileClick, setProfileClick] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(authSliceActions.logout());
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate("/login");
    }
    const handleLogout = () => {
        setProfileClick(true);
    };

    const handleClose = () => {
        setProfileClick(false);
    };

    return (
        <>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
                sx={{
                    marginLeft: '80px',
                    marginTop: '27px',

                }}
            >
                <Typography sx={
                    {
                        height: '32px',
                        marginLeft: '18px',
                        fontFamily: poppinsFont.fontFamily,
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '32px',
                    }
                }>Good morning, {name}👋</Typography>

                <Box
                    sx={{
                        position: 'relative',
                        marginRight: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={profilePicLink}
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                        onClick={handleLogout}
                        alt=""
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            right: '200px'
                        }}
                    >
                        {profileClick && (
                            <Menu
                                open={profileClick}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                anchorPosition={{
                                    left: 100,
                                    top: 100
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}

                            >
                                <MenuItem>
                                    <img
                                        src={profilePicLink}
                                        width="50px"
                                        height="50px"
                                        style={{ borderRadius: "50%" }}
                                        alt=""
                                    />
                                </MenuItem>
                                <MenuItem>{name}</MenuItem>
                                <MenuItem>{email}</MenuItem>
                                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                            </Menu>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}