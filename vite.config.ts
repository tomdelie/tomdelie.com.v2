import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['swiper-slide', 'swiper-container'].includes(tag),
        }
      }
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')]
    }),
  ],
});
