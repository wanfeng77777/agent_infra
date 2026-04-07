import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fff-]/g, '')
}

const chapters = [
  { title: '一、Agent 基础概念', qs: ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8'] },
  { title: '二、Agent 架构范式', qs: ['Q9','Q10','Q11','Q12','Q13'] },
  { title: '三、开发框架', qs: ['Q14','Q15','Q16'] },
  { title: '四、MCP 协议', qs: ['Q17','Q18','Q19','Q20','Q21'] },
  { title: '五、RAG 技术', qs: ['Q22','Q23','Q24','Q25','Q26','Q27','Q28','Q29'] },
  { title: '六、上下文管理与记忆机制', qs: ['Q30','Q31','Q32','Q33'] },
  { title: '七、工具调用', qs: ['Q34','Q35','Q36'] },
  { title: '八、稳定性与异常处理', qs: ['Q37','Q38','Q39','Q40'] },
  { title: '九、Prompt 工程', qs: ['Q41','Q42','Q43'] },
  { title: '十、评测', qs: ['Q44','Q45','Q46'] },
  { title: '十一、权限与安全', qs: ['Q47','Q48','Q49'] },
  { title: '十二、工程实践', qs: ['Q50','Q51','Q52','Q53'] },
  { title: '十三、行业应用', qs: ['Q54','Q55'] },
  { title: '十四、多模态', qs: ['Q56','Q57'] }
]

const sidebar = chapters.map(ch => ({
  text: ch.title,
  collapsible: true,
  children: [
    { text: ch.title, link: `/?id=${slugify(ch.title)}` },
    ...ch.qs.map(q => ({ text: q, link: `/?id=${q.toLowerCase()}` }))
  ]
}))

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
    sidebar
  })
}
