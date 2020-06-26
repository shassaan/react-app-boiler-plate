import React, { useState } from 'react';
import { Input, Button, Typography, message } from 'antd';
import './Login.css'
import { LoginDTO} from '../../models/Account';
import { Login } from './LoginService';
import { LoginManager } from '../../Helpers/LoginManager';
const { Title } = Typography;

export const LoginComponent: React.StatelessComponent = () => {
    const [loginObject, setLoginObject] = useState<LoginDTO>({ username: "", password: "" })
    const initialLogin = async () :Promise<any>=> {
        message.loading("Logging in");
         var LoginResponse = await Login(loginObject);
         var loginManager = new LoginManager();
         loginManager.setLoginObject(LoginResponse);
         message.destroy();
        
    }
    return (
        <div className="login">
            <Title level={3}>EON EHR HUB - login</Title>
            <Input
                placeholder="username"
                value={loginObject.username}
                onChange={e => setLoginObject({ ...loginObject, username: e.target.value })}
            />
            <Input.Password
                placeholder="password"
                value={loginObject.password}
                onChange={e => setLoginObject({ ...loginObject, password: e.target.value })}
            />
            <Button 
                type="primary" 
                block
                onClick={initialLogin}
                >
                login
            </Button>
        </div>
    );
}