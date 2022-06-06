import React, {useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message} from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";
import SectionTitle from "../../../../components/heading/section";
import LogoText from "../../../../layouts/styles/header/logo";
import Banner1 from '../../../../assets/img/arianna-poster300.jpg'
import {useNavigate} from "react-router-dom";

const {Item, useForm} = Form;

const TakeActionForm = () => {
    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const finishHandler = (data) => {
        setLoading(true)
        //TODO: SNS SERVICE SETTINGS
        const params = {
            Protocol: 'email',
            TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
            Endpoint: data.email,
        };

        snsClient.send(new SubscribeCommand(params))
            .then((res) => {
                console.log(res, "SUCCESS")
            })
            .catch((err) => {
                console.log(err, 'ERROR');
                setSuccess(true);
            })
            .finally(()=>{
                setLoading(false);
                form.resetFields();
            })

        const phoneParams = {
            Protocol: 'sms',
            TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
            Endpoint: data.phone,
        };

        setLoading(true)
        snsClient.send(new SubscribeCommand(phoneParams))
            .then((res) => {
                console.log(res, "SUCCESS")
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err, 'ERROR')
            })
            .finally(()=>{
                setLoading(false);
                form.resetFields();
            })

    }
    return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}
                    >
                        {/* <Progress
                            percent={403/500*100}
                            strokeWidth={20}
                            showInfo={false}
                            strokeColor='#CE3DAF'
                        />
                        <p style={{textAlign: 'center'}}>403 of 500 signatures</p>
                        <Button
                            type='primary'
                            size='large'
                            block
                            htmlType='submit'
                            loading={loading}
                            onClick={()=>{navigate('/recallnow')}} 
                            disabled={!checked}
                        >
                            <p style={{textAlign: 'center', color: 'black'}}>Sign Petition</p>
                            
                        </Button> */}
                        <div>
                            <h2>Post Event</h2>
                            <Form
                                layout='vertical'
                                onFinish={finishHandler}
                                form={form}
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
                                    <Input size='large' placeholder='Event Name'/>
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
                                    <Input size='large' placeholder='Event Date'/>
                                </Item>
                                <Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Time'/>
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
                                    <Input size='large' placeholder='Venue / Online'/>
                                </Item>
                                <Item
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Phone number is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Category'/>
                                </Item>
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
                                    >
                                        <p style={{textAlign: 'center', color: 'black'}}>Submit</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div>
                        {/* <SectionTitle>
                            <b>Thank You</b>
                        </SectionTitle> */}
                        {/* <h3>
                            For signing my petition, I will send you periodic updates.
                        </h3> */}
                        {/* <LogoText style={{color: '#CE3DAF', marginBottom: 24}}>
                            Love Arianna
                        </LogoText> */}
                        {/* <img src={Banner1} alt="" style={{marginBottom: 32}}/>
                        <Button type='primary' size='large' onClick={()=>{navigate('/donate')}}>
                            DONATE
                        </Button> */}
                    </div>
                )
            }
        </ActionFormCard>
    );
};

export default TakeActionForm;