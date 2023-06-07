# lint 相关配置

## eslint

```bash
// 安装 eslint
pnpm install eslint -D

// eslint 初始化
pnpm eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-vue@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · pnpm
```

## stylelint

主要对 scss 样式进行 stylelint

```bash
pnpm add sass -D
```

```bash
pnpm add
    postcss
    postcss-html

    stylelint
    stylelint-config-prettier-scss
    stylelint-config-recommended-scss
    stylelint-config-rational-order

    stylelint-config-standard
    stylelint-config-standard-vue
    stylelint-config-standard-scss

    stylelint-order
-D
```

```bash
touch .stylelintrc.js

// 在 .vscode 配置中 settings.json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
    },
    // stylelint 校验格式
    "stylelint.validate": ["css", "less", "vue", "html", "scss"]
}
```

## prettier

```bash
pnpm add prettier -D

touch .prettierrc.js
```

## 配置 husky

安装依赖

```bash
pnpm add husky -D
```

使用

```bash
// package.json
{
    "scripts": {
        ...
        "prepare": "husky install"
    },
}

// 执行后生成 .husky 文件夹
pnpm prepare
// 添加 pre-commit 钩子文件
pnpm husky add .husky/pre-commit
```

## 参考

[eslint + stylelint + prettier](https://juejin.cn/post/7118294114734440455)
