## Docker基础知识

### 1: Docker版本信息

```js
# 查看docker版本
docker --version
# 查看docker 信息
docker info

```
### 2,Docker启动命令
```js
# 启动docker
systemctl start docker
# 查看docker状态
systemctl status docker
# 重启docker
systemctl restart docker
# 停止docker
systemctl stop docker
# 开机启动docker
systemctl enable docker
# 开机禁用docker
systemctl disable docker
# 查看docker日志
journalctl -u docker
# 查看docker日志
journalctl -u docker -f
# 查看docker日志
journalctl -u docker -f --since "2021-01-01"
# 查看docker日志
journalctl -u docker -f --since "2021-01-01" --until "2021-01-02"
```
### 3, 配置docker镜像
```js
# 查看服务器内核版本
uname -r
# 查看服务器发行版信息	
lsb_release -a

# 配置阿里镜像

sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://eull48ze.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 4, Docker镜像
```js
# 查看容器
docker ps
docker ps -a # 查看所有容器

# 查看镜像
docker images
# 查看镜像
docker image ls

# 拉取镜像
docker pull nginx

# 删除镜像
docker rmi nginx

```

### 5，Docker容器
```js
# 运行
docker run
docker run -d --name myNginx nginx # 后台运行
docker run -d -p 80:80 --name myNginx nginx # 后台运行，端口映射
docker run -d -p 80:80 -v /home/nginx/html:/usr/share/nginx/html --name myNginx nginx # 后台运行，端口映射，挂载目录
# 启动
docker start
# 停止
docker stop
# 重启
docker restart
# 进入容器
docker exec -it nginx bash
# 退出容器
exit
# 查看容器日志
docker logs nginx
# 查看容器日志
docker logs nginx -f
# 删除容器
docker rm nginx
```