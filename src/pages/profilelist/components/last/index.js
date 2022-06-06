import React from 'react';
import HomeLastWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import Image from '../../../../assets/img/dayabaranarianna.png'

const HomeLast = () => {
    return (
        <HomeLastWrap>
            <Container>
                <SectionTitle>
                    Last Time I Saw Arianna - March 2020
                </SectionTitle>
                <img src={Image} alt="Daya And Arianna"/>
            </Container>
        </HomeLastWrap>
    );
};

export default HomeLast;