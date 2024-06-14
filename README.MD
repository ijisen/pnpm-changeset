test 实例目录，
docs 文档目录，展示组件的使用方法
internal 内部项目，存放一些私有组件。比如： 打包方法
packages 组件目录
---components 组件目录
---constants 常量目录 const
---hooks 基于composition API的工具方法
---locale 国际化包目录
---theme-chalk theme-chalk 主题包
---utils 工具包


pnpm install typescript @types/node -D -w

// typescript 初始化
pnpm tsc --init

// 安装依赖包， 某一个项目安装
pnpm add umi --filter @app/hooks

