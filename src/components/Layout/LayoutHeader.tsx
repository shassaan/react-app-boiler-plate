import React from 'react'
import {Layout} from 'antd';
const {Header} = Layout;
export const LayoutHeader : React.StatelessComponent = ()=>{
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}><h1>EON ehr hub</h1></Header>
    )
}