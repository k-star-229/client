import React from 'react';
import TakeActionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import TakeActionForm from "./form";

const TakeActionContent = () => {
    return (
        <TakeActionWrap>
            <Container>
                <Row
                    gutter={[40, 52]}
                >
                    <Col lg={{span: 8}} span={24}>
                        
                    </Col>
                    <Col lg={{span: 8}} span={24}>
                        <TakeActionForm/>
                    </Col>
                    <Col lg={{span: 8}} span={24}>

                    </Col>
                </Row>
            </Container>
        </TakeActionWrap>
    );
};

export default TakeActionContent;