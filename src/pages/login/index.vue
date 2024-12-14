<template>
  <div>
    <el-button @click="handler">请求</el-button>
  </div>
</template>
<script setup lang="ts">
import { reqLogin } from '@/common/apis/user/index.ts'
defineOptions({
  name: 'Login'
})
const handler = async () => {
  const res = await reqLogin()
  console.log(res)
}
</script>
