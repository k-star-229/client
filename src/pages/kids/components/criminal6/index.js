import React, {Fragment} from 'react';
import Wrap, {Wrap0, Wrap1} from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import Image1 from '../../../../assets/img/joeperez.jpg'
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Cover1 from "../../../../assets/img/joeperez.png"
import CardTitle from "../../../../components/heading/card";

const data = [
    {
        cover: Cover1,
        pdf: `https://www.mercurynews.com/2020/06/29/san-jose-man-exonerated-after-17-years-behind-bars-sues-for-wrongful-conviction/`,
        title: 'Man Framed by Corrupt Cop Exonerated After 17 Years',
        items: [
            'Rape charges'
        ]
     }, //{
    //     cover: Cover2,
    //     pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
    //     title: 'Extortion Charges',
    //     items: [
    //         'jkjk jkkjkjkjkl',
    //     ]
    // }, {
    //     cover: Cover3,
    //     pdf: `${window.location.origin}/pdf/kevinboileau1.pdf`,
    //     title: 'Bribery Charges',
    //     items: [
    //         'tjkjkj j jkjkjlest',
    //     ]
    // }, {
    //     cover: Cover4,
    //     pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
    //     title: 'Sexual Abuse',
    //     items: [
    //         'test',
    //     ]
    // }
]

const KidsCriminal6 = () => {

    return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Media>
                        <Avatar src={Image1} size={200}/>
                        <div>
                            <h3>
                                Joe Perez
                            </h3>
                            <P1>
                            A dirty cop on the take. Currently being sued for falslifying evidence that sent an innocent man to prison for 17 years.
                            </P1>
                        </div>
                    </Media>
                    {/* <P1>
                        On June 13, 2015, I witnessed Ganraj Kumar sexually molest my daughter Arianna, who was 1.5
                        
                    </P1>
                    <P1>
                        Lie is using the courts to get revenge against men, against fathers', against kids, against
                        
                    </P1> */}
                </Container>
            </Wrap1>
            <Container style={{marginTop: 21}}>
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
                                            <img src={dat.cover} height={ 'auto' } style={{objectFit: 'cover', width: '100%'}} alt=""/>
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
            </Container>
        </Fragment>
    );
};

export default KidsCriminal6;