import React, {Fragment} from 'react';
import Wrap, {Wrap0, Wrap1} from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import Image1 from '../../../../assets/img/kevin.jpg'
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Cover1 from "../../../../assets/pdf/kb1.png";
import Cover2 from "../../../../assets/pdf/kb2.png";
import Cover3 from "../../../../assets/pdf/kb3.png";
import Cover4 from "../../../../assets/pdf/kb4.png";
import CardTitle from "../../../../components/heading/card";


const data = [
    {
        cover: Cover1,
        pdf: `${window.location.origin}/pdf/kevinboileau1.pdf`,
        title: 'Rape Charges',
        items: [
            'Rape charges',
        ]
    }, {
        cover: Cover2,
        pdf: `${window.location.origin}/pdf/kevinboileau2.pdf`,
        title: 'Extortion Charges',
        items: [
            'jkjk jkkjkjkjkl',
        ]
    }, {
        cover: Cover3,
        pdf: `${window.location.origin}/pdf/kevinboileau3.pdf`,
        title: 'Bribery Charges',
        items: [
            'tjkjkj j jkjkjlest',
        ]
    }, {
        cover: Cover4,
        pdf: `${window.location.origin}/pdf/kevinboileau4.pdf`,
        title: 'Sexual Abuse',
        items: [
            'test',
        ]
    }
]

const KidsCriminal4 = () => {

    return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Media>
                        <Avatar src={Image1} size={200}/>
                        <div>
                            <h3>
                                Kevin Boileau
                            </h3>
                            <P1>
                                Extortionist, is in serious and egregious civil rights and color of law violations. Lie
                                
                            </P1>
                        </div>
                    </Media>
                    <P1>
                        On June 13, 2015, I witnessed Ganraj Kumar sexually molest my daughter Arianna, who was 1.5
                        
                    </P1>
                    <P1>
                        Lie is using the courts to get revenge against men, against fathers', against kids, against
                        
                    </P1>
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
                                            <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/>
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

export default KidsCriminal4;