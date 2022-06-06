import React from 'react';
import HomeMineWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";

import Image1 from '../../../../assets/img/dayabaranpoison.png'
// import Image2 from '../../../../assets/img/dayabaranabuse.png'

const HomeMine = () => {
    return (
        <HomeMineWrap>
            <Container>
                <SectionTitle>
                    I Was Poisoned to Prevent The Truth Getting Out
                </SectionTitle>
                <img src={Image1} alt=""/>
                <SectionTitle>
                    I Was an Abused Spouse
                </SectionTitle>
                {/* <img src={Image2} alt=""/> */}
            </Container>
        </HomeMineWrap>
    );
};

export default HomeMine;