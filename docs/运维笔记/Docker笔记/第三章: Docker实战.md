## 启动一个nginx, 并将它的首页改成自己的页面，发布出去，让所有人都可以使用

1， 下载一个nginx镜像
2， 启动一个nginx容器
3， 将nginx的首页改成自己的页面
4， 保存镜像
5， 发布出去，分享社区，让所有人都可以使用

### 1, 下载一个nginx镜像
```js
# 搜索nginx镜像
docker search nginx
docker pull nginx
```
### 2, 启动一个nginx容器
```js
docker run -d -p 80:80 nginx
```
### 3, 将nginx的首页改成自己的页面
```js
docker exec -it nginx /bin/bash
```
### 4, 保存镜像
```js
docker commit nginx mynginx
```
### 5, 发布出去，分享社区，让所有人都可以使用
```js
docker push mynginx
```
### 6, 查看镜像
```js
docker images
```
### 7, 查看容器
```js
docker ps
```
### 8, 查看容器日志
```js
docker logs nginx
```
### 9, 查看容器状态
```js
docker stats nginx
```
### 10, 查看容器网络
```js
docker network ls
```
### 11, 查看容器端口
```js
docker port nginx
```
### 12, 查看容器环境变量
```js
docker env nginx
```
### 13, 查看容器配置
```js
docker config ls
```
### 14, 查看容器服务
```js
docker service ls
```
### 15, 查看容器节点
```js
docker node ls
```
### 16, 查看容器卷
```js
docker volume ls
```
### 17, 查看容器网络
```js
docker network ls
```
### 18, 查看容器镜像
```js
docker image ls
```
### 19, 查看容器镜像历史
```js
docker image history nginx
```
### 20, 查看容器镜像标签
```js
docker image tags nginx
```
### 21, 查看容器镜像大小
```js
docker image size nginx
```

