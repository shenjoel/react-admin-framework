import { type FormInstance } from 'antd';
import { create } from 'zustand';

interface TSaveBar {
  visible: boolean;
  form: FormInstance | null;
  onSave?: () => void;
  onCancel?: () => void;
  setVisible: (visible: boolean) => void;
  setForm: (form: FormInstance) => void;
  setSaveEvent: () => void;
  setCancelEvent: () => void;
}

const initSaveBarData: Pick<TSaveBar, 'form' | 'visible'> = {
  form: null,
  visible: false,
};

// 是否显示 saveBar
const useSaveBarLoader = create<TSaveBar>()((set) => ({
  ...initSaveBarData,
  setVisible: (visible) =>
    set(() => ({
      visible,
    })),
  setForm: (form) =>
    set(() => ({
      form,
    })),
  setSaveEvent: () =>
    set((state) => ({
      onSave() {
        state.form?.submit();
      },
    })),
  setCancelEvent: () =>
    set((state) => ({
      onCancel() {
        state.form?.resetFields();
      },
    })),
}));

export { useSaveBarLoader };
