/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'aemVue3EditableComponents',
      fileName: (format) => `aem-vue-3-editable-components.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@adobe/aem-spa-page-model-manager',
        '@adobe/aem-spa-component-mapping',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@adobe/aem-spa-page-model-manager': 'AemSpaPageModelManager',
          '@adobe/aem-spa-component-mapping': 'AemSpaComponentMapping',
        },
      },
    },
  },
});
