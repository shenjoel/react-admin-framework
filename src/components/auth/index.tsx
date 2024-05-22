import React from 'react';
import { Button, Flex, Result, Spin } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { fetchAuth } from '@/http/account';

interface IAuthProps {
  children: React.ReactNode;
}

const Auth: React.FC<IAuthProps> = ({ children }) => {
  // fetchAuth 可以根据业务自定义
  const { loading, isAuthenticated, isCompleted } = useAuth<{ data: { isAuthenticated: boolean } }>(
    fetchAuth
  );

  return (
    <Spin spinning={loading && !isCompleted} tip={'请稍等，正在加载应用'}>
      {isAuthenticated ? (
        children
      ) : (
        <Flex align="center" justify="center" style={{ height: '100vh' }}>
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
              <Button type="primary" href="/">
                Back Home
              </Button>
            }
          />
        </Flex>
      )}
    </Spin>
  );
};

export default Auth;
