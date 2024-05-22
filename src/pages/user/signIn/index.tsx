import { Button, Checkbox, Form, Grid, Input, theme, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import styleModule from './index.module.less';

import type { CSSProperties } from 'react';
import type { TSignInFromProps } from '@/types/user';
import { useAuthStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function App() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const authenticate = useAuthStore((state) => state.authenticate);
  const navigate = useNavigate();

  // 提交表单
  const onFinish = (values: TSignInFromProps) => {
    console.log('Received values of form: ', values);
    authenticate();
    navigate('/');
  };

  // 样式
  const styles: Record<string, CSSProperties> = {
    container: {
      margin: '0 auto',
      width: '380px',
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: 'center',
      width: '100%',
    },
    forgotPassword: {
      float: 'right',
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      height: '100vh',
      alignItems: 'center',
      display: 'flex',
      padding: screens.md ? 0 : '${token.sizeMD}px 0px',
    },
    text: {
      color: token.colorTextSecondary,
      textAlign: 'center',
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
      textAlign: 'center',
    },
  };

  return (
    <section style={styles.section} className={styleModule.gradientBackground}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign in</Title>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link style={styles.forgotPassword} href="/">
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>
              <Link href="/signup">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
