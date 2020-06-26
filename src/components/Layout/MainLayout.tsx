import React from 'react';
import { Layout} from 'antd';
import { LayoutSider } from './LayoutSider';
import { LayoutFooter } from './LayoutFooter';
import { LayoutHeader } from './LayoutHeader';
import {LayoutContent} from './LayoutContent';
export const MainLayout: React.StatelessComponent = (props) => {
    return (
        <Layout>
            <LayoutSider/>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <LayoutHeader/>
                    <LayoutContent>
                        {props.children}
                        </LayoutContent>
                <LayoutFooter/>
            </Layout>
            
        </Layout>
    )
}