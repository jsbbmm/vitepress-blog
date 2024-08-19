## NGINX安装

### 1，NGXIN下载
```js
wget https://nginx.org/download/nginx-1.24.0.tar.gz
```
### 2,安装依赖环境
```js
#1,安装gcc环境
yum install gcc gcc-c++
#2,安装PCRE库，用于解析正则表达式
yum install -y pcre pcre-devel
#3,安装压缩和解压缩依赖
yum install -y zlib zlib-devel
#4,安装SSL安全加密
yum install -y openssl openssl-devel
```
### 3,解压
```js
tar -zxvf nginx-1.24.0.tar.gz
```
### 4, 编译之前，先创建nginx临时目录
```js
mkdir /var/temp/nginx -p
```
### 5, 配置
```js
./configure 
```
### 6, 编译
```js
make
```
### 7, 安装
```js
make install 
```
### 8, 查找
```js
whereis nginx
#nginx: /usr/local/nginx
```
### 9, 启动
```js
cd /usr/local/nginx
#启动
./sbin/nginx

#访问
服务器：ip:80/

#停止
./sbin/nginx -s stop

#重新加载
./sbin/nginx -s reload
```