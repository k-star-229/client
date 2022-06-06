import React from 'react';
import EventsWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const EventsHero = () => {
    return (
        <EventsWrap>
            <Container>
                <SectionTitle>
                    Campaign
                </SectionTitle>
                <h4>Events & Webinars</h4>
                <P1>
                    {/* Text */}
                </P1>
            </Container>
        </EventsWrap>
    );
};

export default EventsHero;