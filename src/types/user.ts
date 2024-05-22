// 用户登录表单字段
export type TSignInFromProps = {
  email: string;
  password: string;
  remember?: boolean;
};

// 用户注册表单字段
export type TSignUpFromProps = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
};
