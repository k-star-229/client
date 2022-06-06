import React from 'react';
import Container from "../../../../components/paper/container";
import Image1 from '../../../../assets/img/cynthialie.png'
import {Avatar, Card, Col, Row, Space} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Cover1 from "../../../../assets/pdf/bj1.jpg";
import Cover2 from "../../../../assets/pdf/nathalieferro2.jpg";
import Cover3 from "../../../../assets/pdf/nathalieferro1.jpg";
import Cover4 from "../../../../assets/pdf/reshmakumar-fraud.jpg";
import CardTitle from "../../../../components/heading/card";
import KidsItemWrap from "./style/wrap";


const data = [
    {
        cover: Cover1,
        pdf: `${window.location.origin}/pdf/bj1.pdf`,
        title: 'Rape Charges',
        items: [
            'Rape charges',
        ]
    }, {
        cover: Cover2,
        pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
        title: 'Extortion Charges',
        items: [
            'test',
        ]
    }, {
        cover: Cover3,
        pdf: `${window.location.origin}/pdf/nathalieferro1.pdf`,
        title: 'Bribery Charges',
        items: [
            'test',
        ]
    }, {
        cover: Cover4,
        pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
        title: 'Sexual Abuse',
        items: [
            'test',
        ]
    }
]


const KidsItem = ({person}) => {

    return (
        <KidsItemWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    <Media>
                        <Avatar src={person.img} size={200}/>
                        <div>
                            <h3>
                                {person.name}
                            </h3>
                            <P1>
                                {person.action}
                            </P1>
                        </div>
                    </Media>
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
                </Space>
            </Container>
        </KidsItemWrap>
    );
};

export default KidsItem;