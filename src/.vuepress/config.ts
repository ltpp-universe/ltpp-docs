import { defineUserConfig } from 'vuepress';
import { resolve } from 'path';
import fs from 'fs';
import theme from './theme.js';
const is_ltpp_pages = process.env.LTPP === 'LTPP';
const is_dev = process.env.NODE_ENV === 'development';
const base = is_dev ? '/' : is_ltpp_pages ? '/ltpp-docs/' : '/';

console.log(`${is_dev ? '开发' : '生产'}环境`);

!is_dev && console.log(`${is_ltpp_pages ? 'LTPP-GIT' : 'GITHUB'}流水线`);

export default defineUserConfig({
  base: base,
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  title: 'LTPP宇宙文档',
  description: 'LTPP宇宙文档',
  theme,
  dest: resolve(__dirname, '../../docs-html'),
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'LTPP,开发,编程,计算机,学习,资源,OJ,LTPP-在线开发平台,LTPP宇宙,LTPP宇宙文档',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content:
          'LTPP（Learning teaching practice platform）在线开发平台是一个编程学习网站，该网站集文章学习、短视频、在线直播、代码训练、在线问答、在线聊天和在线商店于一体，专注于提升用户编程能力，做到“学”与“练”的统一。',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: `${base}img/logo.ico`,
      },
    ],
    [
      'script',
      {},
      `
      ${fs.readFileSync(resolve(__dirname, './head.js'))}
    `,
    ],
  ],
});