import request from '@/http/axios'

// 暴露请求函数
export const reqLogin = () => request.get('/user')
