/**
 * 导出一个默认对象，该对象包含了 commitlint 的配置
 * 该配置继承自 @commitlint/config-conventional，并自定义了一些规则
 */
export default {
  // 继承自 @commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    // 允许的提交类型
    'type-enum': [
      2, // 规则的错误级别，2 表示错误
      'always', // 规则的应用时机
      [
        // 允许的提交类型列表
        'feat', // 提交新特性
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式 (不影响代码运行的变动)，注意不是css修改
        'refactor', // 代码重构
        'perf', // 优化相关，比如性能优化
        'test', // 测试用例更新
        'chore', // 其它修改，比如构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'build' // 编译相关的修改，例如发布版本、对项目构建或依赖的改动
      ]
    ],
    // 提交类型的大小写
    'type-case': [0], // 0 表示关闭该规则
    // 提交类型是否允许为空
    'type-empty': [0], // 0 表示关闭该规则
    // 提交范围是否允许为空
    'scope-empty': [0], // 0 表示关闭该规则
    // 提交范围的大小写
    'scope-case': [0], // 0 表示关闭该规则
    // 提交主题是否允许以句号结尾
    'subject-full-stop': [0, 'never'], // 0 表示关闭该规则，'never' 表示不允许以句号结尾
    // 提交主题的大小写
    'subject-case': [0, 'never'], // 0 表示关闭该规则，'never' 表示不允许改变大小写
    // 提交头的最大长度
    'header-max-length': [0, 'always', 72] // 0 表示关闭该规则，'always' 表示总是检查，72 表示最大长度
  }
}
