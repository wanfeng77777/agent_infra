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
    sidebar: [
      {
        title: 'Agent 基础概念',
        collapsable: false,
        children: [
          ['Q1', 'Q1: 什么是 AI Agent？'],
          ['Q2', 'Q2: Agent 核心组成部分'],
          ['Q3', 'Q3: Agent 和 LLM 关系'],
          ['Q4', 'Q4: Agent 执行链路'],
          ['Q5', 'Q5: Agent 开发核心难点'],
          ['Q6', 'Q6: 如何设计 Agent 架构'],
          ['Q7', 'Q7: 上下文长度'],
          ['Q8', 'Q8: RAG 必要性']
        ]
      },
      {
        title: 'Agent 架构范式',
        collapsable: false,
        children: [
          ['Q9', 'Q9: ReAct 范式'],
          ['Q10', 'Q10: 多 Agent 原因'],
          ['Q11', 'Q11: 多 Agent 协作难点'],
          ['Q12', 'Q12: 共享黑板 vs 中心调度'],
          ['Q13', 'Q13: 主从 Agent 通信']
        ]
      },
      {
        title: '开发框架',
        collapsable: false,
        children: [
          ['Q14', 'Q14: Agent 开发框架'],
          ['Q15', 'Q15: LangChain 核心组件'],
          ['Q16', 'Q16: LangGraph 原理']
        ]
      },
      {
        title: 'MCP 协议',
        collapsable: false,
        children: [
          ['Q17', 'Q17: MCP 协议核心'],
          ['Q18', 'Q18: MCP vs Function Calling'],
          ['Q19', 'Q19: MCP vs Skill'],
          ['Q20', 'Q20: A2A 协议'],
          ['Q21', 'Q21: MCP Server 连接']
        ]
      },
      {
        title: 'RAG 技术',
        collapsable: false,
        children: [
          ['Q22', 'Q22: RAG 工作流程'],
          ['Q23', 'Q23: RAG 全链路设计'],
          ['Q24', 'Q24: RAG 优化策略'],
          ['Q25', 'Q25: chunk 策略'],
          ['Q26', 'Q26: 向量 vs 关键词检索'],
          ['Q27', 'Q27: 向量数据库选型'],
          ['Q28', 'Q28: 相似度计算'],
          ['Q29', 'Q29: 幻觉问题']
        ]
      },
      {
        title: '上下文与记忆',
        collapsable: false,
        children: [
          ['Q30', 'Q30: 多轮对话'],
          ['Q31', 'Q31: 上下文压缩'],
          ['Q32', 'Q32: 长短期记忆'],
          ['Q33', 'Q33: 记忆设计区别']
        ]
      },
      {
        title: '工具调用',
        collapsable: false,
        children: [
          ['Q34', 'Q34: 工具调用流程'],
          ['Q35', 'Q35: 约束大模型'],
          ['Q36', 'Q36: 工具调用恢复']
        ]
      },
      {
        title: '稳定性与异常',
        collapsable: false,
        children: [
          ['Q37', 'Q37: LLM 幻觉']
        ]
      }
    ]
  })
}
