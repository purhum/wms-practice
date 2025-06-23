import request from '../utils/request'

export function login(username, password) {
  const data = {
    username,
    password,
  }
  return request({
    url: '/login',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}
