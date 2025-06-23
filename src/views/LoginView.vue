<template>
  <div class="center-body">
    <el-card class="login-card">
      <el-header class="card-header">
        <span>Warehouse Management System</span>
      </el-header>
      <el-divider />
      <el-main class="card-main">
        <el-form label-position="right" label-width="auto" style="max-width: 600px">
          <el-form-item label="User Name:">
            <el-input v-model="userName" />
          </el-form-item>
          <el-form-item label="Password: ">
            <el-input type="password" v-model="password" />
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer class="card-footer">
        <el-button type="success" class="login-button" @click="submit()"> Login In</el-button>
      </el-footer>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/login'
import { userLogin } from '@/stores/user'

const router = useRouter()

const userName = ref('')
const password = ref('')

function submit() {
  login(userName, password).then(
    (data) => {
      // TODO
      console.log(data)
      router.push('/welcoem')
    },
    () => {
      console.log('login success(fake)')
      userLogin(userName)
      router.push('/welcome')
    },
  )
}
</script>

<style lang="css" scoped>
.center-body {
  display: flex;
  width: 600px;
  height: 80%;
  margin: 0 auto;
  justify-content: center;
}
.login-card {
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: rgb(235.9, 245.3, 255);
  opacity: 95%;
}
.card-header {
  align-content: center;
  font-size: x-large;
  font-weight: bold;
}
.el-form-item {
  padding: 10px 0;
  align-items: center;
}
::v-deep(.el-form-item__label) {
  font-size: 20px;
}
.login-button {
  height: 40px;
  width: 100%;
  font-size: larger;
}
</style>
