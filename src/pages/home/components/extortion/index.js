import React from 'react';
import AriannaExtortionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
//import Cover1 from '../../../../assets/pdf/bj1.jpg'
//import Cover2 from '../../../../assets/pdf/nathalieferro2.jpg'
//import Cover3 from '../../../../assets/pdf/nathalieferro1.jpg'
//import Cover4 from '../../../../assets/pdf/reshmakumar-fraud.jpg'

const data = [
    {
        // cover: Cover1,
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/bjfadem1.pdf`,
        title: 'False Billing',
        items: [
            'Cynthia Lie (License #177986)',
            'Scott Reno (License #315247)'
        ]
    }, {
        // cover: Cover2,
        cover: 'pdf/nathalieferro2.pdf',
        pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
        title: 'Extortion Payments',
        items: [
            'Brenda Joy (BJ) Fadem (License #118819)',
            'Katrina Ohde (License #254049)'
        ]
    }, {
        //cover: Cover3,
        cover: `pdf/nathalieferro1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro1.pdf`,
        title: 'Committing Fraud Upon The Court',
        items: [
            'Nathalie Lezama Ferro (License #268398)',
            'Shalini Venktash (LMFT License #84805)'
        ]
    }, {
        //cover: Cover4,
        cover: `pdf/reshmakumar-fraud.pdf`,
        pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
        title: 'Fraud & Siphoning Assets',
        items: [
            'Kevin Boileau (License #131837)',
            'Joe Perez Corrupt San Jose Police'
        ]
    }
]

const HomeExtortion = () => {
    return (
        <AriannaExtortionWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    <SectionTitle>
                        Extortion Payments of $700,000
                    </SectionTitle>
                    <Row
                        gutter={[40, 40]}
                    >
                        {
                            data.map((dat, key) => (
                                <Col lg={6} md={12} sm={12} span={24} key={key}>
                                    <Card
                                        style={{textAlign: 'center'}}
                                        cover={
                                            <a
                                                rel="noreferrer"
                                                style={{display: 'block', width: '100%'}}
                                                target='_blank'
                                                href={dat.pdf}
                                            >
                                                <embed src={dat.cover} type="application/pdf" height={'300'} width={'100%'} />
                                                {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                            </a>
                                        }
                                        bordered={false}
                                        className='pdf-card'
                                    >
                                        <CardTitle>
                                            <a
                                                rel="noreferrer"
                                                href={dat.pdf}
                                                target='_blank'
                                            >
                                                {dat.title}
                                            </a>
                                        </CardTitle>
                                        {
                                            dat.items.map((item, index) => (
                                                <p key={`index${index}`}>
                                                    {item}
                                                </p>
                                            ))
                                        }
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Space>
            </Container>
        </AriannaExtortionWrap>
    );
};

export default HomeExtortion;