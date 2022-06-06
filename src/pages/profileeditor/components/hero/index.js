import React, {Fragment} from 'react';
import RecallHeroWrap from "./style/wrap";
import RecallHeroText from "./style/text";
import Container from "../../../../components/paper/container";
import BloodImage from '../../../../assets/img/cynthialie2.png';

const RecallHero = () => {
    return (
        <Fragment>
            <RecallHeroWrap>
                <Container>
                    <RecallHeroText>
                        Cynthia Lie Runs A Criminal Enterprise Using The Courts Profiting From Pedophiles, False Domestic
                        Violence, Tears Families Apart, Extorts Their Money, Destroys Kids & Hides Behind Judicial Immunity
                    </RecallHeroText>
                </Container>
            </RecallHeroWrap>
            <img src={BloodImage} alt="" style={{width: '100%', height: 150}}/>
        </Fragment>
    );
};

export default RecallHero;