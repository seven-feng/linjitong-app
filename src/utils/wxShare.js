/* eslint-disable */
import axios from 'axios';
import wx from 'weixin-js-sdk';
const _config = {
  wx_error:'',
  jsSDKAuth:'',
  shareSign: { // 授权配置信息
    appid: "",
    jsapi_ticket: "",
    nonceStr: "",
    signature: "",
    timestamp: '',
    url: "",
  },
  defaultWxShareConfig:{
    title: "浙江省林业技术推广平台",
    desc: "浙江省林业技术推广平台",
    link: location.href.split("#")[0],
    imgUrl: '',
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'closeWindow'],
    hideMenuList: ['menuItem:editTag', 'menuItem:delete', 'menuItem:originPage', 'menuItem:readMode', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand']
  },
  wxShareConfig:{} // 分享配置信息
};

function WXShare(config) { // 构造函数
  this.config = config || _config;
}

// 初始化微信分享
WXShare.prototype.initWxShare = function(sign_url) {
  let vm = this
  this.wxShareAuth(sign_url).then(() => {
    vm.config.wxShareConfig = Object.assign({},vm.config.defaultWxShareConfig)
    vm.configWXJSSDK()
  })
}

// 获取授权信息
WXShare.prototype.wxShareAuth = function(sign_url) {
  let vm = this
  if (!sign_url) {
    console.error("缺少授权页面url")
    return
  }
  const formData = new FormData()
  formData.append('url', sign_url)
  return axios.post(vm.config.jsSDKAuth, formData).then(res => {
    if(res.status == 200) { // 更新分享授权参数
      let { appid, jsapi_ticket, nonceStr, signature, timestamp, url } = res.data
      vm.config.shareSign.appid = appid
      vm.config.shareSign.jsapi_ticket = jsapi_ticket
      vm.config.shareSign.nonceStr = nonceStr
      vm.config.shareSign.signature = signature
      vm.config.shareSign.timestamp = timestamp
      vm.config.shareSign.url = url
    }
    return res.data
  }).catch((err) => {
    console.log(err.response)
  })
}

// 更新微信分享配置信息
WXShare.prototype.updateWxShareConfig = function(shareConfig) {
  if (!shareConfig) return
  let { title, desc, link, imgUrl, jsApiList, hideMenuList } = shareConfig // 分享配置信息
  let defaultWxShareConfig = this.config.defaultWxShareConfig
  this.config.wxShareConfig.title = title||defaultWxShareConfig.title
  this.config.wxShareConfig.desc = desc||defaultWxShareConfig.desc
  this.config.wxShareConfig.link = link||defaultWxShareConfig.link
  this.config.wxShareConfig.imgUrl = imgUrl||defaultWxShareConfig.imgUrl
  this.config.wxShareConfig.jsApiList = jsApiList||defaultWxShareConfig.jsApiList
  this.config.wxShareConfig.hideMenuList = hideMenuList||defaultWxShareConfig.hideMenuList
  this.configWXJSSDK()
}

// 重置微信分享配置信息
WXShare.prototype.resetWxShareConfig = function() {
  let { title, desc, link, imgUrl, jsApiList, hideMenuList } = this.config.defaultWxShareConfig
  this.config.wxShareConfig.title = title
  this.config.wxShareConfig.desc = desc
  this.config.wxShareConfig.link = link
  this.config.wxShareConfig.imgUrl = imgUrl
  this.config.wxShareConfig.jsApiList = jsApiList
  this.config.wxShareConfig.hideMenuList = hideMenuList
  this.configWXJSSDK();
}

// 调用微信JS-SDK完成分享配置
WXShare.prototype.configWXJSSDK = function(){
  let shareSign = this.config.shareSign // 授权配置信息
  let shareConfig = this.config.wxShareConfig // 分享配置信息
  let vm = this;
  wx.config({
    debug: false,
    appId: shareSign.appid,
    timestamp: shareSign.timestamp,
    nonceStr: shareSign.nonceStr,
    signature: shareSign.signature,
    jsApiList: shareConfig.jsApiList
  })
  wx.ready(function() {
    let wxShareConfig = vm.config.wxShareConfig
    let { title, desc, link, imgUrl, hideMenuList } = wxShareConfig
    wx.onMenuShareAppMessage({
      title,
      desc,
      link,
      imgUrl,
      success: function() {
        // alert("分享成功")
      },
      fail:function(){
        // alert("分享失败")
      },
      cancel: function() {
        // alert("取消分享")
      }
    })
    wx.onMenuShareTimeline({
      title,
      link,
      imgUrl,
      success: function() {
        // alert("分享成功")
      },
      cancel: function() {
        // alert("取消分享")
      }
    })
    wx.hideMenuItems({
      menuList: hideMenuList
    })
  }),
  wx.error(function(res) { // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      config.wx_error = res
      // alert("分享失败: error")
  })
}

const wxShare = new WXShare()
export default wxShare
