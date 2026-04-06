module.exports = {
  title: 'Agent学习资料',
  description: 'Agent 开发面经整理，涵盖基础概念、架构范式、开发框架、MCP/RAG等',
  base: '/agent_infra/',
  port: 8080,
  themeConfig: {
    logo: 'https://img.icons8.com/color/96/robot.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/wanfeng77777/agent_infra' }
    ],
    sidebar: [
      {
        title: 'Agent 基础概念',
        collapsable: false,
        children: [
          ['Q1', 'Q1: 什么是 AI Agent？与传统 LLM 应用（如 ChatGPT）的区别？'],
          ['Q2', 'Q2: Agent 智能体的核心组成部分有哪些？'],
          ['Q3', 'Q3: Agent 和 LLM（大型语言模型）的关系是什么？'],
          ['Q4', 'Q4: 完整的 Agent 执行链路/工作流程是怎样的？'],
          ['Q5', 'Q5: Agent 开发的核心难点是什么？'],
          ['Q6', 'Q6: 如何设计一个高效的 Agent 架构？'],
          ['Q7', 'Q7: 目前主流 AI 模型支持的上下文长度是多少？'],
          ['Q8', 'Q8: 长上下文模型出现后，RAG 架构的必要性是否会下降？']
        ]
      },
      {
        title: 'Agent 架构范式',
        collapsable: false,
        children: [
          ['Q9', 'Q9: 是否了解 Agent 的设计范式，例如 ReAct 范式？'],
          ['Q10', 'Q10: 为什么要做多 Agent 而不是一个 Agent 搞定所有事？'],
          ['Q11', 'Q11: 多 Agent 协作里最难解决的是什么？'],
          ['Q12', 'Q12: 共享黑板和中心调度两种协作方式？'],
          ['Q13', 'Q13: 主 Agent 和子 Agent 的通信是怎么实现的？']
        ]
      },
      {
        title: '开发框架',
        collapsable: false,
        children: [
          ['Q14', 'Q14: 了解哪些 Agent 开发框架（如 LangChain、LangGraph）？'],
          ['Q15', 'Q15: LangChain 的核心组件有哪些？'],
          ['Q16', 'Q16: LangGraph 的具体实现原理？']
        ]
      },
      {
        title: 'MCP 协议',
        collapsable: false,
        children: [
          ['Q17', 'Q17: MCP 协议的核心内容？如何实现？需暴露哪些接口？'],
          ['Q18', 'Q18: MCP 与 Function Calling 的区别？'],
          ['Q19', 'Q19: MCP 与 Skill 的区别？'],
          ['Q20', 'Q20: A2A 协议是什么？与 MCP 的区别？'],
          ['Q21', 'Q21: Agent 如何与 MCP Server 连接通信？']
        ]
      },
      {
        title: 'RAG 技术',
        collapsable: false,
        children: [
          ['Q22', 'Q22: RAG（检索增强生成）的工作流程？'],
          ['Q23', 'Q23: RAG 系统的全链路设计包含哪些模块？'],
          ['Q24', 'Q24: 如何优化 RAG 检索准确率（重排序、HyDE 等）？'],
          ['Q25', 'Q25: 文本分块（chunk）策略及重叠区域比例设置？'],
          ['Q26', 'Q26: 向量检索 vs 关键词检索的区别？适用场景？'],
          ['Q27', 'Q27: 向量数据库选型（如 ES、Milvus）及差异？'],
          ['Q28', 'Q28: 相似度计算方法（余弦相似度、欧氏距离）？'],
          ['Q29', 'Q29: 如何解决 RAG 中的幻觉问题？']
        ]
      },
      {
        title: '上下文管理与记忆机制',
        collapsable: false,
        children: [
          ['Q30', 'Q30: 多轮对话的实现方案？'],
          ['Q31', 'Q31: 上下文窗口压缩方法？如何筛选有效信息？'],
          ['Q32', 'Q32: 长短期记忆的协同机制？'],
          ['Q33', 'Q33: 长期记忆和短期记忆在设计上有什么区别？']
        ]
      },
      {
        title: '工具调用',
        collapsable: false,
        children: [
          ['Q34', 'Q34: Agent 工具调用的完整业务流程？'],
          ['Q35', 'Q35: 如何约定并约束大模型进行工具调用？'],
          ['Q36', 'Q36: 工具调用失败时你会怎么做恢复？']
        ]
      },
      {
        title: '稳定性与异常处理',
        collapsable: false,
        children: [
          ['Q37', 'Q37: LLM 产生幻觉的原因？解决方案？']
        ]
      }
    ],
    search: true,
    searchMaxSuggestions: 10
  },
  markdown: {
    lineNumbers: true
  }
}
