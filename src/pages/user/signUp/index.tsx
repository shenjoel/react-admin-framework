import { type CSSProperties } from 'react';
import { Button, Form, Grid, Input, theme, Typography } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import styleModule from './index.module.less';
import type { TSignUpFromProps } from '@/types/user';

const { Text, Title, Link } = Typography;

export default function SignUpPage() {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const screens = Grid.useBreakpoint();

  // 提交表单
  const onFinish = (values: TSignUpFromProps) => {
    console.log('Received values of form: ', values);
  };

  const styles: Record<string, CSSProperties> = {
    container: {
      margin: '0 auto',
      width: '380px',
      padding: screens.md ? `${token.sizeMD}px 0px` : '0px',
    },
    forgotPassword: {
      float: 'right',
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: 'center',
    },
    section: {
      alignItems: 'center',
      backgroundColor: token.colorBgContainer,
      display: 'flex',
      height: '100vh',
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: 'center',
      width: '100%',
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section} className={styleModule.gradientBackground}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>Join us! Create an account to get started.</Text>
        </div>
        <Form
          form={form}
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email.',
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
                message: 'Please input your Password.',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="rePassword"
            rules={[
              {
                required: true,
                validator(_, value, callback) {
                  const pwd = form.getFieldValue('password');
                  if (!pwd) {
                    callback('Please input your Password again.');
                  } else if (value !== pwd) {
                    callback('The password entered do not match.');
                  } else {
                    callback();
                  }
                },
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{' '}
              <Link href="/signin">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
