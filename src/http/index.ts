import axios from 'axios';
import { message } from 'antd';

const http = axios.create({
  baseURL: '/api',
  timeout: 1000 * 60,
  headers: {},
});

http.interceptors.response.use(
  (response) => {
    const { data = {}, status } = response;
    if (status === 200) {
      const { code, message: msg } = data;
      if (code !== 0) {
        message.error(msg || 'error');
      }
    }
    return response?.data || {};
  },
  (error) => {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error('Error status', error.response.status);
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('Error request', error.request);
    } else {
      // 发生了一些事情，导致请求触发了一个错误
      console.error('Error', error.message);
    }
    // 与响应相关的配置信息
    console.error('Error config', error.config);
    return Promise.reject(error);
  }
);

export { http };
