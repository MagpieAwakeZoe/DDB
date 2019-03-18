// import Home from '@/page/home/Home'
// import ERR from '@/page/error'
// import My from '@/page/home/my'
// import Community from '@/page/home/community'
// import Message from '@/page/home/message'
// import Diary from '@/page/home/diary'
// import Write from '@/page/write'
// import Search from '@/page/search'
// import TextDiary from '@/page/text-diary'
import { resolve } from 'path';
export default [
  {
    path:'/',
    name:'首页',
    component:resolve => require(['@/page/home/Home'], resolve),
    children:[
      {path:'/',redirect: 'community'},
      {path:'community',name:'社区',component:resolve => require(['@/page/home/community'], resolve)},
      {path:'/my',name:'我的',component:resolve => require(['@/page/home/my'], resolve)},
      {path:'/message',name:'消息',component:resolve => require(['@/page/home/message'], resolve)},
      {path:'/diary',name:'日记',component:resolve => require(['@/page/home/diary'], resolve)},
    ]
  },
  {
    path:'/error',
    name:'错误',
    component:resolve => require(['@/page/error'], resolve)
  },
  {
    path:'/write',
    name:'写日记',
    component:resolve => require(['@/page/write'], resolve)
  },
  {
    path:'/search',
    name:'搜索',
    component:resolve => require(['@/page/search'], resolve)
  },
  {
    path:'/textDiary',
    name:'文本日记',
    component:resolve => require(['@/page/text-diary'], resolve)
  },
  {
    path:'/regist',
    name:'注册',
    component:resolve => require(['@/page/regist'], resolve)
  },
  {
    path:'/login',
    name:'注册',
    component:resolve => require(['@/page/login'], resolve)
  },
  {
    path:'/details',
    name:'详情',
    component:resolve => require(['@/page/details'], resolve)
  },
  {
    path:'/personalData',
    name:'个人资料',
    component:resolve => require(['@/page/personalData'], resolve)
  },
  {
    path:'/rubbish',
    name:'回收站',
    component:resolve => require(['@/page/rubbish'], resolve)
  },
  {
    path:'/future',
    name:'未来的信',
    component:resolve => require(['@/page/future'], resolve)
  },
  {
    path:'/favourite',
    name:'我的收藏',
    component:resolve => require(['@/page/favourite'], resolve)
  },
  {
    path:'/impression',
    name:'印象',
    component:resolve => require(['@/page/impression'], resolve)
  },
  {
    path:'/setTime',
    name:'时间设置',
    component:resolve => require(['@/page/setTime'], resolve)
  },
  {
    path:'/story',
    name:'写故事',
    component:resolve => require(['@/page/write-story'], resolve)
  },
  {
    path:'/storyDetails',
    name:'写故事',
    component:resolve => require(['@/page/storyDetails'], resolve)
  },
  {
    path:'/focusDetails',
    name:'关注内容',
    component:resolve => require(['@/page/focusDetails'], resolve)
  }
]
