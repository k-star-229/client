import React, {Fragment} from 'react'
import CreateHero from "./components/hero";
import CreateContent from "./components/action";


export const CreatePage = () => {
    return (
        <Fragment>
            <CreateHero/>
            <CreateContent/>
        </Fragment>
    )
}

export default CreatePage