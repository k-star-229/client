import React, {useEffect, useState} from 'react';
import HomeHeroWrap from "./style/wrap";
import BgImage from '../../../../assets/img/arianna-poster600.jpg'
import HeroTitle, {HeroSubtitle} from "./style/title";
import HeroCount from "./style/count";
import Container from "../../../../components/paper/container";

const HomeHero = () => {
    const [child, setChild] = useState(21024032);

    useEffect(()=>{
        const startTime = 1638044206231;
        const interval = setInterval(() => {
            var secFromStart = (Date.now() - startTime) / 1000;
            var numChild = Math.round(secFromStart / 9) + 20000000;
            setChild(numChild);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <HomeHeroWrap
            style={{backgroundImage: `url(${BgImage})`}}
        >
            <Container>
                <HeroTitle>
                    Every 60 seconds a child and parent are separated by US Family Courts for profit.
                </HeroTitle>
                <HeroCount>
                    {child.toLocaleString()}
                </HeroCount>
                <HeroSubtitle>
                    Children seperated from Parents for Profit
                </HeroSubtitle>
            </Container>
        </HomeHeroWrap>
    );
};

export default HomeHero;