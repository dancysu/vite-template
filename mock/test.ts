// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: '123123'
        }
      }
    }
  }
] as MockMethod[]
