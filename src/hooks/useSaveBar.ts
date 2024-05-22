import { useMount, useUnmount } from 'ahooks';
import { useSaveBarLoader } from '@/store/global';
import { Form, FormInstance } from 'antd';

export interface ISaveBarReturn {
  form: FormInstance;
  onFieldsChange: (changeFields: any, allFields: any) => void;
  onSave: () => void;
  onCancel: () => void;
  setVisible: (visible: boolean) => void;
}

const useSaveBar = (): ISaveBarReturn => {
  const [form] = Form.useForm();
  const setVisible = useSaveBarLoader((state) => state.setVisible);
  const setForm = useSaveBarLoader((state) => state.setForm);
  const setSaveEvent = useSaveBarLoader((state) => state.setSaveEvent);
  const setCancelEvent = useSaveBarLoader((state) => state.setCancelEvent);
  const onSave = () => {
    form.submit();
  };

  const onCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  const onFieldsChange = (_: any, allFields: any) => {
    setVisible(allFields?.some((field: { touched: boolean }) => field.touched));
  };

  useMount(() => {
    setForm(form);
    setSaveEvent();
    setCancelEvent();
  });

  useUnmount(onCancel);

  return {
    form,
    onFieldsChange,
    onSave,
    onCancel,
    setVisible,
  };
};

export { useSaveBar };
