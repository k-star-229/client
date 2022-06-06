import React, {Fragment} from 'react'
import EventsHero from "./components/hero";
import EventsContent from "./components/action";


export const EventsPage = () => {
    return (
        <Fragment>
            <EventsHero/>
            <EventsContent/>
        </Fragment>
    )
}

export default EventsPage