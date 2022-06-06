import React, {useState,useEffect} from 'react';
import {ActionFormCard,AntSelect} from "./style/form-card";
import {Button, Checkbox,Popconfirm, Form, Input, Col, Row, Space,Modal, Upload , Select,message , } from "antd";
import {useNavigate} from "react-router-dom";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import addressData from './address.json';
import { UploadOutlined, PlusOutlined  } from '@ant-design/icons';

import { createProfile } from '../../../../redux/action-creators/users';
import { setAlert } from '../../../../redux/action-creators/alert';
// import { Loading, Alert } from './utils';

const {Item, useForm} = Form;
const { Option } = Select;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });



const TakeActionForm = ({  
    setAlert,
    createUser,
    alertContent,
    isLoading,
    error,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [createSuccess,setCreateSuccess] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([])
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');
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

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
  
    const handleImageChange = ({ fileList: newFileList }) => {setFileList(newFileList);
    if(fileList[0]){
        setUserData({ ...userData, user_avatar: fileList[0].thumbUrl });
    }
    

}
  
    const { firstname, lastname,full_name, email,case_name, license,zipcode, address,signatures_Require, phone, state, country,user_avatar,page_title,page_contents,pdf1_title,pdf2_title,pdf3_title,pdf4_title,pdf1,pdf2,pdf3,pdf4} = userData;
    const handleCreate = async(e) => {
        e.preventDefault();
        const createprofile = await dispatch(createProfile({ firstname, lastname,full_name,license,signatures_Require, case_name, email, address, zipcode, phone, state,country,user_avatar,page_title,page_contents,pdf1_title,pdf2_title,pdf3_title,pdf4_title,pdf1,pdf2,pdf3,pdf4 },navigate));
    };

  
    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const uploadButton = (
        <div>
        <PlusOutlined />
        <div
            style={{
            marginTop: 8,
            }}
        >
            Upload
        </div>
        </div>
    );
    const handleOnChange = (value, event) => {
        setUserData({ ...userData, state: value });      
    }
    const handleTextareaChange =(e)=>{
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const fileType=['application/pdf'];
    const pdfUpload = async(event)=>{
        
        let selectedFile=event.target.files[0];
       
        if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onloadend = (e) =>{
                    setUserData({ ...userData, [event.target.name]: e.target.result })
                    setPdfFileError('');
                    }
            }
            else{
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file');
            }
        }
        else{
        console.log('select your file');
        }
    }



    return (
        <ActionFormCard>
            <Space
                direction='vertical'
                size={100}
                style={{width: '100%'}}>
                <div>
                    <h2>Recall Entry Form</h2>
                    <Form
                        layout='vertical'
                    >
                        <div>
                            <h2>Banner Text</h2>
                            <textarea name="page_title" value={page_title} onChange={e => handleTextareaChange(e)} style={{width:"100%"}}/>
                        </div>
                        <Space>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleImageChange}
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>

                        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img
                            alt="example"
                            style={{
                                width: '100%',
                            }}
                            src={previewImage}
                            />
                        </Modal>
                        <Item
                            name='country'
                            rules={[
                                {
                                    required: true,
                                    message: 'required'
                                }
                            ]}
                        >
                            <Input size='large' name='country'  value={country} onChange={e => handleChange(e)} placeholder='Country'/>
                        </Item>
                        {/* <Item
                            name='state'
                            rules={[
                                {
                                    required: true,
                                    message: 'required'
                                }
                            ]}
                        >
                            <Input size='large' name='state'  value={state} onChange={e => handleChange(e)} placeholder='State'/>
                        </Item> */}
                        <AntSelect name="user_state" style={{ width: "200px",height:"44px" }}  onSelect={(value, event) => handleOnChange(value, event)} placeholder="Please select a State">
                                    { addressData.map((data,index) =>(
                                            <Option value={data.name} name="user_state" key={index}>{data.name}</Option>
                                        ))
                                    }
                                        
                        </AntSelect>
                        </Space>
                            <Space >
                            <Item
                            name='full_name'
                            rules={[
                                {
                                    required: true,
                                    message: 'required'
                                }
                            ]}
                        >
                            <Input size='large' name='full_name'  value={full_name} onChange={e => handleChange(e)} placeholder='Full Name'/>
                        </Item>
                        <Item
                            name='signatures_Require'
                            rules={[
                                {
                                    required: true,
                                    message: 'required'
                                }
                            ]}
                        >
                            <Input size='large' name='signatures_Require'  value={signatures_Require} onChange={e => handleChange(e)} placeholder='Signatures Require'/>
                        </Item>
                        <Item
                            name='license'
                            rules={[
                                {
                                    required: true,
                                    message: 'license is required'
                                }
                            ]}
                        >
                            <Input size='large' name='license'  value={license} onChange={e => handleChange(e)} placeholder='License'/>
                        </Item>
                        <Item
                            name='case_name'
                            rules={[
                                {
                                    required: true,
                                    message: 'case_name is required'
                                }
                            ]}
                        >
                            <Input size='large' name='case_name'  value={case_name} onChange={e => handleChange(e)} placeholder='Case'/>
                        </Item>
                        </Space>
                        <div>
                            <h2>Page Contents</h2>
                            <textarea name="page_contents" value={page_contents}  onChange={e => handleTextareaChange(e)} style={{width:"100%",height:"200px"}}/>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <Space>
                            <Input size='large' name='pdf1_title'  value={pdf1_title} onChange={e => handleChange(e)} placeholder='Pdf1 Title'/>
                            <input type="file" name="pdf1" onChange={e=>pdfUpload(e)} />
                            <Input size='large' name='pdf2_title'  value={pdf2_title} onChange={e => handleChange(e)} placeholder='Pdf2 Title'/>
                            <input type="file" name="pdf2" onChange={e=>pdfUpload(e)} />
                        </Space>
                        <Space>
                            <Input size='large' name='pdf3_title'  value={pdf3_title} onChange={e => handleChange(e)} placeholder='Pdf3 Title'/>
                            <input type="file" name="pdf3" onChange={e=>pdfUpload(e)} />
                            <Input size='large' name='pdf4_title'  value={pdf4_title} onChange={e => handleChange(e)} placeholder='Pdf4 Title'/>
                            <input type="file" name="pdf4" onChange={e=>pdfUpload(e)} />
                        </Space>
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
                                <p style={{textAlign: 'center', color: 'black'}}>Save Profile Settings</p>
                            </Button>
                        </Item>
                    </Form>
                </div>
            </Space>
        </ActionFormCard>
    );
};

const mapStateToProps = state => {
    return {
      createSuccess: state.createProfile.success,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      createProfile: (data, navigate) => dispatch(createProfile(data,navigate))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TakeActionForm);