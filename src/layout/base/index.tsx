import { Layout } from 'antd';
import Sider from './sider';
import Header from './header';
import Content from './content';
import Footer from './footer';
import SaveBar from '@/components/saveBar';
import styles from './index.module.less';
import { useSaveBarLoader } from '@/store/global';

export default () => {
  const visible = useSaveBarLoader((state) => state.visible);
  return (
    <Layout className={styles.pageLayout}>
      {/* 侧边栏 */}
      <Sider />
      <Layout style={{ position: 'relative' }}>
        {/* 保存栏 */}
        {visible ? <SaveBar /> : null}
        {/* 头部 */}
        <Header />
        {/* 页面容器 */}
        <Content />
        {/* 页脚 */}
        <Footer />
      </Layout>
    </Layout>
  );
};
