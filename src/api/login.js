import request from '@/utils/request'
import qs from 'qs'
export function login(username, password) {
  const data = {
    loginname:username,
    nloginpwd:password
  }
  return request({
    url: 'api/wechat2.0/loginAction!login.gl',
    method: 'post',
    data: qs.stringify(data),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
