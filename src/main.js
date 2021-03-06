import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import './config/rem'

import '@/icons' // icon
import '@/permission' // permission control
import wxShare from './utils/wxShare'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

// 步骤一 引入 微信 jssdk
import wx from 'weixin-js-sdk'
Vue.use(wx)
let appInit = 0
wxShare.config.jsSDKAuth = '/TDS/wxconfig' // 从后端获取授权信息
Vue.prototype.$wxShare = wxShare

// 第二步 初始化微信分享
const sign_url = location.href.split('#')[0]
appInit++
if (wx) {
  wxShare.initWxShare(sign_url) // 初始化微信分享
}

// 第三步 监听路由重置微信分享为默认
router.afterEach(route => {
  if (appInit > 1) {
    wxShare.resetWxShareConfig()
  }
  appInit++
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
