import React from 'react';
import { useState } from 'react';
import '../PublishForm.css'
import { Divider } from 'antd';
import { Select } from 'antd';
import { Card, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { Button } from 'antd';
import { Steps } from 'antd';
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';

const { TextArea } = Input;

const { Step } = Steps;

const { Title } = Typography;

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

function PublishForm() {

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        
      ]);
    
      const handleCancel = () => setPreviewVisible(false);

      const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
      };
    
      const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    
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
    
    let navigate = useNavigate(); 
    const publish = () =>{ 
        let path = `/shop`; 
        navigate(path);
    }
    const cancel = () =>{ 
        let path = `/website`; 
        navigate(path);
    }
    
    return (
    <div className="site-card-border-less-wrapper">
        
        <Card
        
        title={<Title level={3}>Please add at least one picture</Title>}
        bordered={false}
        style={{
            width: 1000,
        }}
        >
            
            <p className="left2">Car Pictures</p>
            <Divider />
    

            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
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
            
            <Divider />
            <p className="left2">Asking price and Additional Info</p>
            <Divider />

            <div className="left">Asking Price</div>
            <br></br>
            <br></br>
            <Input style={{
                width: 255,
                float:'left'
            }} placeholder="€" />

            <br></br>
            <br></br>
            <br></br>

            <div className="left">Additional Info</div>

            <br></br>
            <br></br>

            <TextArea rows={6} />
                <br />
                <br />
                <br></br>
            <br></br>
            <Button onClick={cancel} style={{
                float:'left'
            }} danger>Cancel</Button>
            <Button onClick={publish} style={{
                float:'right'
            }} type="primary">Publish Listing</Button>

            <br></br>
            <br></br>
    </Card>
    <div class="flexbox-container">
        
        </div>
        <div class="flexbox-container">
        
        </div>
    
  </div>
)};

export default PublishForm;
