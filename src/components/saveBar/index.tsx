import { useSaveBarLoader } from '@/store/global';
import { Flex, Button } from 'antd';

const SaveBar = () => {
  const onSave = useSaveBarLoader((state) => state.onSave);
  const onCancel = useSaveBarLoader((state) => state.onCancel);
  const setVisible = useSaveBarLoader((state) => state.setVisible);
  return (
    <Flex
      align="center"
      justify="flex-end"
      style={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 56,
        background: 'white',
        zIndex: 9,
        paddingRight: 15,
        gap: 10,
      }}
    >
      <Button
        onClick={() => {
          onCancel?.();
          setVisible(false);
        }}
      >
        取消
      </Button>
      <Button type="primary" onClick={onSave}>
        保存
      </Button>
    </Flex>
  );
};

export default SaveBar;
