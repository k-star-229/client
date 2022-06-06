import React, {useEffect, useState} from 'react';
import {ActionFormCard, AntSelect} from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message,InputNumber, Select } from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";
import SectionTitle from "../../../../components/heading/section";
import LogoText from "../../../../layouts/styles/header/logo";
import Banner1 from '../../../../assets/img/arianna-poster300.jpg'
import {useNavigate} from "react-router-dom";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import addressData from './state.json';
import Donate from '../../../donate'
// import toast, { Toaster } from "https://cdn.skypack.dev/react-hot-toast@2.2.0";
// toast.success('Successfully Create!');
import { createUser,updateUser,findSigner,findEmailSignUser,findPhoneSignUser, initUser ,getProfile} from '../../../../redux/action-creators/users';
import { setAlert } from '../../../../redux/action-creators/alert';

// import { Loading, Alert } from './utils';

const {Item, useForm} = Form;
const { Option } = Select;

const TakeActionForm = ({  setAlert,
    person,
    alertContent,
    createSuccess,
    isLoading,
    error
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [profileUsers, setProfileUsers] = useState([]);
    const [success, setSuccess] = useState(false);
    const [emailStatue, setEmailStatue] = useState(false)
    const [phoneStatue, setPhoneStatue] = useState(false)
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        user_state:'',
        email:'',
        zipcode:0,
        address:'',
        phone:0,
        current_sign:0,
        person:""

    });

    useEffect(()=>{
    userData.person = person._id
    if(person.current_sign){
        userData.current_sign = person.current_sign;
    }
    dispatch(findSigner(person._id,setProfileUsers))
    if(userData.email!==""){
        dispatch(findEmailSignUser(userData,setEmailStatue))
    }
    if(userData.phone!==0){
        dispatch(findPhoneSignUser(userData,setPhoneStatue))
    }
    },[userData])
   
   
    const { firstname, lastname, email,zipcode,user_state, address, current_sign, phone} = userData;
  
  const handleCreate = (e) => {
    e.preventDefault();
    if(!emailStatue && !phoneStatue&& userData.user_state!==""){
        dispatch(createUser(userData,navigate));
        setSuccess(true);
    }


  };
  
  const handleChange = e => {
    
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
//   const handleSelect = e => {
//     setUserData({...userData,[address]:e.target.value});
//   };
  const handleOnChange = (value, event) => {
    setUserData({ ...userData, user_state: value });      
}
const zipValue = (value, event) => {
    setUserData({ ...userData, zipcode: value });      
}
const phoneValue = (value, event) => {
    setUserData({ ...userData, phone: value });      
}

    return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}>
                            <Progress
                            percent={profileUsers.length/person.signatures_Require*100}
                            strokeWidth={20}
                            showInfo={false}
                            strokeColor='#CE3DAF'
                        />
                        <p style={{textAlign: 'center'}}>{profileUsers.length} of {person.signatures_Require} signatures</p> 
                        <div>
                            <h2>Sign Petition</h2>
                            <Form
                                layout='vertical'
                                
                            >
                                <Item
                                    name='firstName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Firstname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='firstname' value={firstname} onChange={e => handleChange(e)} placeholder='First Name'/>
                                </Item>
                                <Item
                                    name='lastName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lastname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='lastname'  value={lastname} onChange={e => handleChange(e)} placeholder='Last Name'/>
                                </Item>
                                {(emailStatue) && <p style={{color:"red"}}>*This email is already signed</p>}

                                <Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='email' value={email} onChange={e => handleChange(e)} placeholder='Email'/>
                                </Item>
                                <Item
                                    name='zipcode'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Zipcode is required'
                                        }
                                    ]}
                                >
                                    
                                    <InputNumber size='large' name='zipcode' style={{width: '100%',height:44}}  value={zipcode} onChange={e => zipValue(e)} placeholder='Zip Code'/>
                                </Item>
                                {(phoneStatue) && <p style={{color:"red"}}>*This phone number is already signed</p>}
                                <Item
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Phone is required'
                                        }
                                    ]}
                                >
                                    <InputNumber size='large'maxLength={10} style={{width: '100%',height:44}}  name='phone'  value={phone} onChange={e => phoneValue(e)} placeholder='Phone Number'/>
                                </Item>
                                <Item
                                    name='address'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Address is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='address'  value={address} onChange={e => handleChange(e)} placeholder='Address'/>
                                </Item>
                                {(!userData.user_state) && <p style={{color:"red"}}>*Please select a State</p>}
                                <AntSelect name="user_state" style={{ width: "100%" }}  onSelect={(value, event) => handleOnChange(value, event)} placeholder="Please select a State">
                                    { addressData.map((data,index) =>(
                                            <Option value={data.name} name="user_state" key={index}>{data.name}</Option>
                                        ))
                                    }
                                </AntSelect>
                                <Item>
                                    <Checkbox
                                        onChange={(event) => {setChecked(event.target.checked)}}
                                    >
                                        Receive mobile alerts from VEEV App on behalf of FreeArianna.org. Recurring messages.
                                        Msg & data rates may apply. Text STOP to 668366 to stop receiving messages. Text HELP to
                                        668366 for more information.
                                        &nbsp;<a>Privacy</a>
                                    </Checkbox>
                                </Item>
                                <Item>
                                    <Button
                                        type='primary'
                                        size='large'
                                        block
                                        htmlType='submit'
                                        loading={loading}
                                        disabled={!checked}
                                        onClick={e => handleCreate(e)}
                                    >
                                        <p style={{textAlign: 'center', color: 'black'}}>Sign</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div style={{textAlign: 'center'}}>
                        <SectionTitle>
                            <Progress
                                percent={(profileUsers.length+1)/person.signatures_Require*100}
                                strokeWidth={20}
                                showInfo={false}
                                strokeColor='#CE3DAF'
                            />
                            <p style={{textAlign: 'center'}}>{profileUsers.length+1} of {person.signatures_Require} signatures</p> 
                        </SectionTitle>
                        {/* <LogoText style={{color: '#CE3DAF', marginBottom: 24}}>
                            Love Arianna
                        </LogoText> */}
                        {/* <img src={Banner1} alt="" style={{marginBottom: 32}}/> */}
                        <Button type='primary' size='large' onClick={()=>{navigate('/donate')}}>
                            Share
                        </Button>
                        <Donate />
                    </div>
                )
            }
            {/* <Toaster  position="top-right" /> */}
        </ActionFormCard>
    );
};

const mapStateToProps = state => {
    return {
      alertContent: state.alert.alertContent,
      createSuccess: state.createUser.createSuccess,
      isLoading: state.createUser.isLoading,
      error: state.createUser.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
   
      updateUser: (data, navigate) => dispatch(updateUser(data, navigate))
      
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TakeActionForm);