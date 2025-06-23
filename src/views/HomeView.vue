<template>
  <div class="common-layout">
    <el-container class="home-container">
      <el-aside class="home-aside">
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header class="home-header">
          <MainHeader />
          <!-- <el-text class="mx-1" size="large"> Warehouse Management System </el-text> -->
        </el-header>
        <el-main class="home-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainMenu from '../components/MainMenu.vue'
import MainHeader from '../components/MainHeader.vue'
</script>

<style lang="less" scoped>
.home-container {
  background-color: aliceblue;
}
.home-header {
  align-content: center;
  background-color: #fff;
}
.home-aside {
  height: 99.5vh;
  width: auto;
  background-color: rgb(51, 126, 204);
}
.home-main {
  background-color: whitesmoke;
}
.home-footer {
  height: 50px;
  align-content: center;
}
</style>
