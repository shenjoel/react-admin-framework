import { Button, Flex, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function List() {
  const navigate = useNavigate();
  return (
    <Flex style={{ width: '100%', height: '100vh' }} justify="center" align="center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    </Flex>
  );
}
