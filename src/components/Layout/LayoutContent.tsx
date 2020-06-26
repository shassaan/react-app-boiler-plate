import React from 'react'
import {Layout} from 'antd';
const {Content} = Layout;
export const LayoutContent: React.StatelessComponent = (props)=>{
    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        {props.children}
                    </div>
                </Content>
    )
}