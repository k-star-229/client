import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";
import address from "./address.json"
const KidsHero = ({person}) => {
    console.log('person',person)
    var result=address.filter(obj=> obj.abbreviation == person );
    console.log("result",result[0].name)
    return (
        <KidsHeroWrap>
            <Container>
                <SectionTitle>
                 <br></br>
                </SectionTitle>
                <h4>{result[0].name} Recall</h4>
                <h1>
                <br></br>
                </h1>
            </Container>
        </KidsHeroWrap>
    );
};
export default KidsHero;