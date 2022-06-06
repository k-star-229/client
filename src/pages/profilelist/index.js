import React, {Fragment} from 'react';
import HomeHero from "./components/hero";
import HomeStory from "./components/story";
import HomeCriminals from "./components/criminals";
import HomeExtortion from "./components/extortion";
import HomeMine from "./components/mine";
import HomeShare from "./components/share";
import HomeTable from "./components/table";
import HomeLast from "./components/last";
import TakeActionContent from '../Profileview/components/action';
import TakeActionHero2 from "../Profileview/components/hero2";
import { useLocation } from "react-router-dom";


const ProfileList = () => {
    const location = useLocation();
    const person = location.state;
    return (
        <Fragment>
            <TakeActionHero2 person={person}/>
            <TakeActionContent person={person}/>
            {/* <HomeStory/>
            <HomeCriminals/>
            <HomeExtortion/>
            <HomeMine/>
            <HomeShare/>
            <HomeTable/>
            <HomeLast/> */}
        </Fragment>
    );
};

export default ProfileList;