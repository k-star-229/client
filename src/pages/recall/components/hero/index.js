import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <h4>Start A Recall</h4>
                {/* <SectionTitle>
                It is Your duty to Recall corrupt frauds, profiting by destroying lives under the pretense of serving the public. 
                </SectionTitle> */}
                <h5>
                It's your duty to recall corrupt frauds profiting by destroying lives under the pretense of serving them.
                <p style={{textAlign: 'center', color: 'black'}}><i>- Daya Baran</i></p>
                </h5>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;