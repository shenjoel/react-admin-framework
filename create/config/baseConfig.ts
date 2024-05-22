import react from '@vitejs/plugin-react-swc';
import path from 'path';

import type { UserConfig } from 'vite';

// vite公共配置
const baseConfig: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../src'), // src 路径
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};

export { baseConfig };
