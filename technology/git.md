# git

## git 修改远程仓库地址
* git remote set-url origin <new git url>


## 空仓库添加远程分支
* 使用git remote set-url origin <git url>命令的时候，提示“fatal: No such remote 'origin' ”，说明仓库里没有origin，首先要添加一个。
* git remote add origin <git url>

## 提交信息规范
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动


## pull fork 仓库
* 将Pull Request发出者的派生版本库添加为一个新的源。
* git remote add gotgithub https://github.com/gotgithub/gotgit.git
* 获取远程版本库gotgithub的分支和提交。
* git fetch gotgithub
* 将远程分支remotes/gotgithub/master（可简写为gotgithub/master）合并到当前分支中。
* git merge gotgithub/master