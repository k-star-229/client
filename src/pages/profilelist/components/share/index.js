import React from 'react';
import Container from "../../../../components/paper/container";
import HomeShareWrap from "./style/wrap";
import SectionTitle from "../../../../components/heading/section";
import CircleButton from "../../../../components/button/circle";
import {TwitterIcon} from "../../../../components/icons/social";
import {Button, Space} from "antd";

const HomeShare = () => {
    return (
        <Container>
            <HomeShareWrap>
                <SectionTitle style={{color: '#000'}}>
                    #FreeArianna "Lock Up These Criminals"
                </SectionTitle>
                <Space
                    direction='vertical'
                    align='center'
                    style={{width: '100%'}}
                >
                    <CircleButton
                        target='_blank'
                        href='https://twitter.com/intent/tweet?text=%23freearianna%20LOCKUP%20%23corrupt%20%23childabuse%20%23criminals%20%23cynthialie%20%23bjfadem%20%23nathalieferro%20%23katrinaohde%20%23kevinboileau%20%23joeperez%20%23reshmakumar%20%23ganrajkumar%20%23vikaashkumar%20%23frauds%20%23robbonta. Follow%20%40freearianna'
                    >
                        <TwitterIcon width={22} color='#ffffff'/>
                    </CircleButton>
                    <Button
                        type='text'
                        target='_blank'
                        href='https://twitter.com/intent/tweet?text=%23freearianna%20LOCKUP%20%23corrupt%20%23childabuse%20%23criminals%20%23cynthialie%20%23bjfadem%20%23nathalieferro%20%23katrinaohde%20%23kevinboileau%20%23joeperez%20%23reshmakumar%20%23ganrajkumar%20%23vikaashkumar%20%23frauds%20%23robbonta. Follow%20%40freearianna'
                    >
                        Share
                    </Button>
                </Space>
            </HomeShareWrap>
        </Container>
    );
};

export default HomeShare;