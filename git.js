== git常用命令 ==
git：分布式版本控制工具
集中式svn与git的区别
1.svn的版本库存放在中央处理器，git每个人都是一个完整的版本控制器
2.git安全性搞，svn太过于依赖中央服务器
3.svn需要联网才能工作，上传速度慢

版本库：版本库里的文件都被git管理起来, git可以跟踪每个文件的修改删除

提交：
git init变成git可以管理的仓库
git add添加文件.代表所有文件
git commit - m "xxxx"  此次提交的目的
git status 查看当前状态
git diff  查看具体修改的内容

回退：
git log查看历史提交记录
git reset--hard HEAD ^ HEAD ^ 代表上一个版本 HEAD ^^ 代表上上个版本
回退到制定版本 git reset--hard 版本号
git reflog 查看每次的操作记录

git有暂存区的概念 svn没有
工作区 暂存区
工作区有一个隐藏目录.git文件，是git版本库
版本库中存了很多东西，包括暂存区stage，还有git自动创建的第一个master，有一个指针指向master, 名为head
git add是吧提交的修改放到暂存区
git checkout-- 文件名 丢弃暂存区的修改

关联远程仓库：
git push 推送到远程仓库
git 支持 ssh与 https协议，ssh的速度快

创建一个新的dev分支时，是吧head指向dev, 在dev进行提交后，dev的指针向前一步，master的指针不变
合并master与dev最快的办法，是让master的指针指向dev

git branch dev 创建一个新的dev分支
git checkout dev  切换到dev
2条命令合并 git checkout - b dev
git branch 查看所有分支
在master上 git merge dev  获取最新的代码
git branch - d 分支名 删除分支

冲突 
git使用 <<<< ==== >>>>> 代表冲突
