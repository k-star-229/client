import React, {useState, useEffect} from 'react';
import TakeActionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import { useDispatch,connect } from 'react-redux';
import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/cynthialie.png'
import Image2 from '../../../../assets/img/bjfadem.jpg'
import Image3 from '../../../../assets/img/nathalie.jpg'
import Image4 from '../../../../assets/img/katrinaohde.png'
import Image5 from '../../../../assets/img/joeperez.jpg'
import Image6 from '../../../../assets/img/kevin.jpg'
import Image7 from '../../../../assets/img/shalinivenktash.png'
import TakeActionForm from "./form";
import { setUserList } from '../../../../redux/action-creators/users';
import { findProfile } from '../../../../redux/action-creators/users';



const TakeActionContent = ({
    person
}) => {
    const dispatch = useDispatch();
    

    const [userData, setUserData] = useState([])

  useEffect(()=>{
     dispatch(findProfile(person,setUserData));

  },[])

    return (
        <TakeActionWrap>
            <Container>
                <Row
                    gutter={[40, 52]}
                >
                    <Col lg={{span: 24}} span={24}>
                        <Space
                            direction='vertical'
                            size={42}
                            style={{width:'100%'}}
                        >
                            {
                                userData.map((person, index) => (
                                    <TakeActionItem key={index} person={person}/>
                                ))
                            }
                        </Space>
                    </Col>
                    {/* <Col lg={{span: 7}} span={24}>
                        <TakeActionForm/>
                    </Col> */}
                </Row>
            </Container>
        </TakeActionWrap>
    );
};

const mapStateToProps = state => {
    return {
      users: state.users.users
    };
  };
const mapStateToDispatch = dispatch => {
    return {
      setUserList: () => dispatch(setUserList())
    };
  };

  export default connect(
    mapStateToProps,
    mapStateToDispatch
  )(TakeActionContent);