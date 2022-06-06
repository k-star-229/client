import React, {Fragment, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import {Button, Col, Drawer, Grid, Layout, Menu, Row} from "antd";
import Container from "../../components/paper/container";
import LogoText, {LogoTextLight} from "../styles/header/logo";
import HamburgerButton from "../../components/button/hamburger";
import {MenuOutlined} from "@ant-design/icons";

const {useBreakpoint} = Grid;
const {Header} = Layout

const LayoutHeader = () => {
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
        <Header style={(location.pathname === '/' && scroll < 150) ? {
            position: "absolute",
            width: '100%',
            backgroundColor: 'transparent'
        } : {}}>
            <Container>
                <Row
                    justify='space-between'
                    align='middle'
                >
                    <Col>
                        <LogoText>
                            <Link to='/'>
                                Free Arianna
                            </Link>
                        </LogoText>
                    </Col>
                    <Col>
                        {
                            breakpoints.lg ? (
                                <Row
                                    gutter={20}
                                >
                                    {/* <Col>
                                        <NavHashLink
                                            to="/#arianna"
                                        >
                                            <Button
                                                type='link'
                                                className={location.hash === '#arianna' && 'active'}>
                                                ARIANNA'S STORY
                                            </Button>
                                        </NavHashLink>
                                    </Col> */}
                                    <Col>
                                        <Button
                                            type='link'
                                            onClick={() => {
                                                navigate('/arianna')
                                            }}
                                            className={location.pathname === '/arianna' && 'active'}
                                        >
                                            ARIANNA'S STORY
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            type='link'
                                            onClick={() => {
                                                navigate('/kids')
                                            }}
                                            className={location.pathname === '/kids' && 'active'}
                                        >
                                            PROFITING FROM KIDS
                                        </Button>
                                    </Col>
                                    {/* <Col>
                                        <Button
                                            type='link'
                                            onClick={() => {
                                                navigate('/fight')
                                            }}
                                            className={location.pathname === '/fight' && 'active'}
                                        >
                                            THE FIGHT
                                        </Button>
                                    </Col> */}
                                    {/* <Col>
                                        <Button
                                            type='link'
                                            onClick={() => {
                                                navigate('/take-action')
                                            }}
                                            className={location.pathname === '/take-action' && 'active'}
                                        >
                                            TAKE ACTION
                                        </Button>
                                    </Col> */}
                                    <Col>
                                        <Button
                                            type='link'
                                            onClick={() => {
                                                navigate('/recall')
                                            }}
                                            className={location.pathname === '/recall' && 'active'}
                                        >
                                            RECALL
                                        </Button>
                                    </Col>
                                
                                    <Col>
                                        <Button
                                            type='primary'
                                            onClick={() => {
                                                navigate('/donate')
                                            }}
                                        >
                                            DONATE
                                        </Button>
                                    </Col>
                                </Row>
                            ) : (
                                <Fragment>
                                    <HamburgerButton
                                        type='primary'
                                        size='large'
                                        onClick={() => {
                                            setVisible(true)
                                        }}
                                    >
                                        <MenuOutlined/>
                                    </HamburgerButton>
                                    <Drawer
                                        visible={visible}
                                        onClose={() => {
                                            setVisible(false)
                                        }}
                                        title={
                                            <LogoTextLight onClick={() => {
                                                setVisible(false)
                                            }} style={{color: '#CE3DAF!important'}}>
                                                <Link to='/'>
                                                    Free Arianna
                                                </Link>
                                            </LogoTextLight>
                                        }
                                        closeIcon={<></>}
                                    >
                                        <Menu
                                            onClick={navigateHandler}
                                            selectedKeys={
                                                [...location.pathname.split('/'), ...location.hash.split(' ')]
                                            }
                                        >
                                            {/* <Menu.Item key='#arianna'>
                                                <NavHashLink to="/#arianna">
                                                    ARIANNA'S STORY
                                                </NavHashLink>
                                            </Menu.Item> */}
                                            <Menu.Item key='arianna'>
                                                <NavHashLink to="/arianna">
                                                    ARIANNA'S STORY
                                                </NavHashLink>
                                            </Menu.Item>
                                            <Menu.Item key='kids'>
                                                PROFITING FROM KIDS
                                            </Menu.Item>
                                            <Menu.Item key='fight'>
                                                THE FIGHT
                                            </Menu.Item>
                                            {/* <Menu.Item key='take-action'>
                                                TAKE ACTION
                                            </Menu.Item> */}
                                            <Menu.Item key='recall'>
                                                RECALL
                                            </Menu.Item>
                                            <Menu.Item key='profileeditor'>
                                                PROFILEEDITOR
                                            </Menu.Item>
                                            <Menu.Item key='donate' className='btn'>
                                                DONATE
                                            </Menu.Item>
                                        </Menu>
                                    </Drawer>
                                </Fragment>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </Header>
    );
};

export default LayoutHeader;