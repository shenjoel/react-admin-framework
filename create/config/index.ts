import { PluginOption, UserConfig } from "vite";
import { EVITE_NODE_ENV, type EVITE_NODE_ENV_KEYS } from "../type";
import { baseConfig } from "./baseConfig";

// 环境配置空间
const config: Record<EVITE_NODE_ENV_KEYS, UserConfig> = {
  // 本地环境
  [EVITE_NODE_ENV.localized]: {},
  // 开发环境
  [EVITE_NODE_ENV.development]: {},
  // 测试环境
  [EVITE_NODE_ENV.testing]: {},
  // 预发环境
  [EVITE_NODE_ENV.staging]: {},
  // 生产环境
  [EVITE_NODE_ENV.production]: {},
};

// 添加插件
const addPlugins = ({
  plugins,
  env,
}: {
  plugins: PluginOption;
  env: Record<string, string>;
}) => {
  // 与基础插件合并
  const plugs =
    baseConfig.plugins?.concat(Array.isArray(plugins) ? plugins : [plugins]) ||
    [];
  return (config[
    (env as { VITE_NODE_ENV: EVITE_NODE_ENV_KEYS }).VITE_NODE_ENV
  ].plugins = plugs);
};

// 根据环境分发自定义配置
const getEnvConfig = ({ env }: { env: Record<string, string> }): UserConfig => {
  return config[(env as { VITE_NODE_ENV: EVITE_NODE_ENV_KEYS }).VITE_NODE_ENV];
};

export { getEnvConfig, addPlugins };
