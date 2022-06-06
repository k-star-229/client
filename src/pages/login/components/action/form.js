import React, {useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message} from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";
import {useNavigate} from "react-router-dom";

const {Item, useForm} = Form;

const TakeActionForm = () => {

    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const onFinish = (values) => {
        navigate('/profileeditor');
        console.log('Finish:', values);
      };
    
      return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}
                    >
                        <div>
                            <Form
                                layout='vertical'
                                form={form}
                                initialValues={{ require: true, }} 
                                onFinish={onFinish}
                            >
                                <Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Email'/>
                                </Item>
                                <Item
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter Password'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Password'/>
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
                                        <p style={{textAlign: 'center', color: 'black'}}>Login</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div>
                        
                    </div>
                )
            }
        </ActionFormCard>
    );
};

export default TakeActionForm;