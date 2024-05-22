import { Flex, Layout, Menu, Image } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import { useCreation } from 'ahooks';
import Logo from '@/assets/logo.svg';

import type { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';

const { Sider } = Layout;

export default () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const defaultSelectedKeys = useCreation(() => {
    const key = pathname?.split('/').filter((item) => item)?.[0];
    return [key ? key : '/'];
  }, [pathname]);
  const items: ItemType<MenuItemType>[] = useCreation(
    () => [
      {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Dashboard',
        onClick: () => {
          navigate('/');
        },
      },
      {
        key: 'demo',
        icon: <ProductOutlined />,
        label: 'Demo',
        onClick: () => {
          navigate('/demo');
        },
      },
    ],
    []
  );

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Flex style={{ height: '100%' }} vertical>
        <Flex justify="center">
          <Image
            style={{ objectFit: 'cover', cursor: 'pointer' }}
            preview={false}
            height={80}
            src={Logo}
            onClick={() => navigate('/')}
          />
        </Flex>
        <Menu
          style={{ flex: 1, overflowY: 'auto' }}
          theme="dark"
          mode="inline"
          items={items}
          defaultSelectedKeys={defaultSelectedKeys}
        />
      </Flex>
    </Sider>
  );
};
