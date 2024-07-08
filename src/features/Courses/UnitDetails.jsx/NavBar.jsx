import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../../assets/searchIcon";
import Navigation from "../../../components/common/Navigation";

export default function NavBar({ setSelectedTopics }) {
    const unitsData = useSelector((state) => state.courses.unitsData);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (unitsData.length > 0) {
            setSelectedTopics(unitsData[0].topics);
        }
    }, [unitsData, setSelectedTopics]);

    const handleNavigationClick = (index, topics) => {
        
        setSelectedIndex(index);
        setSelectedTopics(topics);
    };

    return (
        <Stack direction={'row'} gap={'30px'}>
            <Stack direction={'row'} gap={'35px'} alignItems={'center'}>
                {unitsData.map((unit, index) => (
                    <Navigation 
                        key={index}
                        name={unit.unit_name}
                        topics={unit.topics}
                        selected={index === selectedIndex}
                        onClick={() => handleNavigationClick(index, unit.topics)}
                    />
                ))}
            </Stack>
            <Stack direction={"row"} gap={'11.38px'} sx={{ width: '144px', background: (theme) => theme.palette.grey[100], border: '1px solid #F4F6F8', borderRadius: '6.64px' }} justifyContent={"center"} alignItems={'center'}>
                <SearchIcon />
                <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[400] }}> Search topics</Typography>
            </Stack>
        </Stack>
    );
}
