## Homebrew简介

Homebrew是MacOS下的包管理工具，类似于Linux下的apt-get。可以用来安装各种软件。

## Homebrew官网地址

[https://brew.sh/](https://brew.sh/)

## Homebrew安装

复制官网上的这条命令，直接执行，就可以安装
```bash
/bin/bash -c "$(curl -fsSL URL_ADDRESS/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)")"

## 安装完成后，需要执行下面的命令，才能使用Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"
```
## Homebrew查看版本
```bash
brew -v
```
## Homebrew常用命令
```bash
brew search <package_name>
brew list
brew update
brew upgrade	# 升级所有包	
brew upgrade <package_name>	# 升级指定包	
brew install <package_name>	# 安装指定包
brew uninstall <package_name>	# 卸载指定包
brew cleanup	# 清理缓存
brew doctor	# 检查Homebrew是否正常
brew info <package_name>	# 查看指定包的信息
brew home <package_name>	# 查看指定包的官网地址
brew cask search <package_name>	# 搜索指定包
```

## Homebrew版本升级
```bash
brew update
brew upgrade
```

## 更换中科大镜像源
```bash
# 查看当前镜像源
brew config
# 更换中科大镜像源
# 替换 brew.git
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 替换 homebrew-core.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# 替换 Bottles 源（根据 Shell 类型选择）
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc  # zsh 用户
source ~/.zshrc

```	
## 更换阿里镜像源
```bash
# 查看当前镜像源
brew config
# 更换阿里镜像源
# 替换 brew.git
git -C "$(brew --repo)" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
# 替换 homebrew-core.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 对于 bash 用户
echo 'export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.aliyun.com/homebrew/homebrew-bottles"' >> ~/.bash_profile
echo 'export HOMEBREW_API_DOMAIN="https://mirrors.aliyun.com/homebrew-bottles/api"' >> ~/.bash_profile
source ~/.bash_profile

# 对于 zsh 用户
cho 'export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.aliyun.com/homebrew/homebrew-bottles"' >> ~/.zshrc
echo 'export HOMEBREW_API_DOMAIN="https://mirrors.aliyun.com/homebrew-bottles/api"' >> ~/.zshrc
source ~/.zshrc

```bash

## Homebrew常用软件
```bash
brew install wget
brew install git
brew install node
brew install yarn
brew install python
brew install python3
brew install java
brew install maven
brew install gradle
brew install docker
brew install docker-compose
brew install --cask firefox
brew install --cask google-chrome	# 谷歌浏览器
brew install --cask visual-studio-code	# 微软VSCode
brew install --cask sublime-text	# Sublime Text
brew install --cask intellij-idea	# IntelliJ IDEA
brew install --cask postman	# Postman
brew install --cask obsidian	# Obsidian
brew install --cask alfred	# Alfred
```
* brew install 用于安装命令行工具或开发库（如 wget、git）。这些软件通常通过源码编译安装，依赖 Homebrew 自动处理环境和依赖 

* brew install --cask 用于安装图形界面应用（如 Chrome、Visual Studio Code）。Cask 会直接从官方渠道下载预编译的安装包，并自动完成解压、安装到 /Applications 目录等操作