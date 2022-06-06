import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <h4>Free Arianna Movement</h4>
                <SectionTitle>
                A Voice For The Voiceless 
                </SectionTitle>
                <h5>
                Fighting Against Corruption, Fraud, Abuse of Power
                </h5>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;