# git

## git 修改远程仓库地址
* git remote set-url origin <new git url>


## 空仓库添加远程分支
* 使用git remote set-url origin <git url>命令的时候，提示“fatal: No such remote 'origin' ”，说明仓库里没有origin，首先要添加一个。
* git remote add origin <git url>