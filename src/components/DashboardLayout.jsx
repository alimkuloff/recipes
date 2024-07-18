import React from 'react';
import { Layout } from 'antd';
import RecipeTable from './RecipeTable';

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        {}
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {}
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RecipeTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
