import request from '@/utils/request'
import axios from 'axios'
import { getToken } from '@/utils/auth'

// 获取消息列表
export function getMessageList(params) {
  return request({
    url: '/messagelist',
    method: 'get',
    params
  })
}

// 获取消息
export function getMessage(id) {
  return request({
    url: '/message',
    method: 'get',
    params: {
      id
    }
  })
}

// 删除消息
export function delMessageList(id) {
  return request({
    url: '/message',
    method: 'delete',
    params: {
      id
    }
  })
}

// 发布消息
export function postMessage(formData) {
  return axios.post('/TDS/message', formData, { headers: { 'X-Token': getToken() }})
}

// 获取区域
export function getArea() {
  return request({
    url: '/area',
    method: 'get'
  })
}

// 获取知识列表
export function getKnowledgeList(params) {
  return request({
    url: '/knowledgelist',
    method: 'get',
    params
  })
}

// 获取知识
export function getKnowledge(id) {
  return request({
    url: '/knowledge',
    method: 'get',
    params: {
      id
    }
  })
}

// 删除知识
export function delKnowledgeList(id) {
  return request({
    url: '/knowledge',
    method: 'delete',
    params: {
      id
    }
  })
}

// 发布知识
export function postKnowledge(formData) {
  return axios.post('/TDS/knowledge', formData, { headers: { 'X-Token': getToken() }})
}

// 获取问答列表
export function getQuestionList(params) {
  return request({
    url: '/questionlist',
    method: 'get',
    params
  })
}

// 获取问题
export function getQuestion(id) {
  return request({
    url: '/question',
    method: 'get',
    params: {
      id
    }
  })
}

// 获取回答
export function getAnswers(id) {
  return request({
    url: '/answers',
    method: 'get',
    params: {
      id
    }
  })
}

// 删除问答
export function delQuestionList(id) {
  return request({
    url: '/question',
    method: 'delete',
    params: {
      id
    }
  })
}

// 保存回答
export function saveAnswer(form) {
  return request({
    url: '/answer',
    method: 'post',
    params: {
      ...form
    }
  })
}

// 发布问题
export function postQuestion(formData) {
  return axios.post('/TDS/question', formData, { headers: { 'X-Token': getToken() }})
}

// 获取用户列表
export function getUserList(params) {
  return request({
    url: '/user/userlist',
    method: 'get',
    params
  })
}

// 修改用户权限
export function postUserAuthority(id, roles) {
  return request({
    url: '/user/authority',
    method: 'post',
    params: {
      id,
      roles
    }
  })
}
