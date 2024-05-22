export enum EVITE_NODE_ENV {
  localized = "localized",
  development = "development",
  testing = "testing",
  staging = "staging",
  production = "production",
}

// 获取所有枚举键的联合类型
export type EVITE_NODE_ENV_KEYS = keyof typeof EVITE_NODE_ENV;
