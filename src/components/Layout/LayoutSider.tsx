import React from 'react'
import {Layout} from 'antd';
import { LayoutMenu } from './LayoutMenu';
const {Sider} = Layout;
export const LayoutSider: React.StatelessComponent = ()=>{
    return (
        <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <LayoutMenu/>
                           </Sider>
    )
}