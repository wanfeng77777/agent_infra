import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

const sidebar = [
  {
    text: '一、Agent 基础概念',
    collapsible: true,
    children: [
      { text: '一、Agent 基础概念', link: '/?id=一-agent-基础概念' },
      { text: 'Q1', link: '/?id=q1' },
      { text: 'Q2', link: '/?id=q2' },
      { text: '注意点', link: '/?id=注意点' },
      { text: 'Q3', link: '/?id=q3' },
      { text: 'Q4', link: '/?id=q4' },
      { text: '注意点', link: '/?id=注意点-2' },
      { text: 'Q5', link: '/?id=q5' },
      { text: '注意点', link: '/?id=注意点-3' },
      { text: 'Q6', link: '/?id=q6' },
      { text: '注意点', link: '/?id=注意点-4' },
      { text: 'Q7', link: '/?id=q7' },
      { text: 'Q8', link: '/?id=q8' },
      { text: '注意点', link: '/?id=注意点-5' },
      { text: '注意点', link: '/?id=注意点-6' },
    ]
  },
  {
    text: '二、Agent 架构范式',
    collapsible: true,
    children: [
      { text: '二、Agent 架构范式', link: '/?id=二-agent-架构范式' },
      { text: 'Q9', link: '/?id=q9' },
      { text: '注意点', link: '/?id=注意点-7' },
      { text: 'Q10', link: '/?id=q10' },
      { text: '注意点', link: '/?id=注意点-8' },
      { text: 'Q11', link: '/?id=q11' },
      { text: 'Q12', link: '/?id=q12' },
      { text: 'Q13', link: '/?id=q13' },
      { text: '注意点', link: '/?id=注意点-9' },
    ]
  },
  {
    text: '三、开发框架',
    collapsible: true,
    children: [
      { text: '三、开发框架', link: '/?id=三-开发框架' },
      { text: 'Q14', link: '/?id=q14' },
      { text: 'Q15', link: '/?id=q15' },
      { text: 'Q16', link: '/?id=q16' },
    ]
  },
  {
    text: '四、MCP 协议',
    collapsible: true,
    children: [
      { text: '四、MCP 协议', link: '/?id=四-mcp-协议' },
      { text: 'Q17', link: '/?id=q17' },
      { text: 'Q18', link: '/?id=q18' },
      { text: 'Q19', link: '/?id=q19' },
      { text: 'Q20', link: '/?id=q20' },
      { text: 'Q21', link: '/?id=q21' },
    ]
  },
  {
    text: '五、RAG 技术',
    collapsible: true,
    children: [
      { text: '五、RAG 技术', link: '/?id=五-rag-技术' },
      { text: 'Q22', link: '/?id=q22' },
      { text: 'Q23', link: '/?id=q23' },
      { text: 'Q24', link: '/?id=q24' },
      { text: 'Q25', link: '/?id=q25' },
      { text: 'Q26', link: '/?id=q26' },
      { text: 'Q27', link: '/?id=q27' },
      { text: 'Q28', link: '/?id=q28' },
      { text: 'Q29', link: '/?id=q29' },
    ]
  },
  {
    text: '六、上下文管理与记忆机制',
    collapsible: true,
    children: [
      { text: '六、上下文管理与记忆机制', link: '/?id=六-上下文管理与记忆机制' },
      { text: 'Q30', link: '/?id=q30' },
      { text: 'Q31', link: '/?id=q31' },
      { text: 'Q32', link: '/?id=q32' },
      { text: 'Q33', link: '/?id=q33' },
    ]
  },
  {
    text: '七、工具调用',
    collapsible: true,
    children: [
      { text: '七、工具调用', link: '/?id=七-工具调用' },
      { text: 'Q34', link: '/?id=q34' },
      { text: 'Q35', link: '/?id=q35' },
      { text: 'Q36', link: '/?id=q36' },
    ]
  },
  {
    text: '八、稳定性与异常处理',
    collapsible: true,
    children: [
      { text: '八、稳定性与异常处理', link: '/?id=八-稳定性与异常处理' },
      { text: 'Q37', link: '/?id=q37' },
      { text: 'Q38', link: '/?id=q38' },
      { text: 'Q39', link: '/?id=q39' },
      { text: 'Q40', link: '/?id=q40' },
    ]
  },
  {
    text: '九、Prompt 工程',
    collapsible: true,
    children: [
      { text: '九、Prompt 工程', link: '/?id=九-prompt-工程' },
      { text: 'Q41', link: '/?id=q41' },
      { text: 'Q42', link: '/?id=q42' },
      { text: 'Q43', link: '/?id=q43' },
    ]
  },
  {
    text: '十、评测',
    collapsible: true,
    children: [
      { text: '十、评测', link: '/?id=十-评测' },
      { text: 'Q44', link: '/?id=q44' },
      { text: 'Q45', link: '/?id=q45' },
      { text: 'Q46', link: '/?id=q46' },
    ]
  },
  {
    text: '十一、权限与安全',
    collapsible: true,
    children: [
      { text: '十一、权限与安全', link: '/?id=十一-权限与安全' },
      { text: 'Q47', link: '/?id=q47' },
      { text: 'Q48', link: '/?id=q48' },
      { text: 'Q49', link: '/?id=q49' },
    ]
  },
  {
    text: '十二、工程实践',
    collapsible: true,
    children: [
      { text: '十二、工程实践', link: '/?id=十二-工程实践' },
      { text: 'Q50', link: '/?id=q50' },
      { text: 'Q51', link: '/?id=q51' },
      { text: 'Q52', link: '/?id=q52' },
      { text: 'Q53', link: '/?id=q53' },
    ]
  },
  {
    text: '十三、行业应用',
    collapsible: true,
    children: [
      { text: '十三、行业应用', link: '/?id=十三-行业应用' },
      { text: 'Q54', link: '/?id=q54' },
      { text: 'Q55', link: '/?id=q55' },
    ]
  },
  {
    text: '十四、多模态',
    collapsible: true,
    children: [
      { text: '十四、多模态', link: '/?id=十四-多模态' },
      { text: 'Q56', link: '/?id=q56' },
      { text: 'Q57', link: '/?id=q57' },
    ]
  }
]

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
