import React,{useState,useEffect} from 'react';
import {AriannaMainWrap,UserList,PersonName,PersonFullName ,LicenseString,ActionContent}from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import USAMap from "react-usa-map";
import states from "./states.json";
import { useDispatch,connect } from 'react-redux';
import { findProfile } from '../../../../redux/action-creators/users';
import {Link,useNavigate} from "react-router-dom";
import state_address from "../../../Profileview/components/hero2/address.json"
import P1 from "../../../../components/paragraph"

const AriannaMain = () => {
    // const color = "red"
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [usa, setUsa] = useState([])
    const [userData, setUserData] = useState([])
    const [something, setSomething] = useState({})
    useEffect(() => {
        setUsa(states);
        statesFilling();
    },[usa])
    const mapHandler = async(event) => {
        const address = event.target.dataset.name;
        await dispatch(findProfile(address,setUserData));
        var result=state_address.filter(obj=> obj.abbreviation == address );
        navigate('/profilelist/'+result[0].name,{ state: address })
        
    };
    const statesFilling = () => {

        usa.map((state, i) => {
       

          const { abbreviation, name } = state.attributes;
          let fill = "#C8102E";
          if (name.includes("k")) {
            fill = "#21B205";
          } else if (name.includes("x")) {
            fill = "#DDAC04";
          }

          setSomething(something[abbreviation] = {
            fill:fill,
            clickHandler: () => alert(`Hey This is sam! ${name} is your hfghfghfgh`)
          })
          
        });

        return { something };
      };

    return (
        <AriannaMainWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span: 17}} span={24}>
                            <ActionFormCard style={{backgroundColor: 'white'}}>
                                <CardTitle style={{marginBottom: 32}}>
                                    Ongoing Recalls
                                    {/* <img src="https://happywall-img-gallery.imgix.net/8533/usa_map_in_fun_colors_display.jpg"></img> */}
                                    <USAMap customize={something} onClick={mapHandler}  />
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                        <Col lg={{span: 7}} span={24}>
                            <ActionFormCard>
                                <CardTitle style={{marginBottom: 32}}>
                                    {/* <Link to='/profileeditor'> */}
                                    <Link to='/create'>
                                    Start Recall
                                    </Link>
                                </CardTitle>
                               
                                <CardTitle style={{marginBottom: 32}}>
                                    {userData.map((person,index) =>(
                                        <UserList key={index}>
                                        <img
                                            src={person.user_avatar}
                                            alt={person.name}
                                            width={100}
                                            height={100}
                                            style={{
                                                borderRadius: 200,
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div style={{width:'100%'}}>
                                            <div>
                                                <h3>{person.full_name}</h3>
                                                <P1></P1>
                                                <P1>{person.country},&nbsp;{person.state}</P1>
                                                <P1>Licence #: {person.license}</P1>
                                                <P1>Case: {person.case_name}</P1>
                                                {/* <P1>
                                                    {person.page_title}
                                                </P1> */}
                                            </div>
                                            <ActionContent>
                                                {person.page_contents.slice(0, 200)}... ... ...
                                            </ActionContent>
                                        </div>
                                        <div> </div>
                                        {/* <div style={{width:'*'}}><TakeActionForm person={person}/></div> */}
                                        </UserList>
                                    ))}
                                
                               
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaMainWrap>
    );
};

const mapStateToProps = state => {
    return {
    
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        findProfile: (address, setUserData) => dispatch(findProfile(address, setUserData))
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AriannaMain);