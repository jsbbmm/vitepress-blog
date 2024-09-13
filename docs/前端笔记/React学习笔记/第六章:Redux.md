# 什么是Redux
Redux是React中最常用的集中状态管理工具，类似于Vue中的Pinia,Vuex, 可以独立于框架运行<br/>
使用步骤<br/>
1:定义一个reducer函数（根据当前想要做的修改返回一个新的状态）<br/>
2:使用`createStore`方法传入`reducer`函数，生成一个`store`实例对象<br/>
3:使用store实例的`subscrible`方法订阅数据的变化，数据一旦变化，可以得到通知<br/>
4:使用store实例的`dispatch`方法提交action对象，触发数据变化，告诉reducer你想怎么改变数据<br/>
5:使用store实例的`getState`方法，获取最新的状态数据更新到视图中<br/>
Demo案例：
![redux步骤](./images//redux-01.png)
注意：Redux把整个数据修改流程分成三个核心概念：分别是：`state`, `action`, `reducer`<br/>
1，state: 一个对象，存放着我们管理的数据状态<br/>
2，action: 一个对象，用来描述你想怎么修改<br/>
3, reducer: 一个函数，更具action的描述生成一个新的state<br/>

### 1, Redux + React 环境搭建
在React中使用Redux, 官方要求安装两个其他插件 `Redux Toolkit` 和 `react-redux`<br/>
1. `Redux Toolkit(RTK)` 官方推荐编写Redux逻辑的方式，是一套工具的合集，简化书写方式
（1）简化store的配置方法  （2）内置immer支持可变式状态修改  （3）内置thunk更好的异步创建
2. `react-redux` 用来链接`Redux`和`React组件`的中间件
  Redux -> react-redux ->React组件
```js
 npm i @reduxjs/toolkit react-redux
```
### 2, Redux + React 同步操作
* Demo 加减计数器
1, 定义counterStore.js
```js
import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
	name: 'counter',
	initialState: {
		count: 0
	},
	// 修改数据的同步方法
	reducers: {
	  increment(state) {
		state.count++
	  },
	  decrement(state) {
		state.count--
	  },
	  addToNum(state, action) {
		state.count = state.count + action.payload
	  }
	}
})
// 解构出创建action对象的函数
const { increment, decrement, addToNum }  = counterStore.actions
// 获取reducer 函数
const counterReducer = counterStore.reducer
// 导出创建action对象的函数和reducer函数
export { increment, decrement, addToNum }
export default counterReducer
```
(2) 创建index.js 组合store仓库
```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'

// 创建store组合子模块
const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})
export default store
```
(3) index.js中注入store
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux'
// 注入store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
```
(4) 组件内获取store
```js
import { useSelector, useDispatch } from "react-redux";
// 导入创建action对象的方法
import { increment, decrement, addToNum } from './store/modules/counterStore'

function App() {
  // useSelector得到store中state的值
  const { count } = useSelector(state => state.counter)
  // 得到dispatch函数
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
       <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
	  <button onClick={() => dispatch(addToNum(10))}>10</button>
    </div>
  );
}
export default App;
```
注意：
* 1， 组件中使用`useSelector`函数获取store中的数据
* 2， 组件中使用`useDispatch`函数获取dispatch方法
* 3， 执行store模块中导出的actionCreater方法，得到要提交的`action`对象

注意：提交action的时候，如果需要传递参数：需要在reducers的同步方法中添加action对象参数，在调用actionCreater的时候传递参数，参数会被传递到action对象payload属性上

### 3, Redux + React 异步操作
1, 创建store的写法保持不变，并配置好同步修改状态的方法
2, 单独封装一个函数，在函数内部return一个新函数，在新函数中，封装异步请求数据，调用同步actionCreater传入异步数据生成一个action对象，并使用dispatch提交
3, 组件中dispatch的写法保持不变
(1) 创建channelStore.js
```js
import { createSlice  } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
	name: 'channel',
	initialState: {
		channelList: []
	},
	reducers: {
		setChannels(state, action) {
			state.channelList = action.payload
		}
	}
})

// 解构
const { setChannels } = channelStore.actions

// 异步请求部分
const fetchChannelList = (dispatch) => {
   return async () => {
	const result = await  axios.get('http://geek.itheima.net/v1_0/channels')
	dispatch(setChannels(result.data.data.channels))
   }
}
export { fetchChannelList }

// 获取reducer
const channelReducer = channelStore.reducer
export default channelReducer;

```
(2) 合并store子模块
```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'
// 创建store组合子模块
const store = configureStore({
	reducer: {
		counter: counterReducer,
		channel: channelReducer
	}
})
export default store
```
(3) 组件中使用
```js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// 导入创建action对象的方法
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
function App() {
  // useSelector得到store中state的值
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  // 得到dispatch函数
  const dispatch = useDispatch()
  // 初始化使用useEffect触发异步请求数据
  useEffect(() => {
    dispatch(fetchChannelList(dispatch))
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
       <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>10</button>
      <button onClick={() => dispatch(fetchChannelList(dispatch))}>异步数据获取</button>
      <ul>
        {
          channelList.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
```
