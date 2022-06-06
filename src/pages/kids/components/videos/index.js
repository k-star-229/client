import React from 'react';
import VideoPlayer from "../../../../components/player";
import KidsVideosWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../components/paragraph";

import BlackMenSavedImage from '../../../../assets/img/blackmensaved.png'

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
                    <Row
                        gutter={[20, 20]}
                    >
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/0DcN6wNKxZA'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/xq-JrH5tAnw'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/4BFxWLa5qu4'}/>
                        </Col>
                    </Row>
                    <div>
                        <P1>
                            Joe Biden, has spent his entire life profiting by separating black kids from their parent's, removing father's from homes with his VAWA bill, destroying and decimating families with his Crime Bill all sponsored by the Industrial Prison Complex. Now he is using emergency powers to vaccinate kids on behalf of BIG Pharma. He has done every despicable, vile, inhumane, racist act to make for profit. In 1994, Joe Biden struck gold with the 
                            <a href='https://www.vox.com/policy-and-politics/2019/6/20/18677998/joe-biden-1994-crime-bill-law-mass-incarceration' target='_blank'> 1994 Crime Bill, the largest Crime Bill in US history</a>. More blacks have been locked up under Joe Biden's Crime Bill than All of SLAVERY!
                        </P1>
                        <P1>
                            Joe Biden, was the Private Industrial Prison Complex's salesman in Washington. He used his position to write legislation that profited the Industrial Prison Complex. The legislation forcibly locked up innocent people for profit. The legislation was used as a vehicle to transfer tax payer dollars, $12 billion in 1994, to the Industrial Prison Complex. To date as much as $1 Trillion in public taxpayer funds have been transferred.
                        </P1>
                        <P1>
                            Joe Biden's, Crime Bill targeted <b>black males</b> because they are easy targets, easy money for the Industrial Prison Complex, who in turn pay Joe Biden. Here are some of the black men that have had their lives and their childrens' lives destroyed and their families decimated by Joe Biden's 1994 Crime Bill.
                        </P1>
                        <P1>
                            <img src={BlackMenSavedImage} alt="Black men lockedup by Joe Biden's Crime Bill and VAWA"/>
                        </P1>
                    </div>
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;