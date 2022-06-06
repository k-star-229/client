import React from 'react';
import FightMainWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"


const FightMain = () => {
    return (
        <FightMainWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    {/* <SectionTitle>
                        The Fight Against Child Trafficking, Corruption, Fraud & Abuse
                    </SectionTitle> */}
                    <Row
                        gutter={[32, 32]}
                    >
                        <Col lg={{span: 17}} span={24}>
                            <Space
                                direction='vertical'
                                style={{width: '100%'}}
                                size={32}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        paddingTop: '56.25%',
                                    }}
                                >
                                    <iframe
                                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FADVOCATEUSA%2Fvideos%2F339240747959343%2F&show_text=false&width=560&t=0"
                                        width="100%"
                                        height="100%"
                                        style={{
                                            border: 'none',
                                            overflow: 'hidden',
                                            position: 'absolute',
                                            left: '0',
                                            top: '0'
                                        }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        allowFullScreen={true}
                                    />
                                </div>
                                <div>
                                    <CardTitle style={{textAlign: 'left'}}>
                                        Hollywood March For Kids
                                    </CardTitle>
                                    <P1>
                                        02/19/2022 - AdvocateTV's Susan Schofield Cabana, reporting
                                        #CrimesAgainstChildren LIVE from Hollywood Blvd & Vine St. Horrifying reports
                                        from Daya Baran about his daughter Arianna's child sex abuse and the cover up by
                                        California AG Rob Bonta, corrupt judge Cynthia Lie, unscrupulous fraudster BJ
                                        Fadem, Kathrina Ohde, extortionists Nathalie Ferro Da Costa, Kevin Boileau, Joe
                                        Perez, Shalini Venktash, child abusers Reshma Kumar, Vikaash Kumar & Canadian
                                        pedophile Ganraj Kumar.
                                    </P1>
                                </div>
                                <Row
                                    gutter={[20, 20]}
                                >
                                    <Col lg={{span: 12}} span={24}>
                                        <Card
                                            bordered={false}
                                            style={{textAlign: 'center'}}
                                            cover={<VideoPlayer url='https://youtu.be/dRygvFlcNg8'/>}
                                        >
                                            <CardTitle>
                                                Daddy Daughter Visit
                                            </CardTitle>
                                            <P1>
                                                Arianna's mother dropped off a little girl in the middle of a massive
                                                noisy Whole Foods and left. She was lost searching. Arianna is being
                                                used by her mother, Cynthia Lie, BJ Fadem, Nathelie Ferro and others as
                                                their ATM to extort money from her dad.
                                            </P1>
                                        </Card>
                                    </Col>
                                    <Col lg={{span: 12}} span={24}>
                                        <Card
                                            bordered={false}
                                            style={{textAlign: 'center'}}
                                            cover={<VideoPlayer url='https://youtu.be/KyUmKIzCueQ'/>}
                                        >
                                            <CardTitle>
                                                I Just Can't Stop Loving You
                                            </CardTitle>
                                            <P1>
                                                A perfect song for the perfect Priness by the iconic Michael Jackon. Me
                                                signing not as perfect as Jackson. It's hard to compete with a pro.
                                            </P1>
                                        </Card>
                                    </Col>
                                    <Col lg={{span: 12}} span={24}>
                                        <Card
                                            bordered={false}
                                            style={{textAlign: 'center'}}
                                            cover={
                                            <div style={{position: 'relative', paddingTop: '56.25%'}}>
                                                <img src={Img1} height={210} alt='' style={{position: 'absolute', height: '100%', top: '0', left: 0, width: '100%'}}/>
                                            </div>
                                            }
                                        >
                                            <CardTitle>
                                                Arianna's Painting
                                            </CardTitle>
                                            <P1>
                                                Picture perfect. Just beautiful.
                                            </P1>
                                        </Card>
                                        <Card
                                            bordered={false}
                                            style={{textAlign: 'center'}}
                                            cover={<img src={Img2} alt=''/>}
                                        >
                                            <CardTitle>
                                                Arianna Poster
                                            </CardTitle>
                                        </Card>
                                    </Col>
                                    <Col lg={{span: 12}} span={24}>
                                        <Card
                                            bordered={false}
                                            style={{textAlign: 'center'}}
                                            cover={<VideoPlayer url='https://youtu.be/JCaI5lmSPQY'/>}
                                        >
                                            <CardTitle>
                                                Free Arianna Movement Launch
                                            </CardTitle>
                                            <P1>
                                                02/19/2022 - LIVE from Hollywood Blvd & Vine St. Horrifying reports from
                                                Daya Baran about his daughter Arianna's child sex abuse and the cover up
                                                by California AG Rob Bonta, corrupt judge Cynthia Lie, unscrupulous
                                                fraudster BJ Fadem, Kathrina Ohde, extortionists Nathalie Ferro Da
                                                Costa, Kevin Boileau, Joe Perez, Shalini Venktash, child abusers Reshma
                                                Kumar, Vikaash Kumar & Canadian pedophile Ganraj Kumar.
                                            </P1>
                                        </Card>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                        <Col lg={{span: 7}} span={24}>
                            <ActionFormCard>
                                <CardTitle>
                                    20,904,371
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    Kids Abused By Courts
                                </CardTitle>
                                <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    <img src={Img3} alt=""/>
                                </a>
                                <CardTitle style={{marginBottom: 32}}>
                                    <a
                                        rel='noreferrer'
                                        href='https://www.facebook.com/isaac.doe1'
                                        target='_blank'
                                    >
                                        #JusticeForCaasi
                                    </a>
                                </CardTitle>
                                <a
                                    rel='noreferrer'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    target='_blank'
                                >
                                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2516d02/2147483647/strip/true/crop/586x433+0+0/resize/586x433!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Ff7%2Fbd9258cc96bfb36e128c0b352ec1%2Fla-he-schizo01-kklbh5nc' alt=""/>
                                </a>
                                <CardTitle>
                                    <a
                                        rel='noreferrer'
                                        target='_blank'
                                        href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    >
                                        #JusticeForBohdi
                                    </a>
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </FightMainWrap>
    );
};

export default FightMain;