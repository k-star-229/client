import React, {Fragment,useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Wrap1} from "./style/wrap";
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Container from "../../../../components/paper/container";
import TakeActionForm from "./form";
import CardTitle from "../../../../components/heading/card";
import { getProfile } from '../../../../redux/action-creators/users';



const data = [
    {
        title: 'Rape Charges',
    }, 
    {
        title: 'Extortion Charges',
    }, 
    {
        title: 'Bribery Charges',
    }, 
    {
        title: 'Sexual Abuse',
    }
]

const TakeActionContent = ({person}) => {
    const pdf1 = person.pdf1
    const pdf2 = person.pdf2
    const pdf3 = person.pdf3
    const pdf4 = person.pdf4
    const open_data_url_window = (base64Data) => {

            var iframe = "<iframe width='100%' height='100%' src='" + base64Data + "'></iframe>"
            var x = window.open();
            x.document.open();
            x.document.write(iframe);
            x.document.close();
    }  
      
return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Row gutter={[40, 52]} >
                    <Col lg={{span: 17}} span={24}>
                    <Media>
                        <Avatar src={person.user_avatar} size={200}/>
                        <div>
                            <h3>
                                {person.full_name}
                            </h3>
                            <p>{person.state}&nbsp;&nbsp;&nbsp;{person.country}&nbsp;&nbsp;&nbsp;{person.license}&nbsp;&nbsp;{person.case_name}</p>
                            <P1>
                                {person.page_title}
                            </P1>
                        </div>
                    </Media>
                    <P1 style={{paddingTop: '20px'}}>
                        {person.page_contents}
                    </P1>
                    </Col>
                    <Col lg={{span: 7}} span={24}>
                        <TakeActionForm person={person} />
                    </Col>
                    </Row>
                </Container>
            </Wrap1>
            <Container style={{marginTop: 21}}>
                <Row
                    gutter={[40, 40]}
                >
                    {/* {
                        data.map((dat, key) => ( */}
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={person.pdf1}
                                        >
                                            <embed src={person.pdf1} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle onClick={ () => open_data_url_window(pdf1)} style={{color: "rgb(206, 61, 175)",cursor: "pointer"}}>
                                            {person.pdf1_title}
                                    </CardTitle>
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={person.pdf2}
                                        >
                                            <embed src={person.pdf2} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle onClick={ () => open_data_url_window(pdf2)} style={{color: "rgb(206, 61, 175)",cursor: "pointer"}}>
                                            {person.pdf2_title}
                                    </CardTitle>
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={person.pdf3}
                                        >
                                            <embed src={person.pdf3} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle onClick={ () => open_data_url_window(pdf3)} style={{color: "rgb(206, 61, 175)",cursor: "pointer"}}>
                                            {person.pdf3_title}
                                    </CardTitle>
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={person.pdf4}
                                        >
                                            <embed src={person.pdf4} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle onClick={ () => open_data_url_window(pdf4)} style={{color: "rgb(206, 61, 175)",cursor: "pointer"}}>
                                            {person.pdf4_title}
                                    </CardTitle>
                                </Card>
                            </Col>
                            
                        {/* ))
                    } */}
                </Row>
            </Container>
        </Fragment>
    );
};


const mapStateToProps = state => {
    return {
    
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getProfile: (id, setUserData) => dispatch(getProfile(id, setUserData))
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TakeActionContent);