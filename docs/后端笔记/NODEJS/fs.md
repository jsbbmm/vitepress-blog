## fs模块
 fs模块是Node.js最核心的模块，提供了文件读写、目录操作等文件系统相关方法。
 fs模块可以实现与硬盘的交互，如读取文件内容、写入文件内容、创建目录、删除文件等操作。
 fs模块是Node.js的基础模块之一，所有的文件操作都需要通过fs模块来完成。
 fs模块提供了同步和异步两种方式来操作文件系统，同步方式会阻塞程序的执行，而异步方式不会阻塞程序的执行。
 fs模块提供了以下常用方法：
 - fs.readFile()：读取文件内容
 - fs.writeFile()：写入文件内容
 - fs.appendFile()：追加文件内容
 - fs.mkdir()：创建目录
 - fs.rmdir()：删除目录
 - fs.unlink()：删除文件
 - fs.stat()：获取文件状态
 - fs.readdir()：读取目录内容
 - fs.rename()：重命名文件或目录
 - fs.watch()：监听文件或目录的变化
 - fs.createReadStream()：创建读取流
 - fs.createWriteStream()：创建写入流
 - fs.promises：Promise版本的fs模块
 - fs.constants：文件系统常量
 - fs.access()：检查文件或目录的访问权限
 - fs.chmod()：更改文件或目录的权限
 - fs.chown()：更改文件或目录的所有者
 - fs.utimes()：更改文件或目录的访问和修改时间
 - fs.fchmod()：更改文件或目录的权限
 - fs.fchown()：更改文件或目录的所有者
 - fs.futimes()：更改文件或目录的访问和修改时间
 - fs.fsync()：同步文件系统缓存
 - fs.fsyncSync()：同步文件系统缓存
 - fs.ftruncate()：截断文件
 - fs.ftruncateSync()：截断文件
 - fs.link()：创建硬链接
 - fs.symlink()：创建符号链接
 - fs.readlink()：读取符号链接
 - fs.unlinkSync()：删除文件
 - fs.rmdirSync()：删除目录
 - fs.mkdirSync()：创建目录
 - fs.writeFileSync()：写入文件内容
 - fs.appendFileSync()：追加文件内容
 - fs.readFileSync()：读取文件内容
 - fs.statSync()：获取文件状态
 - fs.readdirSync()：读取目录内容
 - fs.renameSync()：重命名文件或目录
 - fs.watchFile()：监听文件或目录的变化


## fs模块路径问题
 fs模块中的路径问题是指在使用fs模块时，路径的表示方式和处理方式。
 fs模块中的路径可以是绝对路径或相对路径。
 绝对路径是指从文件系统的根目录开始的路径，例如：/Users/username/Documents/file.txt。
 相对路径是指相对于当前工作目录的路径，例如：./Documents/file.txt。
 fs模块中的路径可以使用path模块来处理。
 path模块提供了一些方法来处理路径，例如：path.join()、path.resolve()、path.normalize()等。
 path.join()方法可以将多个路径片段连接起来，生成一个新的路径。
 path.resolve()方法可以将一个或多个路径片段解析为一个绝对路径。
 path.normalize()方法可以将一个路径规范化，例如：将多个连续的斜杠替换为一个斜杠。
 fs模块中的路径问题可以通过使用path模块来解决。