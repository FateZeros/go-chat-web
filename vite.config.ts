import { Alias, defineConfig, loadEnv, PluginOption, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path'

const plugins: PluginOption[] = [
  vue({ reactivityTransform: true }),
  Components({
    resolvers: [VantResolver()],
  })
]

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  // 环境变量
  const env = loadEnv(mode, __dirname, '');

  // 是否生成 sourcemap
  const sourcemap = env.VITE_USE_SOURCEMAP === 'true';

  // 别名
  const alias: Alias[] = [
    {
      find: '@',
      replacement: path.resolve(__dirname, './src')
    }
  ];

  return {
    base: './',
    plugins,
    resolve: {
      alias
    },
    build: {
      sourcemap
    }
  }
})