import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { blogPostResolver } from './plugins/plugin-post-resolver'
import { postReadingInfoPlugin } from './plugins/plugin-reading-info'
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '橙红',
  description: '前端开发相关记录，生活日常分享',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  plugins: [
    blogPostResolver({
      postsDir: path.join(__dirname, '/source/_posts'),
    }),
    postReadingInfoPlugin()
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
