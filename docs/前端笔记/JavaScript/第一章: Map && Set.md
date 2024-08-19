## Map && Set
 #### 一, Map对象可以保存键值对

 1, 声明一个Map
 ```js
 const map = new Map()
 ```

 2, Map对象提供啦一些顾名思义的方法
 ```js
 // 向Map中添加一个键值对新元素  注意： map对象中的键是不可以重复的
 map.set(1, 'one')
 // 获取一个指定的键值
 map.get(1)  // 得到one
 // 返回Map对象中所包含的键值对的个数
 map.size() 
 // 判断Map对象中是否存在某一key, true 和 false 返回值
 map.has(key)
 // 通过制定的键从Map对象中移除对应的数据
 map.delete(key)
 // 将这个Map中的所有元素删除
 map.clear()
 ```
3, 遍历Map

```js
const map = new Map()
map.set(1, 'one'),
map.set(2, 'two'),
map.set(3, 'three')
// map的键集合
map.keys()
for (const item of map.keys()) {
	console.log(item)
}
// map的值集合
map.values()
for(const item of map.values()) {
	console.log(item)
}
// map的键值对集合
map.entry()
for(const item of map.entry()) {
	console.log(item) // [1, 'one'] [2, 'two']
}
// forEach, for...of
```
#### 二, Set
 Set对象中，值不允许重复
1, 声明一个set
```js
const set = new Set()
```
2, Set对象提供一些方法
```js
// 返回Set 实例的成员总数
set.size()
// 添加某一个值，返回 Set结构本身（可以链式调用） 注意：重复的值也会添加失败
set.add(val) 
// 删除某一个值，成功返回true, 否则返回false
set.delete(val)
// 判断改值是否为Set的成员，返回一个布尔值
set.has(val)
// 清除所有的成员
set.clear()
```
3, Set对象的遍历
```js
// 返回键名的遍历器, 注意：set的键和值其实是一样的
keys()
// 返回键值的遍历器
values()
// 返回键值对的遍历器
entries()
// 使用回调函数遍历每个成员
forEach(0)
```
