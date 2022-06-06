import React, {Fragment} from 'react';
import AriannaMain from "./components/main";
import KidsHero from "./components/hero";

const AriannaPage = () => {
    return (
        <Fragment>
            <KidsHero/>
            <AriannaMain/>
        </Fragment>
    );
};

export default AriannaPage;