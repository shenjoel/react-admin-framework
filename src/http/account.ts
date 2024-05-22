import { http } from '.';

// 获取用户信息(样例)
const getAccount = async () => {
  return await http.get('/user');
};

// 鉴权
const fetchAuth = async () => {
  return await { data: { isAuthenticated: true } };
};

export { fetchAuth, getAccount };
