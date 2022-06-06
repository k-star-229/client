import React, {Fragment,useState, useEffect} from 'react';
import { connect } from 'react-redux';

import RecallHeroWrap from "./style/wrap";
import RecallHeroText from "./style/text";
import Container from "../../../../components/paper/container";
import BloodImage from '../../../../assets/img/cynthialie2.png';
import { getProfile, setUserList } from '../../../../redux/action-creators/users';

const RecallHero = ({person,getProfile}) => {

    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        full_name: '',
        license: '',
        signatures_Require: '',
        case_name:'',
        email:'',
        zipcode:0,
        address:'',
        phone:0,
        state:'',
        country: '',
        user_avatar:'',
        page_title:'',
        page_contents:'',
        pdf1:'',
        pdf1_title:"",
        pdf2_title:"",
        pdf3_title:"",
        pdf4_title:"",
        pdf2:'',
        pdf3:'',
        pdf4:'',

    });
    useEffect(()=>{
        getProfile(person._id,setUserData);

    },[])
  
    

    return (
        <Fragment>
            <RecallHeroWrap>
                <Container>
                    <RecallHeroText>
                        {userData.page_title.slice(0, 200)}
                    </RecallHeroText>
                </Container>
            </RecallHeroWrap>
            <img src={BloodImage} alt="" style={{width: '100%', height: 150}}/>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
      // use this user in file check whether the file be changed in the very bottom
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
  )(RecallHero);