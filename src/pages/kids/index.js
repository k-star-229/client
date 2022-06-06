import React, {Fragment} from 'react';
import KidsHero from "./components/hero";
import KidsVideos from "./components/videos";
import KidsBanner from "./components/banner";
import KidsChart from "./components/chart";
import KidsCriminal1 from "./components/criminal1";
import KidsCriminal2 from "./components/criminal2";
import KidsCriminal3 from "./components/criminal3";
import KidsCriminal4 from "./components/criminal4";
import KidsCriminal5 from "./components/criminal5";
import KidsCriminal6 from "./components/criminal6";
import KidsCriminal7 from "./components/criminal7";
import KidsItem from "./components/item";
import Image1 from "../../assets/img/gk.png";
import Image2 from "../../assets/img/reshmakumar.png";
import Image3 from "../../assets/img/vk.png";
import Image4 from "../../assets/img/cynthialie.png";
import Image5 from "../../assets/img/bjfadem.jpg";
import Image6 from "../../assets/img/nathalie.jpg";
import Image7 from "../../assets/img/katrinaohde.png";
import Image8 from "../../assets/img/joeperez.jpg";
import Image9 from "../../assets/img/kevin.jpg";
import Image10 from "../../assets/img/shalinivenktash.png";

const KidsPage = () => {

    // const criminals = [
    //     {
    //         img: Image5,
    //         name: 'BJ Fadem',
    //         action: "BJ's mother wanted a boy so BJ had many sex surgeries to be a man. BJ despises men, kids and has spent his life destroying them."
    //     },
    //     {
    //         img: Image6,
    //         name: 'Nathalie Ferro',
    //         action: "An extortionist that profits by trolling family courts. Goes by numerous names to hide her fraudulent schemes."
    //     },
    //     {
    //         img: Image7,
    //         name: 'Katrina Ohde',
    //         action: "A corrupt district attorney in San Jose, Santa Clara County, California that has betrayed the public trust. Must be disbarred."
    //     },
    //     {
    //         img: Image8,
    //         name: 'Joe Perez',
    //         action: "A dirty cop on the take. Currently being sued for falslifying evidence that sent an innocent man to prison for 17 years."
    //     },
    //     {
    //         img: Image9,
    //         name: 'Kevin Boileau',
    //         action: "Disbarred in Washington but licensed in California as an expert in women for raping and extorting money from women."
    //     },
    //     {
    //         img: Image10,
    //         name: 'Shalini Venktash',
    //         action: "Writes false court orders for corrupts lawyers to seperate kids and parents to extract every penny from parents to see their kids."
    //     }
    // ]

    return (
        <Fragment>
            <KidsHero/>
            <KidsVideos/>
            <KidsBanner/>
            <KidsChart/>
            <KidsCriminal1/>
            <KidsCriminal2/>
            <KidsCriminal3/>
            <KidsCriminal4/>
            <KidsCriminal5/>
            <KidsCriminal6/>
            <KidsCriminal7/>
            {/* {
                criminals.map((criminal, key)=>(
                    <KidsItem person={criminal} key={key}/>
                ))
            } */}
        </Fragment>
    );
};

export default KidsPage;