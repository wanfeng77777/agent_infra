import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default {
  title: 'Agent学习资料',
  description: 'Agent 开发面经整理，涵盖基础概念、架构范式、开发框架、MCP/RAG等',
  base: '/agent_infra/',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'https://img.icons8.com/color/96/robot.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/wanfeng77777/agent_infra' }
    ],
    sidebar: 'auto'
  })
}
