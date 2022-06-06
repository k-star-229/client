import {Button, Col, Grid, Layout, Row} from "antd";
import Container from "../../components/paper/container";
import CircleButton from "../../components/button/circle";
import {TwitterIcon} from "../../components/icons/social";
import Copyright from "../../components/paragraph/copyright";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {Fragment, useEffect, useState} from 'react';
import LogoText, {LogoTextLight} from "../styles/header/logo";


const {Footer} = Layout
const {useBreakpoint} = Grid;

const LayoutFooter = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const breakpoints = useBreakpoint();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateHandler = (data) => {
        console.log(data.key)
        setVisible(false);
        if (data.key !== '#arianna') {
            navigate(data.key)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })

        if (location.hash !== '#arianna') {
            window.scrollTo(0, 0)
        }

        return window.removeEventListener("scroll", () => {
        })
    }, [location])

    return (
        <Footer>
            <Container>
                <Row
                    align='middle'
                    justify='space-between'
                    gutter={[20, 12]}
                >
                    <Col lg={{span: 8}} span={24}>
                        <Row
                            gutter={20}
                            justify="center"
                            style={{justifyContent: breakpoints.lg ? "flex-start" : "center"}}
                        >
                            <Col>
                                <Button type='text' onClick={() => { navigate('/') }}>
                                Home
                                </Button>
                            </Col>
                            <Col>
                                <Button type='text' onClick={() => { navigate('/about') }}>
                                About
                                </Button>
                            </Col>
                            <Col>
                                <Button type='text' onClick={() => { navigate('/events') }}>
                                Events
                                </Button>
                            </Col>
                            <Col>
                                <Button type='text' onClick={() => { navigate('/take-action') }}> 
                                Take Action
                                </Button>
                            </Col>
                            <Col>
                                <Button type='text' onClick={() => { navigate('/donate') }} >
                                Donate
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span: 8}} span={24}>
                        <Row
                            justify='center'
                        >
                            <Col>
                                <CircleButton
                                    target='_blank'
                                    href='https://twitter.com/freearianna'
                                >
                                    <TwitterIcon width={22} color='#ffffff'/>
                                </CircleButton>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span: 8}} span={24}>
                        <Row
                            justify='center'
                            gutter={20}
                            style={{justifyContent: breakpoints.lg ? "flex-end" : "center"}}
                        >
                            <Col>
                                <Copyright>Copyright © Free Arianna 2022</Copyright>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

export default LayoutFooter;