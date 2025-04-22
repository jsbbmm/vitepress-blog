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
# 查看镜像
docker images
# 查看镜像
docker image ls
```
