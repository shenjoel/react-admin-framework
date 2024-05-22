import { UserConfig, defineConfig, loadEnv } from 'vite';
import deprecated from './create/deprecated';
import { getEnvConfig, addPlugins } from './create/config';
import { baseConfig } from './create/config/baseConfig';
import { EVITE_NODE_ENV } from './create/type';
// import DemoPlugin from './create/plugins/vite-plugin-demo'; // 插件样例

export default defineConfig(({ command, mode }: { mode: string; command: string }): UserConfig => {
  // 环境变量
  const env: Record<string, string> = loadEnv(mode, process.cwd(), '');
  // 自定义环境变量，可在文件[.env.*]编辑
  const { VITE_NODE_ENV = '' } = env;
  if (VITE_NODE_ENV) {
    // 添加插件
    // addPlugins({ env, plugins: [DemoPlugin()] });
    addPlugins({ env, plugins: [] });

    // 可以根据环境变量在开发或构建场景下新增或覆盖配置
    const envConfig: UserConfig = getEnvConfig({ env });
    deprecated({
      type: 'config',
      title: 'filename',
      content: `.env.${VITE_NODE_ENV}`,
    });
    if (command === 'serve' && VITE_NODE_ENV === EVITE_NODE_ENV.localized) {
      return {
        ...baseConfig,
        ...envConfig,
      };
    } else {
      // build 构建
      deprecated({ type: 'config', title: 'mode', content: `build` });
      return {
        ...baseConfig,
        ...envConfig,
      };
    }
  } else {
    deprecated({
      type: 'error',
      title: 'VITE_NODE_ENV',
      content: 'ENV not found',
    });
  }
  return baseConfig;
});
