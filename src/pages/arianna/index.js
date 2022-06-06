import React, {Fragment} from 'react';
import AriannaHero from "../home/components/hero";
import AriannaStory from "../home/components/story";
import AriannaCriminals from "../home/components/criminals";
import AriannaExtortion from "../home/components/extortion";
import AriannaMine from "../home/components/mine";
import AriannaShare from "../home/components/share";
import AriannaTable from "../home/components/table";
import AriannaLast from "../home/components/last";

const AriannaPage = () => {
    return (
        <Fragment>
            {/* <AriannaHero/> */}
            <AriannaStory/>
            <AriannaCriminals/>
            <AriannaExtortion/>
            <AriannaMine/>
            <AriannaShare/>
            <AriannaTable/>
            <AriannaLast/>
        </Fragment>
    );
};

export default AriannaPage;