import request from '../util/request'

const api = '/api'
export default {
  // 所有get请求
  getRequest: ({
    url,
    params
  }) => {
    return request({
      url: `${api}${url}`,
      method: 'get',
      params
    })
  },
  // 所有 post 请求
  postRequest: ({
    url,
    params
  }) => {
    return request({
      url: `${api}${url}`,
      method: 'post',
      data: params
    })
  },
  // post query请求
  postQueryRequest: ({
    url,
    params
  }) => {
    return request({
      url: `${api}${url}`,
      method: 'post',
      params: params
    })
  }
}