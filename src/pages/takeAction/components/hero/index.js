import React, {Fragment} from 'react';
import TakeActionHeroWrap from "./style/wrap";
import TakeActionHeroText from "./style/text";
import Container from "../../../../components/paper/container";
import BloodImage from '../../../../assets/img/cynthialie2.png';

const TakeActionHero = () => {
    return (
        <Fragment>
            <TakeActionHeroWrap>
                <Container>
                    <TakeActionHeroText>
                        Cynthia Lie Runs A Criminal Enterprise Using The Courts Profiting From Pedophiles & False Domestic
                        Violence, Destorying Kids, Extorting Money From Parents & Hiding Behind Judicial Immunity
                    </TakeActionHeroText>
                </Container>
            </TakeActionHeroWrap>
            <img src={BloodImage} alt="" style={{width: '100%', height: 150}}/>
        </Fragment>
    );
};

export default TakeActionHero;