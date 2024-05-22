import { Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useCreation } from 'ahooks';
import Dashboard from '@/pages/dashboard';

const { Content } = Layout;

export default () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { pathname } = useLocation();
  const isIndexPage = useCreation(() => ['/'].includes(pathname), [pathname]);

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          height: '100%',
        }}
      >
        {!isIndexPage ? <Outlet /> : <Dashboard />}
      </div>
    </Content>
  );
};
