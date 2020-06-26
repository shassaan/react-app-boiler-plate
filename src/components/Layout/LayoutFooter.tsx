import React from 'react';
import {Layout} from 'antd';
const {Footer}  = Layout;
export const LayoutFooter: React.StatelessComponent = ()=>{
    return(
        <Footer style={{ textAlign: 'center' }}>EON ©{new Date().getFullYear()} Created by OneByte</Footer>
    );
}