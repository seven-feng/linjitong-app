import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // app端
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  // 首页
  {
    path: '/home',
    name: 'appHome',
    component: () => import('@/views/home')
  },
  // 登录页
  {
    path: '/login',
    name: 'appLogin',
    component: () => import('@/views/login')
  },
  // 注册页
  {
    path: '/register',
    name: 'appRegister',
    component: () => import('@/views/register')
  },
  // 定位
  {
    path: '/location',
    name: 'appLocation',
    component: () => import('@/views/location')
  },
  // 内容搜索
  {
    path: '/content',
    name: 'appContent',
    component: () => import('@/views/content')
  },
  // 系统消息列表
  {
    path: '/sysmessageList',
    name: 'appSystemMessageList',
    component: () => import('@/views/sysmessage/sysmessageList')
  },
  // 系统消息
  {
    path: '/sysmessageDetail',
    name: 'appSystemMessageDetail',
    component: () => import('@/views/sysmessage/sysmessageDetail')
  },
  // 消息列表
  {
    path: '/messageList',
    name: 'appMessageList',
    component: () => import('@/views/message/messageList'),
    hidden: true
  },
  // 消息
  {
    path: '/messageDetail/:id',
    name: 'appMessageDetail',
    component: () => import('@/views/message/messageDetail'),
    hidden: true
  },
  {
    path: '/knowledgeList',
    name: 'appKnowledgeList',
    component: () => import('@/views/knowledge/knowledgeList'),
    hidden: true
  },
  // 空中课堂 更多
  {
    path: '/moreKnowledgeContent',
    name: 'moreKnowledgeContent',
    component: () => import('@/views/knowledge/moreKnowledgeContent'),
    hidden: true
  },
  // 空中课堂 更多 单独显示 去掉回退
  {
    path: '/wmoreKnowledgeContent',
    name: 'wmoreKnowledgeContent',
    component: () => import('@/views/knowledge/wmoreKnowledgeContent'),
    hidden: true
  },
  {
    path: '/knowledgeDetail/:id',
    name: 'appKnowledgeDetail',
    component: () => import('@/views/knowledge/knowledgeDetail'),
    hidden: true
  },
  {
    path: '/question',
    name: 'appQuestion',
    component: () => import('@/views/question'),
    redirect: '/question/allQuestion',
    hidden: true,
    children: [
      {
        path: 'questionList',
        component: () => import('@/views/question/questionList')
      },
      {
        path: 'myQuestion',
        name: 'myQuestion',
        component: () => import('@/views/question/myQuestion')
      },
      {
        path: 'allQuestion',
        name: 'allQuestion',
        component: () => import('@/views/question/allQuestion')
      }
    ]
  },
  {
    path: '/questionList',
    name: 'appQuestionList',
    component: () => import('@/views/question/questionList'),
    hidden: true
  },
  {
    path: '/questionDetail/:id',
    name: 'appQuestionDetail',
    component: () => import('@/views/question/questionDetail'),
    hidden: true
  },
  {
    path: '/publishQuestion',
    name: 'appPublishQuestion',
    component: () => import('@/views/question/publishQuestion'),
    hidden: true
  },
  // 典型示范列表
  {
    path: '/modelList',
    name: 'appModelList',
    component: () => import('@/views/model/modelList'),
    hidden: true
  },
  // 典型示范详情
  {
    path: '/modelDetail/:id',
    name: 'appModelDetail',
    component: () => import('@/views/model/modelDetail'),
    hidden: true
  },
  // 专家库列表
  {
    path: '/expertdbList',
    name: 'appExpertdbList',
    component: () => import('@/views/expertdb/expertdbList'),
    hidden: true
  },
  // 专家库详情
  {
    path: '/expertdbDetail/:id',
    name: 'appExpertdbDetail',
    component: () => import('@/views/expertdb/expertdbDetail'),
    hidden: true
  },
  // 联系我们
  {
    path: '/contact',
    name: 'appContact',
    component: () => import('@/views/contact'),
    hidden: true
  },
  // 空白页
  {
    path: '/gap',
    name: 'appGap',
    component: () => import('@/views/gap'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []
