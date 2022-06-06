import React from 'react';
import HomeCriminalsWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import Image1 from '../../../../assets/img/gk.png'
import Image2 from '../../../../assets/img/reshmakumar.png'
import Image3 from '../../../../assets/img/vk.png'
import Image4 from '../../../../assets/img/cynthialie.png'
import Image5 from '../../../../assets/img/bjfadem.jpg'
import Image6 from '../../../../assets/img/nathalie.jpg'
import Image7 from '../../../../assets/img/katrinaohde.png'
import Image8 from '../../../../assets/img/joeperez.jpg'
import Image9 from '../../../../assets/img/kevin.jpg'
import Image10 from '../../../../assets/img/shalinivenktash.png'

const criminals = [
    {
        img: Image1,
        name: 'Ganraj Kumar',
        action: <p>Pedophile and Arianna's abuser. Claims to be a victim and hiding using domestic violence protection.<br/><a href='recall'>Sign Petition</a></p>
    },
    {
        img: Image2,
        name: 'Reshma Kumar',
        action: <p>Arianna's mother falsely claiming domestic violence to keep Ganraj Kumar out of jail to keep her inheritence.<br/><a href='recall'>Sign Petition</a></p>
    },
    {
        img: Image3,
        name: 'Vikaash Kumar',
        action: <p>Poisoned Arianna's dad Daya Baran so he would die and would not be able to testify against Ganraj Kumar.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image4,
        name: 'Cynthia Lie',
        action: <p>Corrupt judge colluded with pedophile's attorney & DA to cover up sexual abuse of Arianna for personal gain.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image5,
        name: 'BJ Fadem',
        action: <p>BJ's mom wanted a man. Has regular sex surgeries to be a man. Despises men, spends his life destroying men.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image6,
        name: 'Nathalie Ferro',
        action: <p>Extortionist that profits by trolling family courts. Goes by numerous names to hide her fraudulent schemes.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image7,
        name: 'Katrina Ohde',
        action: <p>A corrupt district attorney in San Jose, Santa Clara County, California that has betrayed the public trust. Must be disbarred.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image8,
        name: 'Joe Perez',
        action: <p>A dirty cop on the take. Currently being sued for falslifying evidence that sent an innocent man to prison for 17 years.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image9,
        name: 'Kevin Boileau',
        action: <p>Disbarred in Washington but licensed in California as an expert in women for raping and extorting money from women.<br/><a href='recallnow'>Sign Petition</a></p>
    },
    {
        img: Image10,
        name: 'Shalini Venktash',
        action: <p>Falsifies court orders for corrupts lawyers to seperate kids & parents, extort every penny from parents to see their kids.<br/><a href='recallnow'>Sign Petition</a></p>
    }
]

const HomeCriminals = () => {
    return (
        <HomeCriminalsWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
                    <SectionTitle>
                        Criminals Covering Up Sexual Abuse of Arianna
                    </SectionTitle>
                    <Row
                        gutter={[0, 32]}
                        justify='center'
                    >
                        {
                            criminals.map((criminal, key) => (
                                <Col xl={{span: 4}} md={{span: 7}} sm={{span: 16}} span={24} key={key} >
                                    <Card className='criminal-card' bordered={false}>
                                        <img src={criminal.img} alt={criminal.name}/>
                                        <h3>
                                            {criminal.name}
                                        </h3>
                                        <p>
                                            {criminal.action}
                                        </p>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Space>
            </Container>

        </HomeCriminalsWrap>
    );
};

export default HomeCriminals;