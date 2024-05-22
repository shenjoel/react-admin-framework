import { Avatar, Flex, Layout, theme, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreation } from 'ahooks';
import { useAuthStore } from '@/store/auth';
import type { MenuProps } from 'antd';

import styles from '@/layout/base/index.module.less';

const { Header } = Layout;

const LayoutHeader = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthStore();
  const [rotate, setRotate] = useState<number>(0);
  const {
    token: { colorBgContainer, colorPrimaryActive, colorTextBase },
  } = theme.useToken();

  const items: MenuProps['items'] = useCreation(
    () => [
      {
        key: 'signOut',
        label: 'sign out',
        onClick() {
          signOut();
          navigate('/signin');
        },
      },
    ],
    []
  );

  return (
    <Header style={{ padding: 0, background: colorBgContainer, height: 56 }}>
      <Flex style={{ width: '100%', height: 56 }}>
        <Flex justify="flex-end" flex={1}>
          <Dropdown
            menu={{ items }}
            onOpenChange={(open) => {
              if (open) {
                setRotate(180);
              } else {
                setRotate(0);
              }
            }}
          >
            <a onClick={(e) => e.preventDefault()} className={styles.user}>
              <Avatar size={24} style={{ backgroundColor: colorPrimaryActive, margin: 5 }}>
                NTX
              </Avatar>
              <p style={{ color: colorTextBase, marginRight: 10 }}>CongYu Shen</p>
              <DownOutlined
                style={{ transition: 'transform .3s ease', transform: `rotate(${rotate}deg)` }}
              />
            </a>
          </Dropdown>
        </Flex>
      </Flex>
    </Header>
  );
};

export default LayoutHeader;
