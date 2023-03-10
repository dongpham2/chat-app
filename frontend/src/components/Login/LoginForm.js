import React from 'react'
import {Row, Col, Button, Typography} from 'antd'
import  './LoginForm.module.scss'
import firebase, {auth} from '../../firebase/config';
import  {useHistory} from 'react-router-dom';

const {Title} = Typography;
const fbProvider = firebase.auth.FacebookAuthProvider;

export default function LoginForm() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider)
    
  }

  return (
    <div>
        <Row>
            <Col span={8} style= {{ height : 800}}>
                <Title style={{ textAlign: 'center'}} Level={3}>Chat GPT</Title>
                <Button className='btn'>
                    Login with Google
                </Button>
                <Button className='btn' onClick={handleFbLogin}>Login with Facebook</Button>
            </Col>
        </Row>
    </div>
  )
}
