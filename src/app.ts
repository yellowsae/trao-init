import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createUI } from 'taro-ui-vue3'


// 引入所有组件的样式文件
import "@nutui/nutui-taro/dist/style.css";
import { Button } from '@nutui/nutui-taro';


// import 'taro-ui-vue3/dist/style/index.scss'

import './app.scss'

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// const tuv3 = createUI()

App.use(createPinia())
// App.use(tuv3)



App.use(Button);


export default App
