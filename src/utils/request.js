import axios from 'axios'
const service = axios.create({})

service.interceptors.request.use(
  (config) => {
    console.log('Test Request:' + config.data)
    return config
  },
  (error) => {
    console.log('请求出错', error)
    return Promise.reject()
  },
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('请求出错', error.response)
    return Promise.reject()
  },
)

export default service
