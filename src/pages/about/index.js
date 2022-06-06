import React, {Fragment} from 'react';
import AboutMain from "./components/main";
import KidsHero from "./components/hero";

const AboutPage = () => {
    return (
        <Fragment>
            <KidsHero/>
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;