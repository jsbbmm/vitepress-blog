import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  head: [['link', { rel: 'icon', href: '/ai_logo.jpg'}]],
  title: "贰拾壹小生",
  description: "关注技术，让知识在海洋里畅游",
  srcDir: 'docs',
  themeConfig: {
    outlineTitle: '目录',
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    logo: '/ai_logo.jpg',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: "Copyright @2024 贰拾壹小生"
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
})
