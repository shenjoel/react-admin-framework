import { Layout } from 'antd';

const { Footer } = Layout;

export default () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      NTX ©{new Date().getFullYear()} Created by CongYu Shen
    </Footer>
  );
};
