import { ref } from 'vue'

// 全局状态，创建在模块作用域下
const userStore = ref('')

export function userLogin(userName) {
  userStore.value = userName
}
export function useAccount() {
  return userStore
}
