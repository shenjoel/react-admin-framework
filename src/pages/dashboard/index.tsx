import { Image, Result } from 'antd';
import Logo from '@/assets/logo.svg';

export default function Dashboard() {
  return <Result icon={<Image src={Logo} />} title="NTUG.AI admin template" />;
}
